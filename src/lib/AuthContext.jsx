import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isDemo } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        if (isDemo) {
          // In demo mode, skip auth setup
          setUser(null);
          setLoading(false);
          return;
        }
        
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setLoading(false);
      } catch (error) {
        console.warn('Auth setup skipped - demo mode or missing credentials');
        setUser(null);
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes only if not in demo mode
    let subscription = null;
    if (!isDemo) {
      try {
        const { data } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
          }
        );
        subscription = data.subscription;
      } catch (error) {
        console.warn('Auth listener setup failed - demo mode');
      }
    }

    return () => subscription?.unsubscribe?.();
  }, []);

  // Sign in with email and password
  const signIn = async (email, password) => {
    if (isDemo) {
      return { success: false, error: 'Demo mode - Auth features disabled' };
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Sign out
  const signOut = async () => {
    if (isDemo) {
      return { success: false, error: 'Demo mode - Auth features disabled' };
    }
    
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Sign up new user
  const signUp = async (email, password) => {
    if (isDemo) {
      return { success: false, error: 'Demo mode - Auth features disabled' };
    }
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;