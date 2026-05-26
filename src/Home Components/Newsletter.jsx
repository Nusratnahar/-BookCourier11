export default function Newsletter() {
  return (
    <section
      className="relative overflow-hidden py-20 px-10
                 bg-linear-to-br from-[#f6f1eb] to-[#e7ddd2]
                 dark:from-[#14110f] dark:to-[#1d1814]
                 transition-all duration-500"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c8a27a]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5a3e2b]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        <div
          className="rounded-3xl border border-[#e5d6c8]
                     dark:border-[#3b3028]
                     bg-white/80 dark:bg-[#211c18]/90
                     backdrop-blur-lg
                     shadow-xl dark:shadow-black/40
                     p-8 md:p-14 text-center
                     transition-all duration-500"
        >
          {/* <div
            className="inline-block px-4 py-1 rounded-full text-sm font-medium
                       bg-[#f3e7db] dark:bg-[#2d241f]
                       text-[#5a3e2b] dark:text-[#d6b08a]
                       mb-5"
          >
            📚 Book Lovers Club
          </div> */}

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight
                       text-[#3b2a1f] dark:text-[#f5e8dc]"
          >
            Stay Updated With
            <span className="block mt-2 text-[#5a3e2b] dark:text-[#d6b08a]">
              New Arrivals & Offers
            </span>
          </h2>

          <p
            className="mt-5 text-gray-600 dark:text-gray-400
                       max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Subscribe to BookCourier and receive updates about trending books,
            exclusive deals, reading tips, and exciting offers directly in your inbox.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center
                       gap-2 w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[380px]
                         px-5 py-3 rounded-xl
                         border border-[#d9c7b8]
                         dark:border-[#3b3028]
                         bg-white dark:bg-[#181310]
                         text-[#3b2a1f] dark:text-[#f5e8dc]
                         placeholder:text-gray-400
                         focus:outline-none
                         focus:ring-2 focus:ring-[#5a3e2b]/30
                         focus:border-[#5a3e2b]
                         transition-all duration-300
                         hover:border-[#5a3e2b]"
            />

            <button
              className="group relative overflow-hidden
                         px-8 py-3 rounded-xl
                         bg-[#5a3e2b]
                         dark:bg-[#c8a27a]
                         text-white dark:text-[#1a1410]
                         font-semibold
                         shadow-lg
                         transition-all duration-300
                         hover:scale-105
                         hover:shadow-2xl
                         active:scale-95"
            >
              <span
                className="absolute inset-0 bg-white/10
                           translate-y-full group-hover:translate-y-0
                           transition-transform duration-300"
              ></span>

              <span className="relative z-10">
                Subscribe
              </span>
            </button>
          </div>

          <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            No spam, unsubscribe anytime ✨
          </p>
        </div>
      </div>
    </section>
  );
}