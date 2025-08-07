import { Link } from 'react-router-dom';



export default function Testimonial() {





    return (
        <section className=" overflow-hidden font-nunito">

            <section className="bg-[#06140b] text-white section-padding">
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