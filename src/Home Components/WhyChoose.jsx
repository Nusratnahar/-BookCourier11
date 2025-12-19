export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">
        Why Choose BookCourier
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg">
            Doorstep Delivery
          </h3>
          <p className="mt-2 text-gray-600">
            Books delivered from libraries directly to your home.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg">
            Time Saving
          </h3>
          <p className="mt-2 text-gray-600">
            No more travel, queues or waiting.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg">
            Trusted Libraries
          </h3>
          <p className="mt-2 text-gray-600">
            Books sourced from verified libraries.
          </p>
        </div>
      </div>
    </section>
  );
}
