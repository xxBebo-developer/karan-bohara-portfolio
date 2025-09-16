# Portfolio Content Management Guide

This portfolio uses separate configuration files to manage all content. You can easily update your portfolio by editing these files without touching the code.

## Configuration Files Location
All configuration files are located in: `src/config/`

## Files to Edit:

### 1. Personal Information (`src/config/personalInfo.js`)
Edit this file to update:
- ✅ **Name and Title**: Change your name and professional title
- ✅ **Profile Image**: Update the path to your profile photo
- ✅ **Contact Information**: Email, phone, location, website
- ✅ **Social Media Links**: GitHub, LinkedIn, Twitter, Instagram
- ✅ **About Section**: Description, skills list, experience stats

### 2. Projects (`src/config/projects.js`)
Edit this file to:
- ✅ **Add New Projects**: Add objects to the projects array
- ✅ **Update Existing Projects**: Modify title, description, technologies
- ✅ **Project Images**: Update image paths (place images in `public/images/projects/`)
- ✅ **Links**: Update GitHub and live demo URLs
- ✅ **Categories**: Assign projects to categories for filtering

### 3. Theme & Styling (`src/config/theme.js`)
Edit this file to customize:
- ✅ **Colors**: Primary, secondary, accent colors
- ✅ **Fonts**: Typography settings
- ✅ **Animations**: Animation duration and easing
- ✅ **Layout**: Max width, spacing, border radius

## How to Add Images:

### Profile Image:
1. Place your profile photo in: `public/images/`
2. Update the path in `personalInfo.js`: `profileImage: "/images/your-photo.jpg"`

### Project Images:
1. Place project screenshots in: `public/images/projects/`
2. Update the path in `projects.js`: `image: "/images/projects/your-project.jpg"`

## Example: Adding a New Project

```javascript
{
  id: 6, // Increment the ID
  title: "My New Project",
  description: "Description of what this project does...",
  image: "/images/projects/new-project.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://my-project.com", // or null if no live demo
  githubUrl: "https://github.com/username/project",
  featured: true, // Show as featured project
  category: "Full Stack"
}
```

## Example: Updating Personal Info

```javascript
// In personalInfo.js
export const personalInfo = {
  name: "Your Name Here",
  title: "Your Job Title",
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State"
  }
  // ... rest of the configuration
};
```

## No Coding Required!
- ✅ Just edit the configuration files
- ✅ Save the files
- ✅ The website will automatically update
- ✅ No need to touch React components or CSS

## Tips:
- Keep image files optimized (under 1MB each)
- Use consistent image dimensions for best results
- Test your changes by running `npm run dev`
- Backup your configuration files before making major changes

## Need Help?
If you encounter any issues:
1. Check the browser console for errors
2. Make sure image paths are correct
3. Ensure all commas and brackets are properly placed in the config files
4. Contact support if needed

Happy portfolio building! 🚀