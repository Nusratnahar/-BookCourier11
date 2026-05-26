import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 50000, label: "Books Available", suffix: "+" },
  { value: 25000, label: "Happy Readers", suffix: "+" },
  { value: 200, label: "Partner Libraries", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
];

const useCountUp = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden
                 bg-linear-to-br from-[#f6f1eb] via-[#efe3d6] to-[#e7ddd2]
                 dark:from-[#14110f] dark:via-[#1a1512] dark:to-[#14110f]"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#5a3e2b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c8a27a] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

const StatItem = ({ stat, isVisible, delay }) => {
  const [start, setStart] = useState(false);
  const count = useCountUp(stat.value, 1800, start);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setStart(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className="group relative text-center p-6 md:p-8
                 rounded-2xl bg-white/70 dark:bg-[#1c1713]/80
                 backdrop-blur-md
                 border border-[#e5d6c8] dark:border-[#3b3028]
                 shadow-md hover:shadow-2xl
                 transition-all duration-300
                 hover:-translate-y-2"
    >

      <div
        className="text-3xl md:text-5xl font-bold
                   text-[#5a3e2b] dark:text-[#f5e8dc]
                   group-hover:scale-110 transition-transform duration-300"
      >
        {count.toLocaleString()}
        {stat.suffix}
      </div>

      <div
        className="mt-2 text-sm md:text-base
                   text-gray-600 dark:text-gray-400
                   group-hover:text-[#3b2a1f] dark:group-hover:text-white
                   transition-colors duration-300"
      >
        {stat.label}
      </div>

      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#5a3e2b] group-hover:w-3/4 transition-all duration-300 -translate-x-1/2"></div>

    </div>
  );
};

export default StatsSection;