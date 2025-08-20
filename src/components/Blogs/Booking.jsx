import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShieldAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Booking() {
  const features = [
    {
      icon: faGlobe,
      title: 'Global Destinations',
      desc: 'Explore worldwide travel spots curated for every explorer.',
    },
    {
      icon: faShieldAlt,
      title: 'Secured Booking',
      desc: 'Over 50,000 happy travelers across the world.',
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      desc: 'Round-the-clock assistance for a smooth journey.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-textMain">Why Choose TravelBooker?</h1>
        <p className="mt-4 text-lg sm:text-2xl text-textSecondary max-w-3xl mx-auto">
          We make your travel dreams come true with exceptional service and unforgettable experiences.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-card rounded-xl hover:animate-up-down transition-transform"
          >
            <div className="h-20 w-20 flex items-center justify-center bg-gradient-to-b from-secondary to-card rounded-full mb-4">
              <FontAwesomeIcon icon={item.icon} className="text-yellowAccent text-3xl" />
            </div>
            <h3 className="text-yellowAccent font-semibold text-lg">{item.title}</h3>
            <p className="text-textSecondary text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
