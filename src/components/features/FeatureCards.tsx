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
    <section className="relative z-10 py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative feature-cards-mobile">
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