import disc from "../assets/disc.png"

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Podcastr - AI Podcast Platform',
        desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const experiences = [
    {
        id: 1,
        company: 'Robinhood',
        logo: '/assets/robinhood-logo.png',
        period: 'Incoming May 2026 - August 2026',
        role: 'Software Engineer Intern',
        description: [
            'Will build Swift-based, production-quality iOS and watchOS features.',
            'Will collaborate with cross-functional teams to design, implement, and launch mobile experiences.',
        ],
        images: null,
        link: null,
    },
    {
        id: 2,
        company: 'Tesla',
        logo: '/assets/tesla-logo.png',
        period: 'Jan 2026 - May 2026',
        role: 'Software Engineer Intern',
        description: [
            'Design, develop, and maintain front-end features for web and mobile applications for Automated Diagnostics team.',
            'Collaborate with cross-functional teams to implement feature and resolve technical issues.',
            'Participate in code reviews, debugging, and testing.',
        ],
        images: null,
        link: null,
    },
    {
        id: 3,
        company: 'The New York Times',
        logo: '/assets/nytimes-logo.png',
        period: 'June 2025 - August 2025',
        role: 'Software Engineer Intern',
        description: [
            'Spearheaded the implementation of full Dark Mode support for the native iOS Games App.',
            'Resolved critical theme inconsistency bugs between UIKit/SwiftUI views and embedded web views.',
            'Built an in-app setting to let users universally apply their preferred theme mode across the app.',
            'Participated in New York Times Maker Week 2025 and built a Games/Friends Widget that displays real-time gameplay data directly on the home screen.',
        ],
        images: ['/assets/nyt1.PNG', '/assets/nyt2.PNG'],
        link: null,
    },
    {
        id: 4,
        company: 'San Diego Supercomputer Center',
        logo: '/assets/sdsc-logo.png',
        period: 'August 2023 - February 2024',
        role: 'Software Engineer',
        description: [
            'Key contributor in development of NeuroRes, an iOS chat app for 200+ neuroscience professionals, receiving positive stakeholder feedback.',
            'Utilized Swift UI to create a responsive interface featuring interactive calendars, neuroscience journal blogs, communication channels, and image collections, following MVVM architecture.',
        ],
        images: ['/assets/neurores2.png', '/assets/neurores1.png'],
        link: 'https://apps.apple.com/gb/app/neurores/id1345523598',
    },
    {
        id: 5,
        company: 'San Diego Supercomputer Center',
        logo: '/assets/sdsc-logo.png',
        period: 'June 2022 - September 2022',
        role: 'Software Engineer Intern',
        description: [
            'Collaborated with a team of 8 to develop a roommate-finder app in React Native for students at University of California, San Diego.',
            'Utilized Firebase Cloud to build an in-app messaging system.',
        ],
        images: ['/assets/birdnest1.png', '/assets/birdnest2.png'],
        link: null,
    },
];

export const projects = {
    traffic: {
        title: "Project: Traffic Signal Control",
        link: "github.com/masarkar-tamu/CSCE-642-Continual-Learning",
        date: "Fall 2024",
        content: [
            "Collaborated with a team of 2 to integrate the Continual Backpropagation (CBP) algorithm into the Deep-Q Networks\n" +
            "model to improve adaptability in non-stationary traffic signal control environments.",
            // "Conducted 800 hours of simulated testing using SUMO traffic simulation to compare the performance of our model\n" +
            // "against MPLight and standard Deep-Q Networks.",
            // "Achieved a 10% reduction in average waiting time compared to the original Deep-Q Networks model and a 30% reduction\n" +
            // "compared to MPLight."
        ]
    },
    grc: {
        title: "Project: GRC Controls",
        link: "github.com/quocduyvu6262/USSF-GRC-Controls",
        date: "Fall 2024",
        content: [
            "Collaborated with a team of 7 to develop a Ruby on Rails SaaS application for the United States Space Force (USSF),\n" +
            "enabling Docker image vulnerability scanning, mapping to NIST SP800-53 GRC controls, and streamlined compliance\n" +
            "management with role-based access control.",
            // "Built a feature allowing users to share vulnerability reports with read-only or edit permissions for updating and\n" +
            // "rescanning Docker images.",
            // "Tested application with Cucumber for user flows and RSpec for unit tests, achieving 90% test coverage."
        ]
    },
    dental: {
        title: "Project: Dental Booking System",
        link: "github.com/Dental-Booking-System",
        date: "Summer 2024",
        content: [
            "Built a multi-platform system to streamline appointment booking and clinic management, consisting of patient, admin,\n" +
            "and dental services.",
            "This project includes a React Native mobile app for patient bookings, a Next.js web app for clinic management, and a Spring Boot backend for business logic."
        ]
    }
}