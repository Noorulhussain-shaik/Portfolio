# How to Add Your Profile Picture

## Steps to add your profile picture:

1. **Save your profile picture** as `profile-pic.jpg` in the `public` folder
2. **Recommended size**: 400x400 pixels or larger (square aspect ratio works best)
3. **File format**: JPG, PNG, or WebP
4. **File location**: `D:\Portfolio\public\profile-pic.jpg`

## Current Setup:
- The Hero component is already configured to display your profile picture
- If the image fails to load, it will automatically fallback to your initials "NS"
- The image will be displayed in a circular frame with a green border

## Alternative:
If you want to use a different filename or location, update the `src` attribute in `components/Hero.tsx`:
```tsx
<img
  src="/your-image-name.jpg"  // Change this to your image filename
  alt="Noorul Shaik"
  className="w-full h-full object-cover"
  // ... rest of the code
/>
```

Your profile picture will be automatically displayed once you add the image file to the public folder!
