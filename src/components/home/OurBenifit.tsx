import { Shield, BarChart2, Clock, Cpu, Users } from 'lucide-react';


export default function DigitalTransformationBenefits() {
  return (
    <div className="bg-[#06140b] text-white min-h-screen py-16">
      <div className="mx-auto container px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-teal-400 text-lg mb-4 font-medium">Why Choose Digital Transformation</p>
          <h1 className="text-4xl md:text-5xl font-light mb-6 font-nunito">Transform Your Business With Technology</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Modern solutions designed to streamline operations, enhance security, and drive measurable growth 
            through cutting-edge digital transformation strategies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Operational Efficiency */}
          <div className="bg-[#06140b] hover:bg-gradient-to-br from-[#06140b] to-[#06140b] rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Clock className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold">Operational Efficiency</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Automate repetitive tasks and optimize workflows to reduce operational costs by up to 40% while 
              accelerating process completion times.
            </p>
            <div className="bg-[#06140b] rounded-lg p-4">
              <img src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/682ee79bdb544108d71235b2_how%20to%20use%20utilization%20data.gif" alt="Workflow automation" className="rounded w-full h-auto" />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-teal-300">Average improvement</span>
                <span className="text-lg font-medium">65% faster</span>
              </div>
            </div>
          </div>

          {/* Enterprise Security */}
          <div className="bg-[#06140b]  rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Multi-layered security framework with end-to-end encryption, regular audits, and compliance 
              with global standards including ISO 27001 and GDPR.
            </p>
            <div className="flex justify-center">
              <img src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/62dfbc0deb697408b752833f_how%20to%20improve%20operational%20efficiency.gif" alt="Cybersecurity" className="rounded-lg w-full h-auto max-h-48 object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded">Data Encryption</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded">Access Controls</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded">Threat Detection</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded">Compliance</span>
            </div>
          </div>

          {/* Data-Driven Insights */}
          <div className="bg-[#06140b]  rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <BarChart2 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transform raw data into actionable business intelligence with advanced analytics and 
              customizable dashboards for real-time decision making.
            </p>
            <div className="bg-[#06140b] rounded-lg p-4 flex items-center">
              <img src="/hero/data.gif" alt="Data analytics" className="rounded w-1/2 h-auto" />
              <div className="ml-4">
                <div className="text-teal-400 text-sm mb-2">Key metrics tracked:</div>
                <ul className="text-xs space-y-1">
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Customer behavior</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Operational KPIs</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Market trends</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Revenue forecasts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seamless Collaboration */}
          <div className="bg-[#06140b]  rounded-xl p-8 border border-gray-800 lg:col-span-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Users className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold">Seamless Collaboration</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Unified platforms that break down silos between teams, departments, and locations with 
              integrated communication tools and centralized document management.
            </p>
            <div className="rounded-lg overflow-hidden">
              <img src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/637b5045ee84b0d8ef23d990_timeboxing.gif" alt="Team collaboration" className="w-full h-auto" />
              <div className="bg-[#06140b] p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-400">24/7</div>
                  <div className="text-xs text-gray-300">Accessibility</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">95%</div>
                  <div className="text-xs text-gray-300">Team adoption rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">60%</div>
                  <div className="text-xs text-gray-300">Faster approvals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">1.5x</div>
                  <div className="text-xs text-gray-300">Productivity gain</div>
                </div>
              </div>
            </div>
          </div>

          {/* Future-Ready Technology */}
          <div className="bg-[#06140b]  rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Cpu className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold">Future-Ready Technology</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Scalable architecture built on cloud-native principles with AI/ML capabilities ready 
              to adapt to your evolving business needs.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cloud Integration</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>AI Readiness</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Scalability</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-teal-700 hover:bg-teal-600 rounded-lg text-sm font-medium transition-colors">
              Explore Our Tech Stack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}