export default function Team() {
  const teamMembers = [
    {
      name: "Taylor Morgan",
      role: "UI/UX Designer",
      image: "https://t4.ftcdn.net/jpg/10/22/44/55/360_F_1022445581_5o7m2OCMM8siBmIQITbIXijbpXhU3Oqm.jpg"
    },
    {
      name: "Alec Bennet",
      role: "Senior Back-End Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emily Rivera",
      role: "Lead Front-End Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Jordan Cross",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className=" py-20  relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-purple-400/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-purple-400/20 rounded-full"></div>
      <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/10 rounded-full"></div>
      
      <div className="mx-auto relative z-10">
        {/* Header with exact styling */}
        <div className="md:lg:xl:2xl:flex space-y-3 items- justify- mb-16">
          <div className="text">
            <h2 className="text-6xl md:text-7xl font-bold">
              <span className="text-yellow-400">Meet</span>{" "}
              <span className="text-white">Our Team</span>
            </h2>
          </div>
          <div className="ml-8 flex items-center">
            <div className="w-16 h-0.5 bg-gray-400 mr-2"></div>
            <div className="w-16 h-0.5 bg-gray-400 mr-4"></div>
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Team Grid - exact 4 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                {/* Profile Image Container */}
                <div className="relative mb-8">
                  <div className="w-full aspect-square rounded-3xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm font-normal">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}