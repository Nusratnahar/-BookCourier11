import { MapPin, Building2 } from "lucide-react";

const cities = [
  { name: "New York", libraries: 45, active: true },
  { name: "Los Angeles", libraries: 32, active: true },
  { name: "Chicago", libraries: 28, active: true },
  { name: "Houston", libraries: 22, active: true },
  { name: "Phoenix", libraries: 18, active: true },
  { name: "San Diego", libraries: 15, active: true },
  { name: "Dallas", libraries: 20, active: false },
  { name: "Austin", libraries: 12, active: false },
];

const CoverageSection = () => {
  return (
    <section className="py-20 bg-[#f6f1eb] dark:bg-[#14110f] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* MAP */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-lg mx-auto relative group">

              <div className="absolute inset-0 rounded-3xl overflow-hidden
                              bg-white dark:bg-[#1c1713]
                              border border-[#e5d6c8] dark:border-[#3b3028]
                              shadow-xl transition-all duration-500
                              group-hover:shadow-2xl">

                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path
                      d="M50,150 Q100,100 150,120 T250,100 T350,150 L350,250 Q300,280 250,260 T150,280 T50,250 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#5a3e2b]"
                    />
                  </svg>
                </div>

                {[
                  { x: "25%", y: "35%", delay: "0s" },
                  { x: "15%", y: "55%", delay: "0.2s" },
                  { x: "45%", y: "40%", delay: "0.4s" },
                  { x: "55%", y: "60%", delay: "0.6s" },
                  { x: "70%", y: "45%", delay: "0.8s" },
                  { x: "80%", y: "55%", delay: "1s" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: pos.x, top: pos.y }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-[#5a3e2b] rounded-full" />
                      <div className="absolute inset-0 w-3 h-3 bg-[#5a3e2b] rounded-full animate-ping opacity-60" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#5a3e2b]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c8a27a]/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">

            <span className="text-[#5a3e2b] font-medium">
              Coverage Area
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#3b2a1f] dark:text-[#f5e8dc]">
              Delivering Books Across the Nation
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
              BookCourier partners with libraries in major cities across the United States.
              Our network is expanding every month to bring books closer to readers.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white dark:bg-[#1c1713]
                              border border-[#e5d6c8] dark:border-[#3b3028]
                              rounded-2xl p-5 shadow-md
                              hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300">

                <div className="w-10 h-10 rounded-lg bg-[#5a3e2b]/10 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#5a3e2b]" />
                </div>

                <p className="text-3xl font-bold text-[#3b2a1f] dark:text-[#f5e8dc]">
                  50+
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cities Covered
                </p>
              </div>

              <div className="bg-white dark:bg-[#1c1713]
                              border border-[#e5d6c8] dark:border-[#3b3028]
                              rounded-2xl p-5 shadow-md
                              hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300">

                <div className="w-10 h-10 rounded-lg bg-[#5a3e2b]/10 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-[#5a3e2b]" />
                </div>

                <p className="text-3xl font-bold text-[#3b2a1f] dark:text-[#f5e8dc]">
                  200+
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Partner Libraries
                </p>
              </div>

            </div>

            {/* CITIES */}
            <div className="flex flex-wrap gap-2 mt-7">

              {cities.map((city) => (
                <span
                  key={city.name}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300 cursor-pointer hover:scale-105
                  ${
                    city.active
                      ? "bg-[#5a3e2b]/10 text-[#5a3e2b] dark:text-[#d6b08a]"
                      : "bg-gray-200 dark:bg-[#2a211d] text-gray-500"
                  }`}
                >
                  {city.name}
                  {!city.active && " (Soon)"}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;