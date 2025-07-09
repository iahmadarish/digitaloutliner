import ScrollToTop from "@/components/ScrollToTop"

export default function TermsAndCondition() {
    return (

        <div className="py-30 font-family-comfort bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] ">
            <ScrollToTop />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms and Conditions</h1>

                <div className="prose prose-lg text-gray-300">
                    <p className="text-lg mb-6">
                        Welcome to <span className="font-semibold">Digital Outliner</span>. These Terms and Conditions
                        govern your use of our services. By engaging with us, you agree to these terms.
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Services</h2>
                            <p>We provide:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Custom web and mobile application development</li>
                                <li>UI/UX design services</li>
                                <li>Software development and consulting</li>
                                <li>Graphic design and branding</li>
                                <li>3D/2D modeling and animation services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Project Engagement</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>All projects require a signed agreement or statement of work</li>
                                <li>Client must provide complete requirements and assets in timely manner</li>
                                <li>Scope changes may incur additional charges</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Payments</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>50% deposit required to begin development</li>
                                <li>Final payment due upon project completion</li>
                                <li>Late payments incur 1.5% monthly interest</li>
                                <li>All prices in USD unless otherwise specified</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Intellectual Property</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Client retains rights to all provided materials</li>
                                <li>We retain rights to reusable code components</li>
                                <li>Full copyright transfers upon final payment</li>
                                <li>Portfolio usage rights retained unless specified otherwise</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Confidentiality</h2>
                            <p>
                                We maintain strict confidentiality of all client information and project details.
                                Non-disclosure agreements available upon request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Revisions & Approvals</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Two rounds of revisions included in standard projects</li>
                                <li>Additional revisions billed at hourly rate</li>
                                <li>Client responsible for final approval of deliverables</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Liability</h2>
                            <p>
                                Our liability is limited to the value of the project. We are not responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Third-party service outages</li>
                                <li>Client-provided content errors</li>
                                <li>Business losses from service usage</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">8. Termination</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Either party may terminate with 30 days written notice</li>
                                <li>Client responsible for payment of work completed</li>
                                <li>Termination fees may apply for early cancellation</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">9. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of [Your State/Country]. Any disputes will be
                                resolved in [City, State/Country] courts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-100 mb-4">10. Changes to Terms</h2>
                            <p>
                                We may update these terms periodically. Continued use of our services constitutes
                                acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="bg-white p-6 rounded-lg text-gray-700">
                            <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
                            <p>
                                For questions about these Terms, contact us at:
                            </p>
                            <p className="mt-2">
                                <span className="font-medium">Email:</span> legal@digitaloutliner.com<br />
                                <span className="font-medium">Phone:</span> +1 (555) 123-4567<br />
                                <span className="font-medium">Address:</span> 123 Tech Street, Digital City, DC 10001
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </section>
                    </div>
                </div>
            </div>

        </div>

    )
}