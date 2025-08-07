import ScrollToTop from "@/components/ScrollToTop";

export default function Privacy() {
  return (
<main className="py-30 font-family-comfort bg-[#06140b] overflow-x-hidden">
<ScrollToTop/>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg text-white">
        <p className="text-lg mb-6">
          At <span className="font-semibold">Digital Outliner</span>, we are committed to protecting your privacy. 
          This policy outlines how we collect, use, and safeguard your information when you use our services.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information (Company name, project requirements)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (Pages visited, time spent on our website)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and inquiries</li>
              <li>Process transactions and send invoices</li>
              <li>Enhance website functionality and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Protection</h2>
            <p>
              We implement appropriate security measures including encryption, access controls, 
              and regular security audits to protect your data. Our development team follows 
              industry-standard security practices for all projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We may use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Payment processing (Stripe, PayPal)</li>
              <li>Analytics (Google Analytics)</li>
              <li>Email communication (Mailchimp)</li>
              <li>Project management tools</li>
            </ul>
            <p className="mt-2">
              These services have their own privacy policies which we recommend you review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. You can disable cookies 
              in your browser settings, but this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Significant changes will be communicated 
              through our website or email notifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p>
              For any privacy-related questions or requests, please contact us at:
            </p>
            <p className="mt-2">
              <span className="font-medium">Email:</span> privacy@digitaloutliner.com<br />
              <span className="font-medium">Phone:</span> +1 (555) 123-4567<br />
              <span className="font-medium">Address:</span> 123 Tech Street, Digital City, DC 10001
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
</main>

  )
}