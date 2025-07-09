
type ReactI18NextChildren = React.ReactNode;
export interface Blog {
  [x: string]: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  id: number;
  title: string;
  excerpt: string;
  description: string[];
  bulletPoints: string[];
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: string;
  images: string[];
  iconName: string; // Changed from ReactNode to string
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Top 5 Web Development Trends in 2024",
    excerpt: "Discover the cutting-edge technologies shaping modern web development this year.",
    description: [
      "The web development landscape continues to evolve at a rapid pace...",
      // rest of description
    ],
    bulletPoints: [
      "WebAssembly (Wasm) adoption is growing...",
      // rest of bullet points
    ],
    date: "June 10, 2024",
    readTime: "6 min read",
    author: "Alex Johnson",
    authorRole: "Senior Web Developer",
    category: "Web Development",
    images: [
      "https://metasoft.io/wp-content/uploads/2024/10/Top-Web-Development-Frameworks-1.jpg",
      "https://www.cdmi.in/courses@2x/web-developments.webp",
      "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
    ],
    iconName: "code" // Changed to string reference
  },
  {
  id: 2,
  title: "Why Cross-Platform Mobile App Development is the Future",
  excerpt: "Explore how cross-platform app development helps businesses save costs, speed up delivery, and reach more users effectively.",
  description: [
    "In the fast-paced digital world, businesses need mobile apps that are cost-effective, fast to develop, and work seamlessly across devices. Cross-platform development using frameworks like Flutter and React Native offers the perfect solution.",
    "With a single codebase for iOS and Android, companies save time and money while maintaining performance and UI consistency. Moreover, cross-platform apps are easier to maintain and update, ensuring long-term scalability.",
    "From startups to enterprises, mobile apps are a powerful channel to engage users, streamline operations, and drive business growth in the mobile-first era."
  ],
  bulletPoints: [
    "Write once, deploy on both Android and iOS",
    "Reduce development and maintenance costs",
    "Faster time-to-market for MVPs and updates",
    "Consistent UI/UX across platforms",
    "Ideal for startups and mid-sized businesses"
  ],
  date: "July 9, 2024",
  readTime: "5 min read",
  author: "Sophia Kim",
  authorRole: "Mobile App Engineer",
  category: "Mobile App Development",
  images: [
    "https://cdn.prod.website-files.com/6349395c9738c5d053d3ceba/64a55abc0bf10e2cd3ac59d1_Cross-Platform%20Mobile%20App%20Development_%20All%20You%20Need%20to%20Know.png",
    "https://www.mindinventory.com/blog/wp-content/uploads/2024/06/benefits-of-cross-platform.webp",
    "https://media.geeksforgeeks.org/wp-content/uploads/React-Native-android-ios.png"
  ],
  iconName: "smartphone"
},
{
  id: 3,
  title: "The Power of Visual Branding: Why Graphic Design Matters",
  excerpt: "Discover how professional graphic design builds trust, improves engagement, and drives brand recognition.",
  description: [
    "Graphic design plays a crucial role in establishing your brand’s identity. From your logo to social media posts, every visual speaks volumes about your business.",
    "A well-designed brand not only looks professional but also fosters emotional connection and trust with your audience. Colors, typography, and layout work together to deliver a consistent brand experience.",
    "Whether you’re building a startup or scaling an enterprise, investing in good design can significantly boost engagement, conversions, and brand recall."
  ],
  bulletPoints: [
    "Build trust through professional visuals",
    "Improve user engagement with consistent design",
    "Stand out in a crowded market",
    "Boost conversions with eye-catching graphics",
    "Strengthen social media presence"
  ],
  date: "July 5, 2024",
  readTime: "4 min read",
  author: "Daniel Rivera",
  authorRole: "Creative Director",
  category: "Graphic Design",
  images: [
    "https://cdn.mos.cms.futurecdn.net/HqEPv3K54CgPmRso4N3pH8-1200-80.jpg",
    "https://media.tekpon.com/2023/04/What-Is-Graphic-Design.webp",
    "https://cdn.mos.cms.futurecdn.net/HqEPv3K54CgPmRso4N3pH8-1200-80.jpg"
  ],
  iconName: "palette"
},

{
  id: 4,
  title: "How 3D Design Transforms Product Visualization and Marketing",
  excerpt: "Learn how 3D modeling and animation help brands showcase products with precision and creativity.",
  description: [
    "In modern product marketing, static images are no longer enough. 3D design enables brands to present products from every angle, animate features, and create immersive experiences.",
    "Architects, e-commerce brands, and game developers now rely on 3D modeling for prototyping, simulations, and realistic mockups. With tools like Blender and Cinema 4D, the creative possibilities are endless.",
    "3D visuals not only impress but also reduce design errors and speed up approvals, making them essential in product development workflows."
  ],
  bulletPoints: [
    "High-fidelity product mockups",
    "Architectural visualization with walkthroughs",
    "Engaging 3D animations for marketing",
    "Ideal for gaming, e-commerce, and manufacturing",
    "Saves time and cost in prototyping"
  ],
  date: "June 30, 2024",
  readTime: "6 min read",
  author: "Liam Chen",
  authorRole: "3D Artist & Animator",
  category: "3D Design",
  images: [
    "https://cdn.prod.website-files.com/62d1070c12d3c8115209b019/6748d79ab9e4a4b6a7cd3891_66c448634692b0029db23f3b_66c43f1a2666f307fcec5a36_step%252520(19).png",
    "https://niimblr.com/wp-content/uploads/2024/09/3D-Product-Visualization-with-Platforms.jpg",
    "https://cdn.prod.website-files.com/62d1070c12d3c8115209b019/6748d79ab9e4a4b6a7cd3891_66c448634692b0029db23f3b_66c43f1a2666f307fcec5a36_step%252520(19).png"
  ],
  iconName: "cube"
}

  
];