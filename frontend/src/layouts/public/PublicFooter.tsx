// src/layouts/public/PublicFooter.tsx
const footerColumns = [
  { title: 'Company', links: ['About Us', 'Our Standards', 'Careers', 'Press Media'] },
  {
    title: 'For Customers',
    links: ['Find Caterers', 'Event Inspiration', 'Safety Protection', 'FAQs'],
  },
  {
    title: 'For Caterers',
    links: ['Become a Caterer', 'Catering Software', 'Success Stories', 'Resource Center'],
  },
  { title: 'Support', links: ['Help Center', 'Trust & Safety', 'Contact Us', 'Live Chat Support'] },
];

const PublicFooter = () => (
  <footer className="bg-ink text-cream/80 px-6 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
      <div className="col-span-2">
        <p className="font-display text-lg text-cream">EasyCater</p>
        <p className="text-sm mt-2 max-w-xs">
          Connecting celebration hosts with certified culinary masters across Sri Lanka.
        </p>
      </div>
      {footerColumns.map((col) => (
        <div key={col.title}>
          <p className="text-gold text-sm font-medium mb-3">{col.title}</p>
          <ul className="space-y-2 text-sm">
            {col.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="text-xs text-cream/50 mt-10 max-w-6xl mx-auto">
      &copy; {new Date().getFullYear()} EasyCater Marketplace. All rights reserved.
    </p>
  </footer>
);

export default PublicFooter;
