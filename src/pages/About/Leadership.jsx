import React from 'react';
import { Users, Lightbulb, ShieldCheck, Target, UserCircle } from 'lucide-react';

const Leadership = () => {
  const leadershipPhilosophy = [
    {
      icon: <Users className="text-blue-600 w-10 h-10" />,
      title: 'Collaborative Culture',
      description:
        'At MechaTrend Systems, leadership means empowering teams to achieve shared goals. We foster collaboration, open communication, and inclusivity at every level.',
    },
    {
      icon: <Lightbulb className="text-yellow-500 w-10 h-10" />,
      title: 'Visionary Thinking',
      description:
        'Our leadership team consistently anticipates industry trends and embraces innovation to ensure we remain at the forefront of the automotive manufacturing sector.',
    },
    {
      icon: <ShieldCheck className="text-green-600 w-10 h-10" />,
      title: 'Integrity & Responsibility',
      description:
        'We lead with integrity, uphold the highest ethical standards, and take full responsibility for delivering excellence to our customers and community.',
    },
    {
      icon: <Target className="text-red-600 w-10 h-10" />,
      title: 'Results-Driven Mindset',
      description:
        'With a strong focus on performance and continuous improvement, our leadership drives results through strategic planning and hands-on involvement.',
    },
  ];

  const leaders = [
    {
      name: 'Arvind Menon',
      title: 'Chief Executive Officer',
      image: 'https://via.placeholder.com/150',
      bio: 'With over 20 years in automotive innovation, Arvind leads MechaTrend with a clear vision for global growth and operational excellence.',
    },
    {
      name: 'Priya Kapoor',
      title: 'Head of Operations',
      image: 'https://via.placeholder.com/150',
      bio: 'Priya ensures production agility and supply chain resilience with her expertise in lean manufacturing and quality systems.',
    },
    {
      name: 'Rohan Desai',
      title: 'Director of Engineering',
      image: 'https://via.placeholder.com/150',
      bio: 'Rohan drives product innovation and technology integration, leading a dynamic team of engineers focused on next-gen automotive systems.',
    },
  ];

  return (
    <div className="w-screen overflow-x-hidden font-sans bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Leadership at MechaTrend
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Inspiring innovation, fostering collaboration, and driving excellence across every level of our organization.
          </p>
        </div>
      </div>

      {/* Leadership Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Leadership Philosophy</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leadershipPhilosophy.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
        <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Our Leadership Team</h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{leader.title}</p>
              <p className="text-gray-600 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leadership;
