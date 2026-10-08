// Auto-load all marriage images using Vite
const images = import.meta.glob(
  '../assets/Images/Portfolio/Marriage/Images/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

// Convert object → sorted array → image URLs
const marriageImages = Object.entries(images)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/\d+/));
    const numB = parseInt(b[0].match(/\d+/));
    return numA - numB;
  })
  .map(([, img]) => img.default);

export default marriageImages;
