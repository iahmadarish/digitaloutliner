import { Search, ArrowRight, User } from 'lucide-react';
import image from "@/assets/Group 38.png"
import datasecurity from "@/assets/Types-of-Data-Security.png"
import growth from "@/assets/growth.jpg"
import communication from "@/assets/icloud.jpg"
import direct from "@/assets/directcommunication.png"

export default function OurBenefit() {
  return (
    <div className="bg-[#06140b] text-white min-h-screen py-8">
      <div className=" mx-auto container">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-300 text-sm mb-4 ">The Advantages Of Working With Us</p>
          <h1 className="md:lg:xl:2xl:sm:text-5xl text-2xl font-light mb-6 font-nunito">Our Benefits</h1>
          <p className="text-gray-300 md:lg:xl:2xl:sm:text-lg text-sm max-w-4xl font-family-small">
            From transparent workflows and robust security to cutting-edge technology and 
            direct communication with our team, we ensure that your digital solutions are not 
            only efficient but also tailored to drive growth and long-term value for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Clear Project Backlog */}
          <div className="bg-[#06140b] hover:bg-linear-to-r/hsl from-indigo-950 to-teal-950 rounded-xl p-6 border  shadow-sky-400 hover:shadow-sm border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Clear Project Backlog</h3>
            <p className="text-gray-100 mb-6 sm:text-lg text-sm">
              Stay organized and informed with a transparent backlog of tasks, 
              ensuring that every milestone is tracked and completed on time.
            </p>
            
            {/* Backlog Interface */}
            <div className="bg-[#06140b]  rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Backlog</span>
                <Search className="w-4 h-4 text-gray-100" />
              </div>
              
              <div className="space-y-3">
                {/* Task 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">JIRA</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-green-400">On Track</span>
                    <span className="text-xs text-gray-100">100%</span>
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Task 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                    <span className="text-sm">Treollo</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-gray-100">To Do</span>
                    <span className="text-xs text-gray-100">75%</span>
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top-Tier Security */}
          <div className="bg-[#06140b] rounded-xl shadow-sky-400 hover:shadow-sm p-6 border border-gray-800 hover:bg-linear-to-r/hsl from-indigo-950 to-teal-950">
            <h3 className="text-xl font-semibold mb-4">Top-Tier Security</h3>
            <p className="text-gray-100 mb-6 sm:text-lg text-sm">
              Your data is safe with us. We implement the latest security 
              protocols to protect your business and customer information at all times.
            </p>
            
            {/* Security Visual */}
            <div className="flex justify-center">
            <img src={datasecurity} alt="" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-[#06140b] hover:bg-linear-to-r/hsl from-indigo-950 to-teal-950 rounded-xl  shadow-sky-400 hover:shadow-sm p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <p className="text-gray-200 mb-6 sm:text-lg text-sm">
              Leveraging the latest tech for scalable, high-performance solutions.
            </p>
            
            <button className="flex items-center space-x-2 bg-transparent border border-gray-600 rounded-lg px-4 py-2 mb-6 hover:bg-gray-800 transition-colors">
              <span className="text-sm">Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Tech Icons */}
            <div className="flex justify-center space-x-4   ">
              <div className="">
                <img src={image} alt="" />
              </div>
            </div>
          </div>

          {/* Exponential Growth */}
          <div className="bg-[#06140b] hover:bg-linear-to-r/hsl from-indigo-950 to-teal-950 rounded-xl py-6 px-2 border hover:shadow-sm shadow-blue-600 border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Exponential Growth</h3>
            <p className="text-gray-200 mb-6 sm:text-lg text-sm">
              Our solutions are built to scale with your business, 
              helping you expand rapidly and sustainably.
            </p>
            
            {/* Growth Visual */}
            <div className="md:lg:xl:2xl:flex gap-x-4 space-y-3">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">x10</div>
                    <div className="text-xs text-gray-100">Net worth growth</div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="">
                <img src={growth} className='rounded' alt="" />
              </div>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="bg-[#06140b] hover:bg-linear-to-r/hsl from-indigo-950 to-teal-950 rounded-xl py-6 px-3 border border-gray-800 lg:col-span-2 hover:shadow-sm shadow-blue-600 ">
            <h3 className="text-xl font-semibold mb-4">Direct Communication</h3>
            <p className="text-gray-100 mb-6 sm:text-lg text-sm">
              From start to finish, you'll have direct access to our team of experts, 
              ensuring clear communication and quick resolution of any issues.
            </p>
            
            {/* Communication Interface */}
            <div className=" rounded-lg space-y-3 md:lg:xl:2xl:flex items-center justify-between ">
              <div className="">
                <img className='rounded' src={communication} alt="" />
              </div>
              <div className="md:lg:xl:2xl:px-4 py-2">
                <p className='sm:text-lg text-sm'>
                 Effective communication channels for manufacturing teams include daily shift briefings, face-to-face meetings, and digital tools like messaging apps and collaboration platforms. These channels ensure that information is consistently shared across all shifts and locations.
                </p>
              </div>
              <div className="">
                <img className='rounded' src={direct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}