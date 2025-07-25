import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        id: 1,
        name: "Diana Loreza",
        position: "Director of GYMSTORY",
        company: "Gymstory",
        review: "Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended! I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        position: "CEO",
        company: "TechStart",
        review: "Working with Kornix has been a game-changer for our business. Their innovative approach and attention to detail exceeded our expectations. The team delivered a stunning website that perfectly captures our brand identity.",
        rating: 5,
        image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg"
    },
    {
        id: 3,
        name: "Michael Chen",
        position: "Marketing Director",
        company: "EcoSolutions",
        review: "Kornix transformed our digital presence completely. Their strategic thinking and creative execution resulted in a 300% increase in our online engagement. Professional, reliable, and results-driven.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "Emma Rodriguez",
        position: "Founder",
        company: "StyleCraft",
        review: "The level of creativity and technical expertise at Kornix is unmatched. They didn't just build us a website; they created a digital experience that our customers love. Highly recommend their services!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 5,
        name: "David Thompson",
        position: "Operations Manager",
        company: "FreshMart",
        review: "Kornix delivered beyond our expectations. Their team understood our vision and brought it to life with precision and creativity. The new platform has streamlined our operations and improved customer satisfaction significantly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
];

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };



    return (
        <section className="py-30 mt-4 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className={`  md:lg:xl:2xl:sm:text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                        TESTIMONIAL
                    </span>
                    <h2 className="text-3xl md:lg:xl:xl:sm:text-4xl font-family-comfort font-bold text-white mb-6 leading-tight">
                        You are always{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Our Top Priority
                        </span>
                        , as they are.
                    </h2>
                    <p className="text-gray-300 text-xl md:lg:xl:2xl:sm:text-xl max-w-3xl font-family-mont mx-auto">
                        We survey all of our clients, the results of which go directly to our CEO.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-700 ${index === currentSlide ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                                        }`}>
                                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                            {/* Content */}
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="flex items-center justify-center lg:justify-start mb-6">
                                                    <div className="bg-gray-100 rounded-lg px-4 py-2 inline-flex items-center">
                                                        <span className="text-gray-700 font-medium">{testimonial.company}</span>
                                                    </div>
                                                </div>

                                                <Quote className="text-blue-500 w-8 h-8 mb-4 mx-auto lg:mx-0" />

                                                <h3 className="text-xl lg:xl:2xl:sm:md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
                                                    {testimonial.review.split('!')[0]}!
                                                </h3>

                                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                    {testimonial.review.split('! ')[1]}
                                                </p>

                                                <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>

                                                <div className="text-center lg:text-left">
                                                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                                                    <p className="text-gray-600">{testimonial.position}</p>
                                                </div>
                                            </div>

                                            {/* Image */}
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <Quote className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>

            <section className="bg-black text-white section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Get in touch with our expert team today for a free consultation and detailed project quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            to="/projects"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

        </section>
    );
}