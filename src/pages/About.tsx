import React from 'react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      img: 'https://i.pravatar.cc/100?u=alex',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Marketing',
      img: 'https://i.pravatar.cc/100?u=sarah',
    },
    {
      name: 'Daniel Brown',
      role: 'Lead Developer',
      img: 'https://i.pravatar.cc/100?u=daniel',
    },
    {
      name: 'Emily Davis',
      role: 'Customer Success Manager',
      img: 'https://i.pravatar.cc/100?u=emily',
    },
  ];

  return (
    <div className="font-inter bg-white text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 bg-orange-50">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-5">
          Empowering Amazon Sellers Worldwide
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At ASIN Shield, we help Amazon sellers grow their businesses through
          smart analytics, automation, and real-time insights. Our mission is to
          simplify complex data and empower every seller to make confident,
          profitable decisions.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600">
            We believe every Amazon seller deserves access to world-class tools
            that make their work easier and more effective. That’s why we built
            ASIN Shield — an all-in-one platform designed to streamline operations,
            boost profits, and simplify the selling process.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-gray-50 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600">
            We envision a future where every eCommerce entrepreneur, regardless of
            size, has access to powerful insights that drive growth and inspire
            innovation.
          </p>
        </section>

        {/* Team Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-orange-100"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer-like section */}
      <footer className="bg-orange-50 text-center py-10 text-gray-600 mt-20">
        <p>
          © {new Date().getFullYear()} ASIN Shield — Built with ❤️ using React &
          TypeScript
        </p>
      </footer>
    </div>
  );
};

export default About;