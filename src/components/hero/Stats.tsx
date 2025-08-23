import { AnimatedSection } from '../ui/AnimatedSection';
import { CountUp } from '../ui/CountUp';
import { stats } from '../../data/stats';

export const Stats = () => {
  return (
    <AnimatedSection delay={1300} className="w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            key={index}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center animate-card"
            style={{ animationDelay: `${1300 + index * 200}ms` }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              <CountUp end={stat.number} plus={stat.plus} duration={2000 + index * 300} />
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};
  )
}