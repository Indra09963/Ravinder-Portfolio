import marriageImages from '../Utils/marriageImages';
import eventImages from '../Utils/eventImages';
import preWeddingImages from '../Utils/preWeddingImages';

// Optional poster (static or first image)
const DEFAULT_POSTER = marriageImages[0];

export const SERVICES = [
  {
    id: "wedding",
    label: "Wedding",
    images: marriageImages,
    videos: [],
  },

  {
    id: "prewed",
    label: "Pre-wedding",
    images: preWeddingImages,
    videos: [],
  },

  {
    id: "events",
    label: "Events",
    images: eventImages,
    videos: [],
  },
];