import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos } from '../../data/videos';

export const VideoCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const totalSets = 1; // Only one set now with 3 videos
  const videosPerSet = 3;

  const handlePrevious = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  const handleNext = () => {
    if (currentSet < totalSets - 1) {
      setCurrentSet(currentSet + 1);
    }
  };

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Video Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentSet === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSet === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-black/70 text-white hover:bg-black/90 hover:scale-110'
            }`}
            aria-label="Previous video set"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSet === totalSets - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentSet === totalSets - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-black/70 text-white hover:bg-black/90 hover:scale-110'
            }`}
            aria-label="Next video set"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video Grid */}
          <div className="carousel-container overflow-hidden rounded-xl">
            <div 
              className="carousel-track flex transition-transform duration-500 ease-in-out px-4 sm:px-8 md:px-16"
              style={{ transform: `translateX(-${currentSet * 100}%)` }}
            >
              {/* Video Set */}
              <div className="carousel-set flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="video-card group">
                    <div className="relative aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden max-w-[280px] sm:max-w-[320px] mx-auto">
                      <iframe
                        src={video.url}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? 'bg-[#00ff75] scale-110'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to video set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};