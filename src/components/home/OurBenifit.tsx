"use client"

import { Shield, BarChart2, Clock, Cpu, Users } from 'lucide-react';

export default function DigitalTransformationBenefits() {
  return (
    <div className="bg-[#06140b] text-white py-16 md:py-24">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <p className="text-teal-400 text-sm md:text-base mb-3 font-medium tracking-wider">
            OUR SERVICE BENEFITS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Transform Your Business With <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            Custom solutions designed to enhance your operations, secure your assets, and drive measurable growth through strategic digital implementation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Operational Efficiency */}
          <div className="bg-[#06140b]  rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Streamlined Operations</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              Our workflow automation reduces manual tasks by up to 70%, accelerating your processes while cutting operational costs.
            </p>
            <div className="bg-[#06140b] rounded-lg p-3 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/682ee79bdb544108d71235b2_how%20to%20use%20utilization%20data.gif" 
                  alt="Workflow automation" 
                  className="rounded w-full h-auto object-cover"
                />
              </div>
              <div className="mt-3 flex justify-between items-center text-xs md:text-sm">
                <span className="text-teal-300">Average improvement</span>
                <span className="font-medium">70% faster</span>
              </div>
            </div>
          </div>

          {/* Security Solutions */}
          <div className="bg-[#06140b]  rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Comprehensive Security</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              Enterprise-grade protection with encryption, access controls, and continuous monitoring tailored to your specific needs.
            </p>
            <div className="flex justify-center mb-4">
              <img 
                src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/62dfbc0deb697408b752833f_how%20to%20improve%20operational%20efficiency.gif" 
                alt="Security" 
                className="rounded-lg w-full h-auto max-h-40 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded text-center">Data Protection</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded text-center">Access Control</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded text-center">Threat Prevention</span>
              <span className="bg-teal-900/20 text-teal-300 px-2 py-1 rounded text-center">Compliance</span>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-[#06140b]  rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <BarChart2 className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Actionable Insights</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              Transform data into strategic decisions with our customized analytics and real-time reporting dashboards.
            </p>
            <div className="bg-[#06140b] rounded-lg p-3 flex flex-col md:flex-row items-center">
              <img 
                src="https://cdn.prod.website-files.com/5d9ffc249511353e753840c9/637b5045ee84b0d8ef23d990_timeboxing.gif" 
                alt="Data analytics" 
                className="rounded w-full md:w-1/2 h-auto mb-3 md:mb-0 md:mr-3"
              />
              <div className="w-full">
                <div className="text-teal-400 text-xs md:text-sm mb-2">Key metrics we track:</div>
                <ul className="text-xs space-y-1">
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Customer engagement</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Operational efficiency</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Conversion rates</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>ROI measurement</li>
                </ul>
              </div>
            </div>

            <div className="">
              <p>Our advanced tools collect and process information from multiple sources, giving you a 360° view of your operations, customers, and market trends. Interactive dashboards and real-time reporting ensure you can monitor performance as it happens, identify opportunities, and address challenges before they escalate.</p>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-[#06140b]  rounded-xl p-6 border border-gray-800 lg:col-span-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Enhanced Collaboration</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-5 max-w-2xl">
              Unlock the full potential of your workforce with a unified platform that seamlessly connects teams across departments and locations. Our integrated communication tools — including real-time messaging, video conferencing, and file sharing — ensure that everyone stays informed and engaged, no matter where they are. Centralized management systems provide a single source of truth for projects, resources, and timelines, reducing confusion and eliminating data silos.
            </p>
            <div className="rounded-lg overflow-hidden">
              <div className="bg-[#06140b] p-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-teal-400">24/7</div>
                  <div className="text-xs text-gray-300">Access</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-teal-400">90%</div>
                  <div className="text-xs text-gray-300">Adoption rate</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-teal-400">50%</div>
                  <div className="text-xs text-gray-300">Faster decisions</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-teal-400">2x</div>
                  <div className="text-xs text-gray-300">Team alignment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="bg-[#06140b]  rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-teal-900/50 rounded-lg mr-4">
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold">Tailored Solutions</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              Bespoke services designed specifically for your business requirements and growth objectives.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center mr-3">
                  <span className="text-teal-400 text-sm">1</span>
                </div>
                <span className="text-sm">Custom workflow design</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center mr-3">
                  <span className="text-teal-400 text-sm">2</span>
                </div>
                <span className="text-sm">Scalable architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center mr-3">
                  <span className="text-teal-400 text-sm">3</span>
                </div>
                <span className="text-sm">Ongoing optimization</span>
              </div>
            </div>
            <button className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 rounded-lg text-sm font-medium transition-colors">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}