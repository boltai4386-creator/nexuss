import { Heart, Zap, Grid2X2 } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Reliability',
    description: "We don't disappear mid projects.",
  },
  {
    icon: Zap,
    title: 'Fast Production',
    description: 'Fastest possible production without quality compromise',
  },
  {
    icon: Grid2X2,
    title: 'Trust > Money',
    description: 'Trust over money anyday. We prioritize long-term relationships.',
  }
];

export const FeatureCards = () => {
  return (
    <section className="relative z-10 py-16 bg-black" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Why Choose <span className="text-[#7CFC00]">Us</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-body">
            Three core principles that set us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex justify-center relative">
              <div className="card-3d-parent">
                <div className="card-3d">
                  <div className="glass-3d"></div>
                  
                  {/* Logo/Icon Section */}
                  <div className="logo-3d">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <feature.icon className="w-5 h-5 text-white" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="content-3d">
                    <span className="title-3d">{feature.title}</span>
                    <span className="text-3d">{feature.description}</span>
                  </div>

                  {/* Bottom Section */}
                  <div className="bottom-3d">
                    <div className="social-buttons-container-3d">
                      <button className="social-button-3d social-button1-3d">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="social-button-3d social-button2-3d">
                        <Zap className="w-4 h-4" />
                      </button>
                      <button className="social-button-3d social-button3-3d">
                        <Grid2X2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="view-more-3d">
                      <button className="view-more-button-3d">Explore</button>
                      <svg
                        className="svg-3d"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};