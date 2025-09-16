# Push Karan Bohara's Portfolio to GitHub

Repository URL: https://github.com/xxBebo-developer/karan-bohara-portfolio.git

## Commands to Run (After Git Installation)

### 1. Configure Git (First time setup)
```bash
git config --global user.name "Karan Bohara"
git config --global user.email "your-email@example.com"
```

### 2. Initialize and Connect Repository
```bash
# Navigate to project directory (if not already there)
cd "c:\Users\bpptc\OneDrive\Desktop\personal portfolio website"

# Initialize Git repository
git init

# Add remote repository
git remote add origin https://github.com/xxBebo-developer/karan-bohara-portfolio.git

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Karan Bohara's Portfolio Website

Features:
- Modern React portfolio with Vite build system
- Responsive design with TailwindCSS v4
- Mouse-following neon border effects on project cards
- Contact form with proper z-index handling
- Dark/light theme support
- Configuration-based content management
- Professional sections: Hero, About, Projects, Services, Contact
- Framer Motion animations and React Icons
- Personal information: Karan Bohara
- Profile photo: src/assets/images/karan-profile.jpg"

# Set main branch and push
git branch -M main
git push -u origin main
```

### 3. Verify Upload
After running the commands, check your repository at:
https://github.com/xxBebo-developer/karan-bohara-portfolio

## Project Structure Being Uploaded

✅ **Key Files:**
- `src/config/personalInfo.js` - Your personal details (Karan Bohara)
- `src/config/projects.js` - Your projects configuration
- `src/assets/images/karan-profile.jpg` - Your profile photo
- `src/components/sections/Projects.jsx` - Mouse-following effects
- `src/components/sections/Contact.jsx` - Fixed contact form
- `.gitignore` - Properly configured
- `package.json` - Dependencies and scripts
- `vite.config.js` - Build configuration
- `tailwind.config.js` - TailwindCSS v4 setup

✅ **Features Included:**
- Professional portfolio layout
- Mouse-following neon effects on project cards
- Working contact form (fixed z-index issues)
- Responsive design for all devices
- Configuration-based content management

## Future Updates

To update your portfolio later:
```bash
git add .
git commit -m "Update: describe your changes"
git push
```

## GitHub Pages Deployment (Optional)

To host your portfolio for free:
1. Go to repository Settings
2. Pages section
3. Source: Deploy from branch → main
4. Your site: https://xxbebo-developer.github.io/karan-bohara-portfolio

---

**Ready to showcase your work! 🚀**