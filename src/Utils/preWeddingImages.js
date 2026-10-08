const images = import.meta.glob(
  '../assets/Images/Portfolio/PreWedding/Images/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const preWeddingImages = Object.entries(images)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/\d+/));
    const numB = parseInt(b[0].match(/\d+/));
    return numA - numB;
  })
  .map(([, img]) => img.default);

export default preWeddingImages;
