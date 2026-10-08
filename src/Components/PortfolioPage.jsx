// PortfolioPage.jsx
import React from "react";
import { SERVICES } from '../SampleData/PortfolioData.jsx';
import Lightbox from "../PortfolioSection/Lightbox.jsx";

export default function PortfolioPage() {
  const [selectedService, setSelectedService] = React.useState("wedding");
  const [selectedType, setSelectedType] = React.useState("images");
  const [lightbox, setLightbox] = React.useState(null);

  const content =
    Array.isArray(SERVICES)
      ? SERVICES.find((s) => s.id === selectedService) || { images: [], videos: [] }
      : (SERVICES && SERVICES[selectedService]) || { images: [], videos: [] };

  const serviceKeys = Array.isArray(SERVICES) ? SERVICES.map((s) => s.id) : Object.keys(SERVICES || {});

  const gridRef = React.useRef(null);

  // compute span for a single image element
  const computeSpanForImage = (imgEl) => {
    const grid = gridRef.current;
    if (!grid || !imgEl) return;

    // get computed values (strings like "10px")
    const styles = window.getComputedStyle(grid);
    const rowHeight = parseFloat(styles.getPropertyValue("grid-auto-rows")) || 10; // px
    const gap = parseFloat(styles.getPropertyValue("gap")) || parseFloat(styles.getPropertyValue("grid-row-gap")) || 20; // px

    // measure the rendered image height
    const imgHeight = imgEl.getBoundingClientRect().height;

    // calculate span (including gap)
    const span = Math.ceil((imgHeight + gap) / (rowHeight + gap));

    const parent = imgEl.closest(".grid-item");
    if (parent) parent.style.gridRowEnd = `span ${span}`;
  };

  // Called on each image load or when recalculation is needed
  const onImageLoad = (imgEl) => {
    // imgEl may be event.target or element
    const imgElement = imgEl instanceof HTMLImageElement ? imgEl : (imgEl.target || imgEl);
    computeSpanForImage(imgElement);
  };

  // Recalculate spans for all images (useful on resize)
  const recalcAll = React.useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const imgs = grid.querySelectorAll(".grid-item img");
    imgs.forEach((img) => {
      // only compute if image already loaded
      if (img.complete && img.naturalWidth !== 0) {
        computeSpanForImage(img);
      } else {
        // if not loaded yet, set a load listener
        img.addEventListener(
          "load",
          function handler() {
            computeSpanForImage(img);
            img.removeEventListener("load", handler);
          },
          { once: true }
        );
      }
    });
  }, []);

  // Debounce helper
  const debounce = (fn, wait = 100) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  React.useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // initial calc once component mounts and images may be cached/loaded
    recalcAll();

    // ResizeObserver so changes to container (e.g., layout shifts) recalc spans
    const ro = new ResizeObserver(debounce(() => recalcAll(), 100));
    ro.observe(grid);

    // fallback window resize
    const onWinResize = debounce(() => recalcAll(), 120);
    window.addEventListener("resize", onWinResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWinResize);
    };
  }, [recalcAll]);

  return (
    <section className="py-10 mx-auto bg-black px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Portfolio by Service</h2>

      <div className="flex gap-4 mb-6 flex-wrap">
        {serviceKeys.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedService(s)}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedService === s
                ? "bg-linear-to-r from-[#E5B567] to-[#D9A74B] text-black"
                : "bg-black/40 text-white border border-white/10"
            }`}
          >
            {(() => {
              const svc = Array.isArray(SERVICES) ? SERVICES.find(x => x.id === s) : (SERVICES && SERVICES[s]);
              return svc?.label || (s === "wedding" ? "Wedding" : s === "prewed" ? "Pre-wedding" : "Events");
            })()}
          </button>
        ))}
      </div>

      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setSelectedType("images")}
          className={`px-4 py-2 rounded-md ${selectedType === "images" ? "bg-white/10 text-white" : "bg-black/40 text-white/80 border border-white/10"}`}
        >
          Images
        </button>

        <button
          onClick={() => setSelectedType("videos")}
          className={`px-4 py-2 rounded-md ${selectedType === "videos" ? "bg-white/10 text-white" : "bg-black/40 text-white/80 border border-white/10"}`}
        >
          Videos
        </button>
      </div>

      {/* GRID: larger images (min column width 320px), grid-auto-rows 10px for nicer sizing */}
      <div
        ref={gridRef}
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", // larger tiles
          gap: "20px",
          gridAutoRows: "10px", // base row size (10px gives good precision for larger images)
          alignItems: "start",
        }}
      >
        {/* IMAGES */}
        {selectedType === "images" &&
          (content.images || []).map((img, i) => (
            <div
              key={i}
              className="grid-item rounded-lg overflow-hidden bg-black/5"
              style={{ width: "100%" }}
            >
              <button
                onClick={() => setLightbox({ type: "image", src: img })}
                className="w-full h-full block"
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`service-${i}`}
                  loading="lazy"
                  onLoad={(e) => onImageLoad(e.target)}
                  onError={(e) => {
                    // in case of error still try to compute spacing (may be fallback or broken)
                    onImageLoad(e.target);
                  }}
                  style={{
                    width: "95%",
                    height: "90%",
                    display: "block",
                  }}
                />
              </button>
            </div>
          ))}

        {/* VIDEOS (use poster images in grid so columns align) */}
        {selectedType === "videos" &&
          (content.videos || []).map((v, i) => (
            <div key={i} className="grid-item rounded-lg overflow-hidden bg-black/5" style={{ width: "100%" }}>
              <button
                onClick={() => setLightbox({ type: "video", item: v })}
                className="w-full h-full block relative"
                aria-label={`Open video ${i + 1}`}
              >
                <img
                  src={v.poster}
                  alt={`video-poster-${i}`}
                  loading="lazy"
                  onLoad={(e) => onImageLoad(e.target)}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />

                {/* Play icon overlay */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <div className="bg-black/60 p-3 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3v18l15-9z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
      </div>

      {lightbox && <Lightbox media={lightbox} onClose={() => setLightbox(null)} />}
        
    </section>
  );
}
