const stats = [
  { number: '10L+', label: 'Cars Sold' },
  { number: '25L+', label: 'Happy Customers' },
  { number: '150+', label: 'Cities' },
  { number: '99.2%', label: 'Customer Satisfaction' },
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Join the growing community of satisfied customers who chose BroCars for their car needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">
                {stat.number}
              </div>
              <div className="text-lg lg:text-xl text-orange-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}