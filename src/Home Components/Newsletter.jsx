export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold">
        Stay Updated
      </h2>
      <p className="mt-2 text-gray-600">
        Get updates about new books and offers.
      </p>

      <div className="mt-6 flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded w-64"
        />
        <button className="px-6 py-2 bg-indigo-600 text-white rounded">
          Subscribe
        </button>
      </div>
    </section>
  );
}
