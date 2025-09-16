# GitHub Setup Guide for Karan Bohara's Portfolio

This guide will help you push your portfolio website to GitHub.

## Prerequisites

1. **Install Git**: Download from [git-scm.com](https://git-scm.com/download/win)
2. **GitHub Account**: Create one at [github.com](https://github.com) if you don't have one

## Step-by-Step Instructions

### 1. Install Git (if not already done)
- Download Git for Windows from https://git-scm.com/download/win
- Run the installer with default settings
- Restart your terminal/PowerShell

### 2. Configure Git (First time setup)
```bash
git config --global user.name "Karan Bohara"
git config --global user.email "your-email@example.com"
```

### 3. Initialize Git Repository
```bash
# Navigate to your project directory
cd "c:\Users\bpptc\OneDrive\Desktop\personal portfolio website"

# Initialize git repository
git init

# Add all files to staging
git add .

# Make initial commit
git commit -m "Initial commit: Personal Portfolio Website

- Modern React portfolio with Vite
- Features: Hero, About, Projects, Services, Contact sections
- Mouse-following neon border effects on project cards
- Responsive design with dark/light theme support
- Configuration-based content management
- Contact form with proper input handling"
```

### 4. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository" (green button)
3. Repository name: `portfolio-website` or `karan-bohara-portfolio`
4. Description: "Personal portfolio website showcasing projects and skills"
5. Make it **Public** (recommended for portfolios)
6. **DO NOT** initialize with README (since you already have files)
7. Click "Create repository"

### 5. Connect Local Repository to GitHub
```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 6. Future Updates
After making changes to your portfolio:
```bash
# Check status
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "Update: description of what you changed"

# Push to GitHub
git push
```

## Important Notes

- Your profile photo is located at `src/assets/images/karan-profile.jpg`
- Configuration files for easy updates:
  - `src/config/personalInfo.js` - Your personal information
  - `src/config/projects.js` - Your projects
  - `src/config/theme.js` - Theme settings
- The `.gitignore` file is already configured to exclude `node_modules` and other unnecessary files

## GitHub Pages Deployment (Optional)

To host your portfolio for free on GitHub Pages:

1. Go to your repository settings
2. Scroll to "Pages" section
3. Source: Deploy from a branch
4. Branch: `main` → `/docs` or use GitHub Actions
5. Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website`

For Vite projects, you may need to:
```bash
npm run build
```
Then push the `dist` folder or configure GitHub Actions for automatic deployment.

## Troubleshooting

- **Git not recognized**: Make sure Git is installed and restart your terminal
- **Authentication issues**: Use GitHub Personal Access Token instead of password
- **Push rejected**: Make sure you're pushing to the correct repository URL

## Contact

If you need help, your portfolio includes a contact form and displays:
- Email: (as configured in personalInfo.js)
- Phone: (as configured in personalInfo.js)
- Social links: GitHub, LinkedIn, etc.

---

**Good luck with your portfolio! 🚀**