import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { longFormVideos, LongFormVideo } from '../../data/longform-videos';

interface VideoCardProps {
  video: LongFormVideo;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="group relative bg-zinc-900 rounded-xl overflow-hidden">
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={video.url}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export const LongFormVideoShowcase = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden" aria-label="Long-form video showcase">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Long-Form <span className="text-[#7CFC00]">Content</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {longFormVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </div>
    </section>
  );
};