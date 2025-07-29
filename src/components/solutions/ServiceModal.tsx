// components/Services/ServiceModal.tsx
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { type ReactNode } from 'react';

interface Image {
  url: string;
  caption: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  fullDescription: string;
  benefits?: string[];
  useCases?: string[];
  images?: Image[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center bg-black/60">
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
        <Dialog.Panel className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 text-white shadow-xl rounded-2xl border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-blue-400">{service.icon}</div>
              <Dialog.Title className="text-2xl font-semibold">{service.title}</Dialog.Title>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2">
              <p className="text-gray-300 mb-6 text-sm sm:text-lg">{service.fullDescription}</p>
              
              {service.benefits && (
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 bg-white rounded-full text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white sm:text-md text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {service.useCases && (
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-white mb-3">Ideal For</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 rounded-lg text-sm text-gray-100 border border-gray-700"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Images with Captions */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-medium text-white mb-4">Insights</h4>
              <div className="space-y-6">
                {service.images?.map((img: Image, i: number) => (
                  <div key={i} className="group">
                    <div className="relative rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-2 px-1 text-sm text-gray-400 text-center">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ServiceModal;