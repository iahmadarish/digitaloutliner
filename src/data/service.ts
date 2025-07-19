import webicon from "../../public/react.png"
import grapicsicon from "../../public/graphics.png"
import dicon from "../../public/thread.webp"
import app from "../../public/app.png"

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
      "https://img.freepik.com/free-photo/developer-working-computer_1098-18707.jpg",
      "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376750.jpg",
    ],
    features: [
      {
        title: "Lightning Fast Performance",
        content: "We use optimized code, CDN integration, and modern frameworks like Next.js to ensure blazing-fast website loading times.",
        image: "https://img.freepik.com/free-photo/fast-internet-connection-illustration_23-2149241246.jpg",
      },
      {
        title: "Scalable Architecture",
        content: "Designed to scale as your business grows, with modular codebases and efficient backend infrastructure.",
        image: "https://img.freepik.com/free-photo/data-center-server-room_23-2149739580.jpg",
      },
      {
        title: "SEO-Friendly Design",
        content: "We follow SEO best practices, including semantic HTML, meta tags, and page speed optimization to improve your visibility on search engines.",
        image: "https://img.freepik.com/free-photo/search-engine-optimization-concept_23-2148737784.jpg",
      },
      {
        title: "Cross-Platform Compatibility",
        content: "Your website will look and function perfectly on desktops, tablets, and mobile devices across all major browsers.",
        image: "https://img.freepik.com/free-photo/responsive-design-development-web_53876-126103.jpg",
      },
      {
        title: "Secure Web Applications",
        content: "We implement strong security measures including HTTPS, data validation, and secure authentication.",
        image: "https://img.freepik.com/free-photo/cyber-security-internet-protection-concept_53876-123997.jpg",
      }
    ]
  }
  ,
  {
    id: 2,
    serviceType: "Mobile App Development",
    icon: app,
    iconType: "image",
    shortDetails:
      "We build high-quality cross-platform and native mobile apps that deliver smooth, user-friendly experiences. Our apps are designed to perform flawlessly on iOS and Android, helping businesses engage users and grow in today’s mobile-first world.",
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
        content: "Build once, run anywhere. Our apps are optimized for Android and iOS with Flutter and React Native for faster development and wider reach.",
        image: "https://img.freepik.com/free-photo/phone-app-development_53876-96391.jpg",
      },
      {
        title: "Native Performance & UX",
        content: "Experience smooth, responsive, and intuitive native app performance with platform-specific features and interfaces.",
        image: "https://img.freepik.com/free-photo/app-interface-design_1098-16295.jpg",
      },
      {
        title: "Real-Time Functionality",
        content: "Implement real-time features like messaging, geolocation, and live tracking using Firebase and socket-based systems.",
        image: "https://img.freepik.com/free-photo/real-time-technology_53876-126054.jpg",
      },
      {
        title: "Secure & Scalable Backend",
        content: "Robust backend architecture integrated with REST APIs ensures data security and effortless scalability.",
        image: "https://img.freepik.com/free-photo/data-cloud-storage-system_23-2149394164.jpg",
      },
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
      "We craft stunning visuals that communicate your brand’s identity and value.",
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
      "https://img.freepik.com/free-photo/creative-graphic-designer-working-computer_23-2149051890.jpg",
      "https://img.freepik.com/free-photo/branding-identity-corporate-logo-design-graphic-concept_53876-133778.jpg",
    ],
    features: [
      {
        title: "Brand-Driven Design",
        content: "All designs are crafted to reflect your brand’s tone, personality, and target audience for consistency across all platforms.",
        image: "https://img.freepik.com/free-photo/design-concept-brand-identity_53876-139860.jpg",
      },
      {
        title: "Pixel-Perfect Deliverables",
        content: "From print to web, every asset is optimized for high-resolution, clarity, and format flexibility.",
        image: "https://img.freepik.com/free-photo/graphic-designer-working-digital-tablet_23-2148281422.jpg",
      },
      {
        title: "Marketing-Ready Visuals",
        content: "We design scroll-stopping visuals tailored for campaigns, ads, and conversion-focused outcomes.",
        image: "https://img.freepik.com/free-photo/marketing-campaign-design_53876-15082.jpg",
      },
      {
        title: "Editable Source Files",
        content: "Get access to fully editable design files for future changes, reuse, and collaboration.",
        image: "https://img.freepik.com/free-photo/designer-desk-illustration_23-2149389580.jpg",
      },
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
        content: "Photo-realistic 3D rendering for products, spaces, and environments that boost client understanding and conversions.",
        image: "https://img.freepik.com/free-photo/3d-interior-visualization_23-2149385290.jpg",
      },
      {
        title: "2D/3D Animation Services",
        content: "Engaging animations for explainer videos, social media, and presentations using After Effects, Blender & Cinema4D.",
        image: "https://img.freepik.com/free-photo/animation-workflow_53876-126079.jpg",
      },
      {
        title: "Architectural Modeling",
        content: "Detailed and scalable architectural mockups for real estate and interior design professionals.",
        image: "https://img.freepik.com/free-photo/modern-house-model_53876-104563.jpg",
      },
      {
        title: "Product Prototypes",
        content: "Interactive product modeling and visualization ideal for pitches, e-commerce, and pre-manufacturing reviews.",
        image: "https://img.freepik.com/free-photo/3d-printer-object-creation_53876-126030.jpg",
      },
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
        content: "We use analytics, A/B testing, and insights to create high-performing marketing funnels.",
        image: "https://img.freepik.com/free-photo/marketing-analytics-dashboard_53876-15080.jpg",
      },
      {
        title: "Multi-Channel Strategy",
        content: "Target your audience through SEO, social media, email, PPC, and more for maximum reach.",
        image: "https://img.freepik.com/free-photo/omnichannel-marketing-concept_53876-162563.jpg",
      },
      {
        title: "Conversion Optimization",
        content: "Our strategies are designed to convert clicks into customers through refined messaging and UX flow.",
        image: "https://img.freepik.com/free-photo/sales-conversion-concept_53876-146451.jpg",
      },
      {
        title: "SEO & SEM Expertise",
        content: "Get discovered faster with on-page SEO, backlink strategies, and optimized ad campaigns.",
        image: "https://img.freepik.com/free-photo/seo-concept-laptop-desk_23-2149406489.jpg",
      },
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
        content: "We help define your brand’s mission, values, and market position for long-term success.",
        image: "https://img.freepik.com/free-photo/brand-strategy-identity_53876-152845.jpg",
      },
      {
        title: "Unified Visual Identity",
        content: "Logos, fonts, and color palettes are crafted for visual consistency across platforms.",
        image: "https://img.freepik.com/free-photo/branding-kit-design_53876-152681.jpg",
      },
      {
        title: "Comprehensive Brand Guides",
        content: "Style guides ensure your brand stays visually consistent across digital and print media.",
        image: "https://img.freepik.com/free-photo/brand-manual-guidelines_53876-152734.jpg",
      },
      {
        title: "Storytelling Through Design",
        content: "We help you emotionally connect with your audience through compelling brand narratives.",
        image: "https://img.freepik.com/free-photo/storytelling-digital-marketing_53876-146478.jpg",
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
        content: "Our content is built around keyword research and ranking strategies to boost organic visibility.",
        image: "https://img.freepik.com/free-photo/content-seo-analysis_53876-15092.jpg",
      },
      {
        title: "Engaging Visual Content",
        content: "From infographics to video scripts, we make your content visually appealing and share-worthy.",
        image: "https://img.freepik.com/free-photo/visual-content-creation_53876-152777.jpg",
      },
      {
        title: "Multi-Platform Copywriting",
        content: "Tailored copy for websites, ads, emails, and social channels that speak your audience’s language.",
        image: "https://img.freepik.com/free-photo/social-media-copy-concept_53876-148716.jpg",
      },
      {
        title: "Content Strategy & Planning",
        content: "We plan your content calendar with a goal-oriented strategy that aligns with your brand voice.",
        image: "https://img.freepik.com/free-photo/marketing-planning-calendar_53876-149253.jpg",
      },
    ]

  }

]
