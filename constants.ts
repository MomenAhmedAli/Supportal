import { AvailabilityStatus, Project, Service, Asset, Review } from './types';

// Update this file to change website content dynamically
export const PERSONAL_INFO = {
  name: "Momen Ahmed Ali",
  nickname: "Momen",
  role: "UI/UX Designer & Roblox UI Artist",
  bio: "I am a specialist UI/UX Designer creating immersive user interfaces for Roblox. As a Computer Science graduate (Software Engineering), I bridge the gap between aesthetic design and technical implementation.",
  availability: AvailabilityStatus.AVAILABLE,
  discord: "https://discord.gg/7uHPevKyQ9",
  email: "contact@momenali.dev",
  github: "https://github.com/momenali", // Updated placeholder
  location: "Remote / Worldwide",
  profileImage: "https://picsum.photos/400/400?grayscale" // REPLACE THIS with your specific image URL
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Roblox UI Design',
    description: 'Immersive, high-quality user interfaces specifically tailored for Roblox experiences.',
    price: '$20 / Frame',
    features: ['Modern Style', 'Scalable Layouts', 'Theme Consistency', 'Asset Optimization'],
    icon: 'layout'
  },
  {
    id: '2',
    title: 'UI Scripting & Integration',
    description: 'Implementing designs into Roblox Studio with clean, optimized Lua code.',
    price: 'Contact for Quote',
    features: ['Lua Programming', 'Animation Scripting', 'Responsive scaling', 'Bug Free'],
    icon: 'code'
  },
  {
    id: '3',
    title: 'Game Art & Thumbnails',
    description: 'Eye-catching game thumbnails and icons to boost click-through rates.',
    price: '$30 / Asset',
    features: ['Game Icons', 'Feature Thumbnails', 'Pass/Badge Icons', 'High Resolution'],
    icon: 'image'
  },
  {
    id: '4',
    title: 'Vector Iconography',
    description: 'Custom vector icon sets that match your game\'s visual identity.',
    price: '$15 / Icon',
    features: ['SVG/PNG Export', 'Consistent Style', 'Multiple Sizes', 'Figma Source'],
    icon: 'pen-tool'
  }
];

export const PRICING_PLANS = [
  {
    category: "User Interface (UI)",
    items: [
      {
        title: "Basic",
        price: "$20",
        robux: "7.5k R$",
        unit: "per frame",
        features: ["1 High-Quality Frame", "Source File Included", "2 Revisions", "Fast Delivery"]
      },
      {
        title: "Premium",
        price: "$100",
        robux: "37.5k R$",
        unit: "5 frames bundle",
        features: ["5 High-Quality Frames", "Interactive Prototypes", "Source Files", "Priority Support"]
      },
      {
        title: "Ultimate",
        price: "Custom",
        robux: "Contact Me",
        unit: "Full Game UI",
        features: ["Complete Game Interface", "Scripting Support", "Asset Optimization", "Unlimited Revisions"]
      }
    ]
  },
  {
    category: "Graphic Assets",
    items: [
      {
        title: "Game Icon",
        price: "$25",
        robux: "10k R$",
        unit: "per icon",
        features: ["512x512 Resolution", "Vector Quality", "Eye-Catching Design", "Commercial Use"]
      },
      {
        title: "Thumbnail",
        price: "$30",
        robux: "8.5k R$",
        unit: "per thumbnail",
        features: ["1920x1080 Full HD", "3D Rendering", "Post-Processing Effects", "High CTR Design"]
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sci-Fi FPS HUD',
    category: 'Roblox UI',
    image: 'https://picsum.photos/800/600?random=10', // REPLACE THIS
    description: 'A futuristic heads-up display for a competitive shooter game.'
  },
  {
    id: '2',
    title: 'RPG Inventory System',
    category: 'UI Design',
    image: 'https://picsum.photos/800/600?random=11', // REPLACE THIS
    description: 'Complex inventory management interface with drag-and-drop functionality.'
  },
  {
    id: '3',
    title: 'Simulator Shop Interface',
    category: 'Roblox UI',
    image: 'https://picsum.photos/800/600?random=12', // REPLACE THIS
    description: 'Bright, engaging shop UI designed for maximum conversion in simulator games.'
  },
  {
    id: '4',
    title: 'Cyberpunk Asset Pack',
    category: 'Game Assets',
    image: 'https://picsum.photos/800/600?random=13', // REPLACE THIS
    description: 'Neon-styled UI assets available for free in my Discord.'
  }
];

export const FREE_ASSETS: Asset[] = [
  {
    id: '1',
    title: 'Basic RPG UI Kit',
    type: 'Roblox Model',
    thumbnail: 'https://picsum.photos/400/300?random=14', // REPLACE THIS
    downloadCount: 2540
  },
  {
    id: '2',
    title: 'Flat Icon Pack',
    type: 'Icons',
    thumbnail: 'https://picsum.photos/400/300?random=15', // REPLACE THIS
    downloadCount: 1100
  },
  {
    id: '3',
    title: 'Simulator GUI Template',
    type: '.rbxm',
    thumbnail: 'https://picsum.photos/400/300?random=16', // REPLACE THIS
    downloadCount: 3200
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Xokii',
    role: 'Server Owner',
    content: "This guy is 100% real UI designer, I've paid a good decent amount for good quality UI's, i really enjoy this designer because they were always open for corporation and making sure if were 100% on the right page of the UI's, i highly recommend this guy for your UI's designer if you guys ever need anyone! and all though it takes him a couple weeks of work i think its worth it because he takes his time with his work! (NOT A FAKE REVIEW) 💯",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=20' // REPLACE THIS
  },
  {
    id: '2',
    name: 'Verified Client',
    role: 'Customer',
    content: "At first by the looks of Momen's portfolio, I didn't really believe he could make such high quality logo designing or maybe even do real life clothes designing. After some time, he made me a masterpiece! The quality is nice, the lighting is amazing, he knows how to plan the clothings perfectly! I would hire him again! 10/10 Completed my order fast too!",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=21' // REPLACE THIS
  },
  {
    id: '3',
    name: 'klvynm',
    role: 'Developer',
    content: "COOL EGYPTIAN GUY MADE MY UHH GAMEPASS ICONS AND STUFF OH YEAH",
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=22' // REPLACE THIS
  }
];

// System instruction for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for Momen Ahmed Ali's portfolio website. 
Your goal is to answer visitor questions about Momen, his skills, services, and projects.

Here is the context about Momen:
- Name: ${PERSONAL_INFO.name} (${PERSONAL_INFO.nickname})
- Role: ${PERSONAL_INFO.role}
- Education: Bachelor's in Computer Science (Software Engineering)
- Bio: ${PERSONAL_INFO.bio}
- Availability: ${PERSONAL_INFO.availability}
- Discord: ${PERSONAL_INFO.discord}
- GitHub: ${PERSONAL_INFO.github}

Pricing:
- UI Design Basic: $20 / 7.5k Robux per frame
- UI Design Premium: $100 / 37.5k Robux (5 frames)
- Icons: $25 / 10k Robux each
- Thumbnails: $30 / 8.5k Robux each

Recent Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Tone: Professional, friendly, creative, and concise.
If asked about hiring, direct them to join the Discord server: ${PERSONAL_INFO.discord}.
If asked about technical skills, mention Roblox Studio, Lua, Figma, UI/UX Principles, and Software Engineering.
`;