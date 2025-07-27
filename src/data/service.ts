import webicon from "../../public/react.png"
import grapicsicon from "../../public/graphics.png"
import dicon from "../../public/thread.webp"
import app from "../../public/app.png"

// web design and development

import web1 from "@/components/service/service/web design and development/image 29.png"
import web2 from "@/components/service/service/web design and development/Group 12.png"
import web3 from "@/components/service/service/web design and development/Group 12.png"
import web4 from "@/components/service/service/web design and development/image (5).jpg"
import web5 from "@/components/service/service/web design and development/image (5).jpg"






export const services = [

  {
    id: 1,
    serviceType: "Web Design & Development",
    icon: webicon,
    iconType: "image",
    shortDetails:
      "We create fast, responsive, and visually appealing websites tailored to your brand. Our web design and development services help attract visitors, enhance user experience, and drive business growth across all devices and platforms.",
    fullDetails: [
      "We build SEO-optimized and user-friendly websites tailored for startups, SMEs, and enterprises.",
      "Our stack includes MERN (MongoDB, Express, React, Node.js), Next.js, WordPress, and more.",
      "We ensure high performance, secure architecture, and mobile responsiveness.",
      "From landing pages to full e-commerce portals, we deliver complete web solutions.",
    ],
    bulletPoints: [
      "Custom web application development",
      "E-commerce websites (Shopify, WooCommerce, custom builds)",
      "Frontend development (React, Next.js, HTML/CSS/JS)",
      "Backend APIs and integrations (Node.js, Express)",
      "Responsive and mobile-first design",
      "Website performance and SEO optimization",
      "CMS and admin panel integration",
      "Hosting, domain, and maintenance support",
    ],
    images: [
      web1,
      web2,
    ],
    features: [
      {
        title: "Lightning Fast Performance",
        content:
          "Experience blazing-fast website speed with optimized code, global CDN integration, image optimization, and modern frameworks like Next.js and React. Our frontend performance enhancements ensure lower bounce rates and higher user engagement—essential for both user satisfaction and SEO ranking.",
        image: "https://seospacecastle.com/assets/img/landing/web-slider-dev.png"
      },
      {
        title: "Scalable Architecture",
        content:
          "Our web solutions are built using scalable, modular architectures that grow effortlessly with your business. From microservices and RESTful APIs to efficient cloud-based infrastructure, we future-proof your website to handle increasing traffic and complex features—ideal for high-growth startups and enterprises.",
        image: "https://res.cloudinary.com/jerrick/image/upload/v1636098022/6184dfe6e810a7001d9f9809.jpg"
      },
      {
        title: "SEO-Friendly Design",
        content:
          "Boost your search engine visibility with our SEO-optimized web development approach. We implement semantic HTML5, structured data (schema markup), clean URLs, responsive design, optimized images, and fast load times—all of which improve your Google rankings and organic traffic.",
        image: web3
      },
      {
        title: "Cross-Platform Compatibility",
        content:
          "Deliver a seamless user experience on all devices and screen sizes. We ensure your website is fully responsive, mobile-first, and compatible with all major browsers including Chrome, Safari, Firefox, and Edge—leading to better user retention and higher SEO scores in mobile search results.",
        image: web4
      },
      {
        title: "Secure Web Applications",
        content:
          "Protect your users and data with advanced web security protocols. We enforce HTTPS, SSL/TLS encryption, secure login systems, input sanitization, role-based access control, and regular security audits—ensuring your application meets modern cybersecurity standards and builds user trust.",
        image: web5
      }
    ],
    faq: [
      {
        question: "How long does it take to develop a custom website?",
        answer: "The timeline depends on complexity, but most standard websites take 4-8 weeks from planning to launch. E-commerce sites typically require 8-12 weeks."
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer: "Yes, we offer various maintenance packages including security updates, content changes, and performance optimization."
      },
      {
        question: "What's the difference between WordPress and custom-coded websites?",
        answer: "WordPress is great for content-heavy sites with frequent updates, while custom-coded sites offer better performance and flexibility for complex functionality."
      },
      {
        question: "How do you ensure my website is mobile-friendly?",
        answer: "We use responsive design techniques and test on multiple devices to ensure perfect display and functionality across all screen sizes."
      },
      {
        question: "Will my website be optimized for search engines?",
        answer: "Yes, we implement SEO best practices during development including proper site structure, metadata, and performance optimization."
      }
    ],
    process: [
      {
        step: "Discovery & Planning",
        description:
          "We begin with in-depth consultations to understand your business objectives, target audience, brand positioning, and technical requirements. This strategic planning phase ensures a clear roadmap for success, aligning your digital goals with scalable web solutions and measurable KPIs."
      },
      {
        step: "Design & Prototyping",
        description:
          "Our UX/UI designers craft wireframes and high-fidelity mockups using tools like Figma and Adobe XD. We focus on responsive design, intuitive user experience, and visual storytelling to reflect your brand identity. Interactive prototypes are shared for feedback and approval before development begins."
      },
      {
        step: "Development & Testing",
        description:
          "We develop the website using modern web technologies such as HTML5, CSS3, JavaScript, Next.js, and RESTful APIs. Our code is optimized for performance, SEO, and accessibility. Rigorous quality assurance testing ensures cross-browser compatibility, mobile responsiveness, and bug-free deployment."
      },
      {
        step: "Launch & Optimization",
        description:
          "After deployment on a secure hosting environment, we monitor your site’s performance using tools like Google Analytics, Lighthouse, and Search Console. We continuously optimize page speed, fix SEO issues, and implement conversion rate enhancements to ensure long-term digital growth."
      }
    ]
  },


  {
    id: 2,
    serviceType: "Mobile App Development",
    icon: app,
    iconType: "image",
    shortDetails:
      "We build high-quality cross-platform and native mobile apps that deliver smooth, user-friendly experiences. Our apps are designed to perform flawlessly on iOS and Android, helping businesses engage users and grow in today's mobile-first world.",
    fullDetails: [
      "We develop Android, iOS, and hybrid mobile applications with intuitive UI and powerful backend.",
      "Our apps are built using Flutter, React Native, Kotlin, Swift, and other technologies.",
      "We offer full-cycle development from planning to deployment and maintenance.",
      "Features like real-time chat, push notifications, location tracking, and payment gateways are seamlessly integrated.",
    ],
    bulletPoints: [
      "Android and iOS native apps",
      "Flutter & React Native cross-platform apps",
      "App UI/UX design and prototyping",
      "Backend integration and REST APIs",
      "Real-time features and Firebase integration",
      "Play Store and App Store deployment",
      "Post-launch support and updates",
      "Bug fixing and performance optimization",
    ],
    images: [
      "https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp",
      "https://d37hsi2hgurnr6.cloudfront.net/wp-content/uploads/2025/02/11142837/mobile-app-development-for-small-business.png",
    ],
    features: [
      {
        title: "Cross-Platform Compatibility",
        content: "With cross-platform app development using Flutter and React Native, we help you launch your mobile app on both Android and iOS without building two separate codebases. This approach saves time and cost while ensuring a consistent user experience across platforms. Whether you're a startup or an enterprise, our developers build robust, scalable apps that run seamlessly on multiple devices and screen sizes.",
        image: "https://img.freepik.com/free-photo/phone-app-development_53876-96391.jpg",
      },
      {
        title: "Native Performance & UX",
        content: "Our apps are designed to deliver true native performance using platform-optimized UI components and hardware acceleration. We tailor the user interface and experience to match platform-specific design guidelines, ensuring intuitive navigation and lightning-fast interactions. Whether you're developing for iOS with Swift or Android with Kotlin, our native app development experts prioritize responsiveness and user satisfaction.",
        image: "https://img.freepik.com/free-photo/app-interface-design_1098-16295.jpg",
      },
      {
        title: "Real-Time Functionality",
        content: "We integrate real-time features like live chat, geolocation tracking, push notifications, and instant data synchronization using technologies such as Firebase, WebSockets, and MQTT. Real-time app development is crucial for logistics, ride-sharing, social media, and on-demand platforms, ensuring that your users receive immediate updates and interactions without delay.",
        image: "https://img.freepik.com/free-photo/real-time-technology_53876-126054.jpg",
      },
      {
        title: "Secure & Scalable Backend",
        content: "Our mobile apps are powered by secure, cloud-ready backend systems built with Node.js, Express, MongoDB, and Firebase. We follow industry best practices for backend development, including encrypted API communication, role-based authentication, and data validation. Whether you're handling 100 or 100,000 users, our architecture ensures your app remains fast, secure, and scalable.",
        image: "https://img.freepik.com/free-photo/data-cloud-storage-system_23-2149394164.jpg",
      },
    ],
    faq: [
      {
        question: "Should I build a native or cross-platform app?",
        answer: "Choosing between native and cross-platform app development depends on your project goals. Native apps, developed specifically for iOS (Swift) or Android (Kotlin), offer superior performance, full access to device features, and better user experience. Cross-platform apps, built with Flutter or React Native, are more cost-effective and faster to develop, especially for startups looking to launch on both platforms simultaneously."
      },
      {
        question: "How much does mobile app development cost?",
        answer: "Mobile app development costs vary based on complexity, features, platform, and development timeline. A basic app with essential features may cost between $10,000 and $20,000. Mid-level apps with integrations and user authentication may range from $25,000 to $50,000. High-end or enterprise mobile apps with advanced features like real-time chat, payments, and custom APIs can exceed $100,000."
      },
      {
        question: "Do you help with app store submissions?",
        answer: "Yes, we provide complete support for submitting your app to the Google Play Store and Apple App Store. Our services include preparing metadata, screenshots, app icons, privacy policies, and managing app certificates. We also assist with resolving any app review issues and follow best practices to ensure approval on the first attempt."
      },
      {
        question: "How do you ensure app security?",
        answer: "Security is a top priority in our mobile app development process. We implement secure coding standards, encrypt sensitive user data, use HTTPS for all API calls, and protect against common vulnerabilities such as XSS, SQL injection, and data leakage. Additionally, we integrate biometric authentication (Face ID, Touch ID) and perform regular penetration testing and code audits."
      },
      {
        question: "What ongoing costs should I expect after launch?",
        answer: "Post-launch mobile app costs typically include hosting services (cloud or dedicated), regular maintenance (15-20% of the initial development cost annually), performance monitoring, bug fixes, feature enhancements, and app store fees. You should also budget for marketing efforts, analytics tools, and third-party service subscriptions, depending on your app's functionality."
      }
    ],
    process: [
      {
        step: "Requirement Analysis",
        description: "We begin with an in-depth consultation to understand your business goals, target audience, key features, and technical constraints. Our team documents every requirement to ensure alignment between your vision and our development process. We also offer expert advice on tech stacks, platforms (Android, iOS, or both), and monetization strategies."
      },
      {
        step: "UI/UX Design",
        description: "Our designers create interactive wireframes, user journeys, and high-fidelity prototypes based on your brand and user needs. With a focus on mobile-first design, we ensure your app is intuitive, accessible, and visually appealing. Our UI/UX design process also includes usability testing and feedback loops to validate the experience."
      },
      {
        step: "Development & Integration",
        description: "Our developers write clean, maintainable code using Flutter, React Native, or native languages like Kotlin and Swift. We integrate third-party APIs, databases, and cloud services as required, ensuring your app delivers the desired features and performance. Our agile methodology ensures transparency and continuous progress updates throughout the build."
      },
      {
        step: "Testing & Deployment",
        description: "Every app we build undergoes rigorous quality assurance (QA) testing, including functional testing, UI testing, cross-device compatibility checks, and performance benchmarking. We also conduct beta testing to gather user feedback. Once approved, we handle end-to-end deployment to the App Store and Google Play, following platform guidelines and best practices."
      },
      {
        step: "Maintenance & Updates",
        description: "Post-launch, we offer flexible maintenance plans to keep your app running smoothly. This includes performance monitoring, crash analytics, OS compatibility updates, and feature enhancements based on user feedback. Our support ensures your app evolves with your business and remains competitive in the app market."
      }
    ]
  },


  {
    id: 3,
    serviceType: "Graphics Design",
    icon: grapicsicon,
    iconType: "image",
    shortDetails:
      "We deliver stunning graphic design services that boost your brand identity. From logos to social media visuals, we blend creativity and strategy to create eye-catching designs that drive engagement and make your business stand out.",
    fullDetails: [
      "We craft stunning visuals that communicate your brand's identity and value.",
      "From logos to brochures and marketing assets, we design for both print and digital media.",
      "Our team follows trends, color psychology, and brand strategy to ensure your visuals stand out.",
    ],
    bulletPoints: [
      "Logo and brand identity design",
      "Marketing materials (brochures, flyers, posters)",
      "Banner and social media post design",
      "Pitch deck and presentation design",
      "Product packaging and label design",
      "Business card and stationery design",
      "Editable templates and design systems",
      "File delivery in multiple formats",
    ],
    images: [
      "https://www.mechwizz.com/assets/images/graphic-design-company.png",
      "https://www.writerzden.com/wp-content/uploads/2016/08/pencil-typography-black-design.jpg",
    ],
    features: [
      {
        title: "Brand-Driven Design",
        content: "Every design we create is rooted in a deep understanding of your brand’s identity, voice, and visual language. We ensure that all graphics—from logos to social media creatives—align with your brand’s tone, personality, and target audience. Our goal is to build a cohesive brand experience that leaves a lasting impression across all customer touchpoints, both online and offline.",
        image: "https://img.freepik.com/free-photo/design-concept-brand-identity_53876-139860.jpg",
      },
      {
        title: "Pixel-Perfect Deliverables",
        content: "Our design assets are crafted with precision to ensure clarity, responsiveness, and high-quality output. Whether it’s for print, mobile, or web, we deliver pixel-perfect visuals that retain their quality across all resolutions and formats. You can confidently use our designs for websites, brochures, billboards, or mobile apps without compromising visual impact.",
        image: "https://img.freepik.com/free-photo/graphic-designer-working-digital-tablet_23-2148281422.jpg",
      },
      {
        title: "Marketing-Ready Visuals",
        content: "We specialize in performance-focused design that drives engagement and conversions. From social media ads and email headers to landing page visuals and banner designs, we craft compelling visuals that stop the scroll and support your marketing objectives. Each design is strategically tailored to capture attention, evoke emotion, and drive action.",
        image: "https://img.freepik.com/free-photo/marketing-campaign-design_53876-15082.jpg",
      },
      {
        title: "Editable Source Files",
        content: "Along with final exports, you’ll receive fully editable source files (AI, PSD, or Figma) to ensure flexibility for future edits, repurposing, or team collaboration. This means you’re not locked into static visuals—our files are layered, organized, and built with scalability in mind, giving you full creative control after delivery.",
        image: "https://img.freepik.com/free-photo/designer-desk-illustration_23-2149389580.jpg",
      },
      {
        title: "Motions Graphics",
        content: "Motion graphics are essentially animated graphic designs. They involve using animation techniques to bring static design elements like text, shapes, and images to life, often with the goal of communicating information or telling a story. Think of it as a digital form of visual storytelling where movement plays a key role. ",
        image: "https://outsourcingtrainingbd.com/wp-content/uploads/2023/09/motion-graphics.webp",
      },
    ]
    ,
    faq: [
      {
        question: "How many logo concepts do you provide?",
        answer: "We provide 3 to 5 unique logo design concepts based on your brand’s vision and creative brief. You can choose one to refine, and we offer unlimited revisions on the selected concept until you're fully satisfied."
      },
      {
        question: "What file formats will I receive?",
        answer: "You will receive all essential design file formats, including high-resolution JPG, transparent PNG, scalable PDF, AI (Adobe Illustrator), and EPS. Upon request, we also provide SVG, PSD, and print-ready CMYK files."
      },
      {
        question: "Do you follow brand guidelines if we have them?",
        answer: "Absolutely. If you already have an established brand guideline, we strictly adhere to it to ensure visual consistency in colors, typography, logo placement, and imagery across all creative assets."
      },
      {
        question: "Can you design for both print and digital?",
        answer: "Yes, we provide designs optimized for both print (CMYK color profiles, high DPI) and digital platforms (RGB, web-safe colors, responsive formats). Whether it's a flyer, packaging, banner, or digital ad, we tailor the output for the intended medium."
      },
      {
        question: "What's your typical turnaround time?",
        answer: "Our standard delivery timeframe for most design projects is 5 to 10 business days. This depends on the project’s complexity, scope, and the number of revisions required. We also offer express delivery options for urgent needs."
      }
    ]
    ,
    process: [
      {
        step: "Creative Brief",
        description: "We start by gathering essential information about your business, brand personality, industry, competitors, and design objectives. This includes preferences in color, tone, typography, and target audience insights, which help guide the entire design process."
      },
      {
        step: "Concept Development",
        description: "Based on the brief, our designers create initial design explorations, including mood boards, typography palettes, and layout sketches. We present multiple creative directions so you can choose a visual path that best represents your brand."
      },
      {
        step: "Revision & Refinement",
        description: "Once a concept is selected, we refine the design through iterative feedback rounds. This step focuses on fine-tuning layout, color, proportions, and messaging until the final design meets your expectations perfectly."
      },
      {
        step: "Finalization",
        description: "We prepare the final approved design files in all necessary formats, optimized for various use cases such as digital display, print production, or scalable vector formats for merchandise. Files are organized and delivered with clear usage instructions."
      },
      {
        step: "Delivery & Support",
        description: "You’ll receive a full package of deliverables along with editable source files. We also offer post-delivery support for small adjustments or to assist your team in implementing the designs effectively across platforms."
      }
    ]
  },


  {
    id: 4,
    serviceType: "2D & 3D Design",
    icon: dicon,
    iconType: "image",
    shortDetails:
      "Professional 2D/3D designs and modeling for animation, product mockups, and architecture. We create stunning 2D and 3D videos that tell your story with impact. From concept to final render, our visuals engage, inform, and inspire your audience.",
    fullDetails: [
      "We create realistic 3D models, visualizations, and 2D/3D animations for diverse industries.",
      "Used in advertising, product design, architectural visualization, and explainer videos.",
      "Our skilled artists use Blender, Maya, Cinema 4D, and Adobe After Effects.",
    ],
    bulletPoints: [
      "3D product modeling and mockups",
      "2D animation for explainer videos",
      "Architectural rendering and walkthroughs",
      "Motion graphics and VFX",
      "Game asset design",
      "3D logo animation",
      "Product visualization for e-commerce",
      "Interior and exterior visualization",
    ],
    images: [
      "https://storage.googleapis.com/sales.appinst.io/2023/06/word-image-1.png",
      "https://img-new.cgtrader.com/items/4245395/1804a970e1/large/small-house-tiny-house-plan-3d-model-1804a970e1.jpg",
    ],
    features: [
      {
        title: "Realistic 3D Visualization",
        content: "We create hyper-realistic 3D renders for products, interior spaces, and architectural environments using cutting-edge rendering engines. These visuals help clients visualize concepts before production, making them ideal for marketing, architecture, and client presentations. Our realistic 3D rendering services improve decision-making and increase conversion rates across industries.",
        image: "https://img.freepik.com/free-photo/3d-interior-visualization_23-2149385290.jpg",
      },
      {
        title: "2D/3D Animation Services",
        content: "Our team produces captivating 2D and 3D animations for explainer videos, product demos, and social media content. Using After Effects, Blender, and Cinema 4D, we bring static visuals to life with motion graphics, storytelling, and smooth transitions. Perfect for presentations, advertisements, and training content that needs to grab and retain attention.",
        image: "https://img.freepik.com/free-photo/animation-workflow_53876-126079.jpg",
      },
      {
        title: "Architectural Modeling",
        content: "We provide high-detail architectural modeling for real estate developers, interior designers, and architects. From exterior building facades to interior layouts, our scalable and precise models support client approvals, permit applications, and marketing brochures. Ideal for virtual tours and real estate visualization projects.",
        image: "https://img.freepik.com/free-photo/modern-house-model_53876-104563.jpg",
      },
      {
        title: "Product Prototypes",
        content: "We create interactive and visually accurate 3D prototypes of your product before it's manufactured. Our product visualization services support pitches, investor presentations, e-commerce previews, and engineering reviews. Showcase features, variants, and use cases with dynamic 360-degree views or animated demos.",
        image: "https://img.freepik.com/free-photo/3d-printer-object-creation_53876-126030.jpg",
      },
    ]
    ,
    faq: [
      {
        question: "What software do you use for 3D modeling?",
        answer: "We primarily use Blender, Autodesk Maya, and Cinema 4D for high-quality 3D modeling and animation. For motion graphics and compositing, we rely on Adobe After Effects. Depending on the project requirements, we also use ZBrush, Substance Painter, or Unity for real-time previews."
      },
      {
        question: "How long does a typical 3D rendering take?",
        answer: "The rendering time varies depending on scene complexity, resolution, and lighting effects. Simple renders may take 2–6 hours, while detailed, photorealistic renders with reflections, shadows, and ambient lighting can take 24–48 hours per frame. We optimize render times using render farms and efficient lighting setups."
      },
      {
        question: "Can you create animations from 3D models?",
        answer: "Yes, we can animate any 3D model to create engaging walkthroughs, explainer videos, product demonstrations, or architectural flythroughs. Whether you want simple camera pans or complex rigged animations, we offer full 3D animation production from modeling to final video editing."
      },
      {
        question: "Do you provide source files?",
        answer: "Absolutely. We deliver all relevant source files including .blend, .fbx, .obj, .c4d, and associated texture or material files. If animation is involved, we also provide project files and editable sequences for future revisions."
      },
      {
        question: "What information do you need to start a project?",
        answer: "To begin your 3D or animation project, we need clear reference images, product dimensions or architectural plans, material and texture preferences, and any specific requests for lighting, camera angles, animation duration, or output resolution."
      }
    ]
    ,
    process: [
      {
        step: "Concept & References",
        description: "We begin by gathering all necessary references, blueprints, sketches, or product images. This phase helps us establish a clear creative and technical direction based on your vision and objectives."
      },
      {
        step: "Modeling",
        description: "Our artists develop 3D geometry based on your references. Whether it’s a building, interior room, or product, we ensure every element is accurately scaled and detailed to match real-world proportions."
      },
      {
        step: "Texturing & Lighting",
        description: "We apply realistic textures, materials, and PBR workflows to enhance the model. Lighting is carefully configured to match real-world behavior—sunlight, indoor ambiance, or studio setups—for photorealistic results."
      },
      {
        step: "Rendering/Animation",
        description: "We generate high-resolution static renders or animated sequences using powerful rendering engines like Cycles (Blender), Redshift (Cinema4D), or Arnold (Maya). Multiple camera angles and environments are used to best showcase the model."
      },
      {
        step: "Post-Processing",
        description: "Final renders are enhanced with color grading, visual effects, transitions, and sound design where applicable. We use tools like After Effects, Premiere Pro, and DaVinci Resolve to deliver polished output suitable for any platform."
      }
    ]
  },


  {
    id: 5,
    serviceType: "Digital Marketing",
    shortDetails:
      "Performance-driven digital marketing to grow your business online and reach your target audience.",
    fullDetails: [
      "We offer SEO, social media marketing, email campaigns, and paid advertising.",
      "Our goal is to drive traffic, boost engagement, and convert leads into customers.",
      "Data-driven strategies, A/B testing, and monthly reports ensure ROI-focused marketing.",
    ],
    bulletPoints: [
      "SEO optimization and keyword ranking",
      "Social media management and campaigns",
      "Google Ads and Facebook Ads",
      "Email marketing and automation",
      "Content strategy and blog writing",
      "Lead generation and funnel building",
      "Video marketing and reels/shorts",
      "Monthly performance reports and analysis",
    ],
    images: [
      "https://www.udacity.com/blog/wp-content/uploads/2020/11/Digital-Marketing-Explained_Blog-scaled.jpeg",
      "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL307_blog_digital_marketing_banner.jpg.optimal.jpg",
    ],
    features: [
      {
        title: "Data-Driven Campaigns",
        content: "Our marketing strategies are built on data, not guesswork. We use real-time analytics, A/B testing, heatmaps, and performance metrics to craft and refine campaigns that resonate with your audience. With data-driven decision-making, we continuously optimize ad creatives, landing pages, and funnels for maximum ROI and growth.",
        image: "https://img.freepik.com/free-photo/marketing-analytics-dashboard_53876-15080.jpg",
      },
      {
        title: "Multi-Channel Strategy",
        content: "We help you reach and engage your target audience through a full-funnel, multi-channel approach that includes SEO, PPC, email marketing, social media, and display ads. Our omni-channel marketing strategy ensures consistent messaging, brand visibility, and audience engagement across platforms like Google, Facebook, Instagram, LinkedIn, and more.",
        image: "https://img.freepik.com/free-photo/omnichannel-marketing-concept_53876-162563.jpg",
      },
      {
        title: "Conversion Optimization",
        content: "Our CRO experts analyze user behavior and funnel performance to identify drop-off points and maximize conversions. We refine CTAs, page layouts, messaging, and site speed to ensure your visitors are guided smoothly through the journey—from first click to final purchase or signup.",
        image: "https://img.freepik.com/free-photo/sales-conversion-concept_53876-146451.jpg",
      },
      {
        title: "SEO & SEM Expertise",
        content: "Our team combines organic search engine optimization (SEO) with paid search engine marketing (SEM) for a powerful growth engine. We handle everything from on-page SEO, keyword strategy, and technical audits to running high-converting Google Ads campaigns, helping you dominate both organic and paid search results.",
        image: "https://img.freepik.com/free-photo/seo-concept-laptop-desk_23-2149406489.jpg",
      },
    ]
    ,
    faq: [
      {
        question: "How soon will I see results from SEO?",
        answer: "SEO is a long-term investment. Most websites begin to see noticeable improvements within 3 to 6 months, depending on keyword competition, content quality, and domain authority. We provide regular updates and track keyword rankings, traffic growth, and site health throughout the process."
      },
      {
        question: "What's the difference between SEO and PPC?",
        answer: "SEO focuses on earning organic traffic through high search rankings, while PPC (Pay-Per-Click) drives immediate traffic through paid ads like Google Ads or Facebook Ads. SEO is cost-effective over time, whereas PPC provides instant visibility and leads. We often use both for a balanced marketing approach."
      },
      {
        question: "How do you measure marketing success?",
        answer: "We track key performance indicators (KPIs) such as website traffic, bounce rate, session duration, lead generation, conversion rate, click-through rate (CTR), and overall return on investment (ROI). All data is gathered using tools like Google Analytics, Google Tag Manager, Meta Ads Manager, and SEMrush."
      },
      {
        question: "Do you handle social media content creation?",
        answer: "Yes, our team designs and publishes platform-specific social media content, including eye-catching graphics, promotional videos, carousels, stories, and ad creatives. We also manage content calendars and engagement strategies across platforms like Instagram, Facebook, LinkedIn, and Twitter."
      },
      {
        question: "What's included in your monthly reports?",
        answer: "Each report includes channel-specific performance metrics, campaign KPIs, competitor analysis, keyword rankings, audience engagement stats, ad spend breakdown, and our expert recommendations for next steps and improvements. We ensure full transparency and clarity in all reporting."
      }
    ]
    ,
    process: [
      {
        step: "Strategy Development",
        description: "We begin with a comprehensive audit of your current digital presence, competitors, and market trends. Our strategists then craft a customized digital marketing plan aligned with your goals—whether it's brand awareness, lead generation, or sales growth."
      },
      {
        step: "Implementation",
        description: "Our team sets up and executes campaigns across selected platforms. This includes writing compelling ad copy, optimizing landing pages, setting up tracking tools, and launching content and ad creatives designed to resonate with your audience."
      },
      {
        step: "Monitoring",
        description: "Once campaigns are live, we actively monitor their performance in real-time. Using tools like Google Analytics, Facebook Pixel, and Hotjar, we track user engagement, ad performance, and funnel drop-offs to quickly detect and correct issues."
      },
      {
        step: "Analysis & Reporting",
        description: "We analyze campaign data to understand what's working and what needs improvement. Our monthly reports offer clear insights, ROI calculations, and competitor benchmarks to help you make informed decisions moving forward."
      },
      {
        step: "Optimization",
        description: "Based on performance data, we continuously A/B test creatives, audiences, keywords, and placements. This agile approach ensures your marketing budget is always working efficiently to deliver better leads, lower cost-per-clicks, and higher returns."
      }
    ]

  },


  {
    id: 6,
    serviceType: "UI/UX Design",
    shortDetails:
      "Intuitive and engaging user interface and experience design for web and mobile applications.",
    fullDetails: [
      "We craft user-centric designs that enhance usability and deliver a delightful experience.",
      "Our process includes user research, wireframing, prototyping, and user testing.",
      "We focus on clean, modern, and accessible designs that align with your brand identity.",
    ],
    bulletPoints: [
      "User research and persona development",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design",
      "UX audits and usability testing",
      "Design systems and style guides",
      "Mobile app UI/UX design",
      "Web app UI/UX design",
      "Collaboration with development teams",
    ],
    images: [
      "https://img.freepik.com/free-photo/ui-ux-designer-working-designing-application_23-2149345155.jpg",
      "https://img.freepik.com/free-photo/user-experience-design-desk_23-2149408955.jpg",
    ],
    features: [
      {
        title: "User-Centered Approach",
        content: "We build based on user research and feedback to maximize usability and satisfaction.",
        image: "https://img.freepik.com/free-photo/user-centered-design-illustration_23-2149402021.jpg",
      },
      {
        title: "Interactive Prototypes",
        content: "Clickable wireframes and mockups help visualize the final product before development begins.",
        image: "https://img.freepik.com/free-photo/prototype-sketching-wireframe_53876-146314.jpg",
      },
      {
        title: "Accessibility Focus",
        content: "Designs comply with accessibility standards to ensure inclusiveness for all users.",
        image: "https://img.freepik.com/free-photo/accessibility-inclusion-design_53876-152943.jpg",
      },
      {
        title: "Design Systems",
        content: "Reusable components and consistent design language ensure efficiency and brand alignment.",
        image: "https://img.freepik.com/free-photo/design-system-concept_53876-152651.jpg",
      },
    ],
    faq: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UI focuses on visual interface elements, while UX encompasses the overall user experience and interaction flow."
      },
      {
        question: "How many design revisions do you allow?",
        answer: "We include 2-3 rounds of revisions in our standard packages, with additional rounds available if needed."
      },
      {
        question: "Do you conduct user testing?",
        answer: "Yes, we conduct usability testing with real users to validate designs and identify improvement areas."
      },
      {
        question: "What tools do you use for prototyping?",
        answer: "We primarily use Figma, Adobe XD, and InVision for creating interactive prototypes."
      },
      {
        question: "Can you work with existing design systems?",
        answer: "Absolutely. We can extend or improve upon your current design system while maintaining brand consistency."
      }
    ],
    process: [
      {
        step: "Research & Analysis",
        description: "Understanding user needs, business goals, and technical constraints.",
      },
      {
        step: "Information Architecture",
        description: "Structuring content and defining user flows for optimal navigation.",
      },
      {
        step: "Wireframing",
        description: "Creating low-fidelity layouts to establish structure and functionality.",
      },
      {
        step: "Prototyping",
        description: "Developing interactive prototypes for testing and feedback.",
      },
      {
        step: "UI Design",
        description: "Applying visual design elements to create polished, brand-aligned interfaces.",
      },
      {
        step: "Testing & Handoff",
        description: "Conducting usability tests and preparing assets for development.",
      },
    ]
  },


  {
    id: 7,
    serviceType: "Branding & Identity",
    shortDetails:
      "Build a memorable brand identity that resonates with your audience and stands out in the market.",
    fullDetails: [
      "We help businesses create a strong brand foundation with visual and verbal identity.",
      "From logo design to brand guidelines, we ensure consistency across all touchpoints.",
      "We craft stories and visuals that build trust and recognition for your brand.",
    ],
    bulletPoints: [
      "Brand strategy and positioning",
      "Logo and tagline creation",
      "Brand color palette and typography",
      "Brand style guide development",
      "Visual assets for print and digital",
      "Rebranding and brand refresh",
      "Marketing collateral design",
      "Social media branding kits",
    ],
    images: [
      "https://www.ied.edu/news/25464/image-thumb__25464__scaleByWidth1000/come-creare-una-brand-identity-header.jpg",
      "https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1705400952/ideas-and-advice-prod/blogadmin/brand-identity-design/brand-identity-design.jpg?_i=AA",
    ],
    features: [
      {
        title: "Strategic Brand Positioning",
        content: "We define your brand’s mission, values, and unique market position to establish long-term relevance and recognition.",
        image: "https://img.freepik.com/free-photo/brand-strategy-identity_53876-152845.jpg",
      },
      {
        title: "Unified Visual Identity",
        content: "Consistent brand visuals including logos, fonts, and color palettes that reflect your brand’s essence across platforms.",
        image: "https://img.freepik.com/free-photo/branding-kit-design_53876-152681.jpg",
      },
      {
        title: "Comprehensive Brand Guides",
        content: "Detailed style guides to ensure brand consistency across digital, print, packaging, and beyond.",
        image: "https://img.freepik.com/free-photo/brand-manual-guidelines_53876-152734.jpg",
      },
      {
        title: "Storytelling Through Design",
        content: "Crafting compelling narratives that emotionally connect your brand with your target audience.",
        image: "https://img.freepik.com/free-photo/storytelling-digital-marketing_53876-146478.jpg",
      },
    ]
    ,
    faq: [
      {
        question: "What's included in a brand identity package?",
        answer: "Logo variations, color palette, typography system, brand guidelines, and sample mockups for real-world usage."
      },
      {
        question: "How do you approach logo design?",
        answer: "Through research, brainstorming, and iteration — we present multiple concepts, refine with your feedback, and deliver final assets in all formats."
      },
      {
        question: "What makes a strong brand identity?",
        answer: "It’s memorable, scalable, aligned with your values, and resonates clearly with your target market."
      },
      {
        question: "Can you help with rebranding?",
        answer: "Yes, we specialize in refreshing outdated brands or repositioning existing ones while maintaining brand equity."
      },
      {
        question: "How long does the branding process take?",
        answer: "Typically 4–8 weeks, depending on complexity and feedback cycles."
      }
    ]
    ,
    process: [
      {
        step: "Discovery",
        description: "Conducting research on your market, audience, and competitors to understand the brand landscape.",
      },
      {
        step: "Strategy",
        description: "Defining your brand’s voice, mission, values, and positioning for consistent messaging.",
      },
      {
        step: "Design Exploration",
        description: "Exploring multiple creative directions for your brand visuals including logo and style components.",
      },
      {
        step: "Refinement",
        description: "Finalizing and expanding the chosen visual identity into a cohesive and scalable system.",
      },
      {
        step: "Guidelines",
        description: "Creating a brand manual with clear usage rules for consistent deployment across channels.",
      },
      {
        step: "Implementation",
        description: "Rolling out the identity across key brand assets like business cards, social media, packaging, and web.",
      },
    ]
  },


  {
    id: 8,
    serviceType: "Content Creation",
    shortDetails:
      "High-quality content writing, copywriting, and visuals that engage and convert your audience.",
    fullDetails: [
      "We create SEO-friendly website content, blog posts, ad copy, and social media captions.",
      "Our team ensures the tone and messaging align with your brand voice.",
      "Visual content such as infographics and videos amplify your marketing impact.",
    ],
    bulletPoints: [
      "Website and landing page copy",
      "SEO blog writing",
      "Social media content and captions",
      "Product descriptions and ad copy",
      "Video scripts and storyboarding",
      "Infographic design",
      "Email newsletters and campaigns",
      "Content planning and strategy",
    ],
    images: [
      "https://thesocialmediamonthly.com/wp-content/uploads/2020/11/g7m.jpeg",
      "https://img.freepik.com/free-photo/blogger-working-laptop-writing_53876-103044.jpg",
    ],
features: [
  {
    title: "SEO-Optimized Writing",
    content: "We craft content backed by keyword research and SEO best practices to improve search visibility and drive organic traffic.",
    image: "https://img.freepik.com/free-photo/content-seo-analysis_53876-15092.jpg",
  },
  {
    title: "Engaging Visual Content",
    content: "Infographics, carousels, and video scripts designed to capture attention and encourage sharing across platforms.",
    image: "https://img.freepik.com/free-photo/visual-content-creation_53876-152777.jpg",
  },
  {
    title: "Multi-Platform Copywriting",
    content: "Custom copy tailored for websites, ads, email campaigns, and social media — all aligned with your brand voice.",
    image: "https://img.freepik.com/free-photo/social-media-copy-concept_53876-148716.jpg",
  },
  {
    title: "Content Strategy & Planning",
    content: "We create strategic content calendars and themes that align with your business goals and audience interests.",
    image: "https://img.freepik.com/free-photo/marketing-planning-calendar_53876-149253.jpg",
  },
],

faq: [
  {
    question: "How do you ensure content aligns with our brand voice?",
    answer: "We review your brand guidelines, past content, and tone of voice to ensure consistency in all deliverables."
  },
  {
    question: "Do you perform keyword research for SEO content?",
    answer: "Absolutely. We conduct in-depth keyword research and competitor analysis for every SEO project."
  },
  {
    question: "What's your typical turnaround time for content?",
    answer: "Content is usually delivered within 3–5 business days, depending on complexity and word count."
  },
  {
    question: "Can you create content in multiple languages?",
    answer: "Yes, we collaborate with native speakers and certified translators to offer multilingual content solutions."
  },
  {
    question: "How do you measure content performance?",
    answer: "We monitor key metrics like traffic, engagement, ranking, and conversions to assess effectiveness and ROI."
  }
],

process: [
  {
    step: "Content Strategy",
    description: "Building a content roadmap and editorial calendar aligned with business objectives and audience needs.",
  },
  {
    step: "Research",
    description: "Conducting keyword research, analyzing competitors, and gathering reliable data and insights.",
  },
  {
    step: "Creation",
    description: "Writing and designing content tailored to your voice, goals, and platform requirements.",
  },
  {
    step: "Review & Revision",
    description: "Incorporating client feedback and performing quality checks for grammar, clarity, and accuracy.",
  },
  {
    step: "Optimization",
    description: "Enhancing for SEO, readability, and mobile responsiveness before publishing.",
  },
  {
    step: "Publication & Promotion",
    description: "Publishing content on relevant platforms and executing a distribution strategy to reach your audience.",
  },
]

  }
]