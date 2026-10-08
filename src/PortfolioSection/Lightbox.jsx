import React from "react";

export default function Lightbox({ media, onClose }) {
  function close(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      onClick={close}
    >
      {/* IMAGE */}
      {media.type === "image" && (
        <div className="relative max-w-4xl w-full">
          <img src={media.src} className="w-full rounded-lg" alt="full" />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 p-2 rounded-full text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* VIDEO */}
      {media.type === "video" && (
        <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden">
          <video controls className="w-full" poster={media.item.poster}>
            <source src={media.item.src} type="video/mp4" />
          </video>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/60 p-2 rounded-full text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}