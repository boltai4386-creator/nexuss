import { HandIcon } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Navigation = () => {
  return (
    <AnimatedSection delay={100} className="flex justify-center mb-16">
      <div className="bg-zinc-900/80 rounded-full p-1 backdrop-blur-sm">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white">
            <span className="bg-white p-1 rounded-md">
              <HandIcon className="h-4 w-4 text-black" />
            </span>
            Home
          </a>
          <a
            href="/about"
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};