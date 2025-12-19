export default function LatestBooks() {
  const books = [1, 2, 3, 4];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">
        Latest Books
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {books.map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="mt-4 font-semibold">
              Book Title
            </h3>
            <p className="text-sm text-gray-500">
              Author Name
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
