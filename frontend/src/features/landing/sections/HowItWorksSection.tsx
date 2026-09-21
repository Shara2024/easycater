import { useState } from 'react';

const steps = [
  {
    n: '01',
    title: 'Browse & Discover',
    desc: 'Filter curated caterers by event type, culinary tags, and average budget.',
  },
  {
    n: '02',
    title: 'Customize Request',
    desc: 'Select specific dishes, adjust headcount, specify dietary rules, and ask for live action stations.',
  },
  {
    n: '03',
    title: 'Review Bids',
    desc: 'Receive transparent custom quotes, message caterers directly, and select your dream partner.',
  },
  {
    n: '04',
    title: 'Celebrate Flawlessly',
    desc: 'Confirm booking securely online. Our professional network handles flawless delivery & set up.',
  },
];

const HowItWorksSection = () => {
  const [audience, setAudience] = useState<'hosts' | 'partners'>('hosts');

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-serif font-semibold">How EasyCater Works</h2>
      <p className="text-neutral-600 mt-1">
        Bridging culinary art and host ambitions through our modern transparent platform.
      </p>

      <div className="inline-flex bg-neutral-100 rounded-full p-1 mt-6">
        <button
          onClick={() => setAudience('hosts')}
          className={`px-4 py-2 rounded-full text-sm ${audience === 'hosts' ? 'bg-white shadow' : ''}`}
        >
          For Event Hosts
        </button>
        <button
          onClick={() => setAudience('partners')}
          className={`px-4 py-2 rounded-full text-sm ${audience === 'partners' ? 'bg-white shadow' : ''}`}
        >
          For Food Partners
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-left">
        {steps.map((s) => (
          <div key={s.n}>
            <p className="text-3xl font-serif text-orange-300">{s.n}</p>
            <p className="font-semibold mt-2">{s.title}</p>
            <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
        <div className="bg-[#FDF3D9] rounded-2xl p-6">
          <p className="font-semibold">Find trusted caterers for any occasion</p>
          <ul className="text-sm text-neutral-700 mt-2 space-y-1">
            <li>Strict hygiene & taste certifications</li>
            <li>Instant transparent quote generation</li>
            <li>100% money-back booking protection guarantee</li>
          </ul>
        </div>
        <div className="bg-[#E4F0E9] rounded-2xl p-6">
          <p className="font-semibold">Grow your catering business</p>
          <ul className="text-sm text-neutral-700 mt-2 space-y-1">
            <li>Get qualified wedding & corporate leads</li>
            <li>Intuitive menu builder & pricing tools</li>
            <li>Dedicated delivery & logistic support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default HowItWorksSection;
