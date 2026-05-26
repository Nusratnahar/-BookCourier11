import { Truck, Clock, Shield, Heart, BookOpen, Wallet } from "lucide-react";


const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "No delivery charges on any order.",
  },
  {
    icon: Clock,
    title: "Same Day Pickup",
    description: "We'll collect your books within hours.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Every book is handled with care.",
  },
  {
    icon: Heart,
    title: "No Late Fees",
    description: "We send reminders, not penalties.",
  },
  {
    icon: BookOpen,
    title: "Vast Selection",
    description: "Access over 50,000 books.",
  },
  {
    icon: Wallet,
    title: "Save Money",
    description: "Borrow instead of buying.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#f6f1eb] to-[#ebe1d6]
                        dark:from-[#14110f] dark:to-[#1d1814] transition-all duration-500">

      <div className="max-w-7xl mx-auto px-12">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#3b2a1f]
                         dark:text-[#f3e7db] transition-colors duration-300">
            Why Choose BookCourier?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg transition-colors duration-300">
            Making book borrowing easier, faster, and more enjoyable
          </p>

      
          <div className="w-24 h-1 bg-[#5a3e2b] dark:bg-[#c8a27a]
                          mx-auto mt-4 rounded-full transition-colors duration-300">
          </div>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl p-7 border
                         bg-white border-[#e5d6c8]
                         dark:bg-[#211c18] dark:border-[#3b3028]
                         shadow-md hover:shadow-2xl dark:hover:shadow-black/40
                         transition-all duration-500 ease-in-out
                         hover:-translate-y-2 hover:border-[#5a3e2b]
                         dark:hover:border-[#c8a27a]"
            >

          
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                           bg-[#f3e7db]
                           dark:bg-[#2d241f]
                           group-hover:bg-[#5a3e2b]
                           dark:group-hover:bg-[#c8a27a]
                           transition-all duration-500"
              >
                <feature.icon
                  className="w-7 h-7 text-[#5a3e2b]
                             dark:text-[#e8d5c4]
                             group-hover:text-white
                             dark:group-hover:text-[#1a1410]
                             transition-all duration-500"
                />
              </div>

            
              <h3
                className="text-xl font-semibold mb-3
                           text-[#3b2a1f]
                           dark:text-[#f5e8dc]
                           group-hover:text-[#5a3e2b]
                           dark:group-hover:text-[#d6b08a]
                           transition-all duration-300"
              >
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors duration-300">
                {feature.description}
              </p>

              <div
                className="w-0 group-hover:w-full h-0.5
                           bg-[#5a3e2b]
                           dark:bg-[#c8a27a]
                           mt-5 transition-all duration-500 rounded-full"
              ></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;