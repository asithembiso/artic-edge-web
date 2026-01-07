// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "FinTech Dashboard",
        category: "Web App",
        year: "2025",
        client: "TechStart Inc.",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        description: "A comprehensive redesign of a financial technology dashboard focusing on user experience and data visualization. The project involved extensive user research, prototyping, and iterative testing to ensure optimal usability.",
        challenge: "Users were overwhelmed by complex data displays and struggled to find critical information quickly.",
        solution: "We implemented a hierarchical information architecture, intuitive data visualizations, and customizable dashboards allowing users to prioritize their most important metrics.",
        results: [
            "200% increase in user engagement",
            "40% reduction in support tickets",
            "4.8/5 user satisfaction score",
            "30% faster task completion"
        ],
        features: [
            "Real-time data updates",
            "Customizable widgets",
            "Advanced filtering",
            "Mobile responsive",
            "Dark mode support",
            "Export capabilities"
        ],
        technologies: ["React", "TypeScript", "D3.js", "Redux", "Tailwind CSS", "REST API"],
        images: []
    },
    {
        id: 2,
        title: "Fitness Tracker App",
        category: "Mobile",
        year: "2025",
        client: "FitLife",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        description: "Native iOS and Android app for tracking workouts, nutrition, and wellness goals. Designed to motivate users through gamification and social features.",
        challenge: "Low user retention rates and limited engagement after the first week of use.",
        solution: "Implemented streak tracking, achievement badges, social challenges, and personalized workout recommendations based on user progress.",
        results: [
            "300% increase in 30-day retention",
            "4.9★ App Store rating",
            "500K+ active users",
            "Featured by Apple"
        ],
        features: [
            "Workout tracking",
            "Nutrition logging",
            "Progress analytics",
            "Social challenges",
            "Wearable integration",
            "AI recommendations"
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "TensorFlow", "HealthKit"],
        images: []
    },
    {
        id: 3,
        title: "E-commerce Platform",
        category: "Web",
        year: "2024",
        client: "ShopLocal",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        description: "Full-featured e-commerce platform with inventory management, payment processing, and customer analytics. Built for scalability and performance.",
        challenge: "High cart abandonment rate and poor mobile conversion.",
        solution: "Streamlined checkout process, guest checkout option, saved payment methods, and mobile-first design approach.",
        results: [
            "150% increase in conversions",
            "60% reduction in cart abandonment",
            "Sub-2s page load times",
            "99.9% uptime"
        ],
        features: [
            "Product catalog",
            "Smart search",
            "One-click checkout",
            "Order tracking",
            "Inventory management",
            "Analytics dashboard"
        ],
        technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Elasticsearch"],
        images: []
    },
    {
        id: 4,
        title: "Food Delivery App",
        category: "Mobile",
        year: "2024",
        client: "QuickBite",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        description: "On-demand food delivery application connecting users with local restaurants. Real-time order tracking and seamless payment experience.",
        challenge: "Complex three-sided marketplace with restaurants, drivers, and customers needing different interfaces.",
        solution: "Developed three separate but integrated apps with role-specific features while maintaining consistent branding and UX patterns.",
        results: [
            "100K+ downloads in 3 months",
            "Average order time: 28 minutes",
            "4.7★ rating across platforms",
            "85% repeat customer rate"
        ],
        features: [
            "Real-time tracking",
            "Multiple payment options",
            "Restaurant discovery",
            "Order scheduling",
            "Loyalty rewards",
            "In-app chat"
        ],
        technologies: ["Flutter", "Node.js", "Socket.io", "Google Maps API", "Stripe", "Firebase"],
        images: []
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Sarah Chen",
        title: "CEO, TechStart Inc.",
        company: "TechStart",
        rating: 5,
        text: "PixelCraft transformed our outdated website into a modern, high-converting masterpiece. Our sales increased by 150% in just 3 months!",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=6366f1&color=fff"
    },
    {
        id: 2,
        name: "Marcus Johnson",
        title: "Founder, FitLife App",
        company: "FitLife",
        rating: 5,
        text: "The mobile app they designed for us is absolutely stunning. User engagement went through the roof and app store reviews are consistently 4.9+.",
        avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=ec4899&color=fff"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        title: "Marketing Director, GrowthCo",
        company: "GrowthCo",
        rating: 5,
        text: "Professional, creative, and always on time. PixelCraft delivered beyond our expectations. Highly recommend for any design project!",
        avatar: "https://ui-avatars.com/api/?name=Emma+Rodriguez&background=8b5cf6&color=fff"
    }
];

// Team Data
const teamData = [
    {
        id: 1,
        name: "Alex Morrison",
        role: "Founder & Creative Director",
        bio: "10+ years crafting pixel-perfect designs for Fortune 500s and startups alike.",
        image: "https://ui-avatars.com/api/?name=Alex+Morrison&size=300&background=667eea&color=fff",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        social: {
            linkedin: "#",
            twitter: "#",
            dribbble: "#"
        }
    },
    {
        id: 2,
        name: "Jordan Lee",
        role: "Lead UX Designer",
        bio: "Psychology meets design. Creating intuitive experiences backed by research.",
        image: "https://ui-avatars.com/api/?name=Jordan+Lee&size=300&background=f093fb&color=fff",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        social: {
            linkedin: "#",
            twitter: "#",
            dribbble: "#"
        }
    },
    {
        id: 3,
        name: "Sam Patel",
        role: "Senior UI Developer",
        bio: "Turning designs into buttery-smooth, performant web experiences.",
        image: "https://ui-avatars.com/api/?name=Sam+Patel&size=300&background=4facfe&color=fff",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: 4,
        name: "Maya Johnson",
        role: "Mobile App Specialist",
        bio: "iOS and Android expert creating apps that users can't put down.",
        image: "https://ui-avatars.com/api/?name=Maya+Johnson&size=300&background=43e97b&color=fff",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        social: {
            linkedin: "#",
            twitter: "#",
            dribbble: "#"
        }
    }
];

// Services Data
const servicesData = [
    {
        id: 1,
        icon: "🎨",
        title: "Web Design",
        description: "Stunning, conversion-focused websites that captivate your audience and grow your business.",
        features: [
            "Custom UI/UX Design",
            "Responsive Layouts",
            "SEO Optimization",
            "Performance Tuning"
        ],
        pricing: "Starting at $5,000",
        timeline: "4-6 weeks"
    },
    {
        id: 2,
        icon: "📱",
        title: "Mobile App Design",
        description: "Native and cross-platform apps that users love. iOS, Android, and everything in between.",
        features: [
            "iOS & Android Design",
            "User Flow Mapping",
            "Interactive Prototypes",
            "App Store Assets"
        ],
        pricing: "Starting at $15,000",
        timeline: "8-12 weeks",
        featured: true
    },
    {
        id: 3,
        icon: "🚀",
        title: "Brand Identity",
        description: "Build a memorable brand that stands out. Logos, color palettes, and complete style guides.",
        features: [
            "Logo Design",
            "Brand Guidelines",
            "Color & Typography",
            "Marketing Assets"
        ],
        pricing: "Starting at $3,000",
        timeline: "2-4 weeks"
    },
    {
        id: 4,
        icon: "🔄",
        title: "UX Research",
        description: "Data-driven insights to optimize your product. User testing, analytics, and strategy.",
        features: [
            "User Interviews",
            "A/B Testing",
            "Heatmap Analysis",
            "Conversion Optimization"
        ],
        pricing: "Starting at $2,500",
        timeline: "2-3 weeks"
    },
    {
        id: 5,
        icon: "💻",
        title: "UI Development",
        description: "Pixel-perfect front-end development. React, Vue, and modern web technologies.",
        features: [
            "React & Vue Apps",
            "Animation & Motion",
            "API Integration",
            "Quality Assurance"
        ],
        pricing: "Starting at $8,000",
        timeline: "6-8 weeks"
    },
    {
        id: 6,
        icon: "🎯",
        title: "Product Strategy",
        description: "Strategic planning to ensure your product succeeds. From MVP to scale.",
        features: [
            "Market Research",
            "Feature Prioritization",
            "Roadmap Planning",
            "Growth Strategy"
        ],
        pricing: "Starting at $4,000",
        timeline: "1-2 weeks"
    }
];

// FAQ Data
const faqData = [
    {
        id: 1,
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope. A typical website takes 4-6 weeks, while mobile apps range from 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
        id: 2,
        question: "What is your design process?",
        answer: "We follow a 5-step process: Discovery & Research → Wireframing → Design Concepts → Development → Testing & Launch. You'll be involved at every stage with regular updates and feedback sessions."
    },
    {
        id: 3,
        question: "Do you offer ongoing support after launch?",
        answer: "Absolutely! We offer maintenance packages including updates, bug fixes, and feature additions. All projects include 30 days of free post-launch support."
    },
    {
        id: 4,
        question: "What is your pricing structure?",
        answer: "We offer both project-based and retainer pricing. Websites start at $5,000, mobile apps at $15,000. We provide custom quotes based on your specific needs and requirements."
    },
    {
        id: 5,
        question: "Can you work with our existing brand guidelines?",
        answer: "Yes! We can work within your existing brand guidelines or help you create new ones. Our designs are always tailored to match your brand identity and business goals."
    },
    {
        id: 6,
        question: "Do you provide training after launch?",
        answer: "Yes, we provide comprehensive training sessions and documentation so your team can confidently manage and update your website or app."
    }
];

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioData,
        testimonialsData,
        teamData,
        servicesData,
        faqData
    };
}
