# Image Folder Instructions

## How to Add Images to Your Portfolio

### Profile Image
1. Place your profile photo in this folder (`public/images/`)
2. Name it something like `profile.jpg` or `my-photo.jpg`
3. Update the path in `src/config/personalInfo.js`:
   ```javascript
   profileImage: "/images/your-photo-name.jpg"
   ```

### Project Images
1. Place project screenshots in the `projects/` subfolder
2. Use descriptive names like `ecommerce-app.jpg`, `task-manager.jpg`, etc.
3. Update the paths in `src/config/projects.js`:
   ```javascript
   image: "/images/projects/your-project-name.jpg"
   ```

## Image Guidelines
- **Format**: Use JPG or PNG format
- **Size**: Keep images under 1MB for better loading performance
- **Dimensions**: 
  - Profile image: 400x400px (square) works best
  - Project images: 600x400px (landscape) recommended
- **Quality**: Use good quality images that represent your work well

## Placeholder Images
Until you add your own images, the portfolio will show placeholder images or may have broken image links. This is normal and will be fixed once you add your images.

## Need Help?
If you're having trouble with images, check:
1. File paths are correct (case-sensitive)
2. Images are in the right folder
3. File extensions match what's in the config files