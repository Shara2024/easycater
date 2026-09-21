const metrics = [
  { value: '500+', label: 'Certified Caterers' },
  { value: '10,000+', label: 'Memorable Events Served' },
  { value: '50+', label: 'Cities Covered' },
  { value: '4.8★', label: 'Average Customer Rating' },
];

const TrustMetricsSection = () => (
  <section className="bg-[#C1440E] text-white py-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {metrics.map((m) => (
        <div key={m.label}>
          <p className="text-3xl font-serif font-bold">{m.value}</p>
          <p className="text-sm mt-1">{m.label}</p>
        </div>
      ))}
    </div>
  </section>
);
export default TrustMetricsSection;
