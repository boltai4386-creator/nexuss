import { GlowCard } from '../ui/spotlight-card';
import { communicationTools } from '../../data/communication';

export const CommunicationSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic font-heading">
            Flawless Communication!
          </h2>
        </div>

        {/* Communication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto communication-mobile">
          {communicationTools.map((tool) => (
            <GlowCard
              key={tool.id}
              glowColor={tool.color}
              customSize={true}
              className="aspect-[16/9] w-full max-w-sm mx-auto communication-card-gradient communication-card-mobile"
            >
              <div className="flex flex-col justify-center items-center h-full text-center p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {tool.icon}
                </div>
                
                {/* Tool Name */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tool.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-body">
                  {tool.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};