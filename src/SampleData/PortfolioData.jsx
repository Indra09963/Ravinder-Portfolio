import marriageImages from '../Utils/marriageImages';
import sample from '../assets/Images/Portfolio/PreWedding/Videos/Sample.mp4';
import eventImages from '../Utils/eventImages';
import preWeddingImages from '../Utils/preWeddingImages';
// import Twins from '../assets/Images/Portfolio/PreWedding/Videos/Twins.mp4';
import twins from '../assets/Images/Portfolio/Events/Videos/Twins.mp4'

// Optional poster (static or first image)
const DEFAULT_POSTER = marriageImages[0];

export const SERVICES = [
  {
    id: "wedding",
    label: "Wedding",
    images: marriageImages,
    videos: [
      {
        id: "w1",
        title: "Wedding Highlights (45s)",
        src: sample,
        poster: DEFAULT_POSTER,
      },
      // {
      //   id: "w2",
      //   title: "Wedding Highlights (45s)",
      //   src: sample,
      //   poster: DEFAULT_POSTER,
      // },
    ],
  },

  {
    id: "prewed",
    label: "Pre-wedding",
    images: preWeddingImages, // You can create preWeddingImages loader later
    videos: [
      {
        id: "p1",
        title: "Pre-wed Teaser (30s)",
        src: sample,
        poster: DEFAULT_POSTER,
      },
    ],
  },

  {
  id: "events",
  label: "Events",
  images: eventImages, 
  videos: [
    {
      id: "e1",
      title: "Event Highlights",
      src: twins,
      poster: eventImages[0],
    },
  ],
},
];
