import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Yash Tiwari",
    initials: "DV",
    url: "https://dillion.io",
    location: "San Francisco, CA",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    resumeUrl: "https://aqua-brandy-94.tiiny.site/",
    aiAssistantUrl: "https://askyash.vercel.app/",
    description:
        "Software Engineer who loves building products from scratch. Active on Twitter and passionate about creating impactful solutions.",
    summary:
        "Hi! 👋 I’m Yash Tiwari, a [Full-Stack Developer with a Computer Science degree from Noida](). [I build]() [scalable](), [high-performance]() [web applications and robust servers]() using MongoDB, Express.js, React, and Node.js. I also have hands-on experience with [generative AI](), [RAG systems](), and [DevOps engineering](). I’ve interned at several companies and [contributed to real-world projects that generate revenue](), turning ideas into impactful, production-ready solutions. [Let’s connect!]()",
    avatarUrl: "/me.png",
    skills: [
        "Html",
        "TailwindCSS",
        "JavaScript",
        "Typescript",
        "Golang",
        "React",
        "Next.js",
        "Express.js",
        "Node.js",
        "Kafka",
        "Temporal",
        "Socket.io",
        "Redis",
        "MongoDB", 
        "Postgres",
        "Docker",
        "Google Cloud",
        "Vercel",
        "Python",
        "C++",
        "Git",
        "Github",
        "Postman",
        "ReduxToolkit",
        "Turborepo",
        "N8n",
        "Langchain",
        "Vector Databases",
        "Rag Systems",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        email: "yashtiwari700714@gmail.com",
        tel: "+91 7007571027",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/yashxtw",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yashxtw/",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/yashxtw",
                icon: Icons.x,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Kartavya Technologies",
            href: "https://www.linkedin.com/company/kartavyatech/posts/?feedView=all",
            badges: [],
            location: "Remote",
            title: "Backend Engineer",
            logoUrl: "/KT.png",
            start: "August 2025",
            end: "Present",
            description:
                "During my internships, I contributed across multiple projects and tech stacks. I updated and optimized the main company website, built responsive frontends for several AI agents, and developed a scalable backend for a bike rental platform from scratch using a microservices architecture. I also gained hands-on experience with Docker, Google Cloud, and deploying production-grade applications.",
        },
        {
            company: "ByteEdu",
            badges: [],
            href: "https://www.linkedin.com/company/byteedu/posts/?feedView=all",
            location: "Remote",
            title: "Full-Stack Developer",
            logoUrl: "/BE.png",
            start: "November 2024",
            end: "April 2025",
            description:
                "During my internship, I led the development of the company’s main website from scratch and collaborated with an NGO to deliver impactful digital solutions. I also built a complete Employee Management System and a dynamic News Website, focusing on clean design, efficient workflows, and smooth user experiences.",
        },
    ],
    education: [
        {
            school: "JSS Academy of Technical Education Noida",
            href: "https://www.jssaten.ac.in",
            degree: "Bachelor of Technology (B.Tech) in Computer Science - 8.0 CGPA",
            logoUrl: "/jss.png",
            start: "2023",
            end: "2027",
        },
        {
            school: "Nav Bharat Public School",
            href: "#",
            degree: "High School (10th Grade) - 95%",
            logoUrl: "/navbharat.png",
            start: "2019",
            end: "2020",
        },
        {
            school: "Nav Bharat Public School",
            href: "#",
            degree: "Senior Secondary (12th Grade) – Science Stream - 94%",
            logoUrl: "/navbharat.png",
            start: "2021",
            end: "2022",
        },
    ],
    projects: [
        {
            title: "Zuto",
            href: "https://zutogo.com",
            dates: "1 Oct - Present",
            active: true,
            description:
                "Zuto is a scalable bike rental platform built with Node.js, Docker, Redis, and Google Cloud, featuring KYC-based bookings, ride lifecycle management, geo-based search, and wallet payments. It includes a robust backend architecture with Redis locks and queues for reliability and an admin dashboard for real-time monitoring of users, bikes, and transactions.",
            technologies: [
                "Flutter",
                "Node.js",
                "MongoDB",
                "Postgres SQL",
                "Microservices",
                "Redis",
                "Kafka",
                "Stripe",
                "Socket.io",
                "Docker",
                "Google cloud"
            ],
            links: [
                {
                    type: "Download for android",
                    href: "#",
                    icon: <Icons.android className="size-3" />,
                },
                {
                    type: "Download for iOS",
                    href: "#",
                    icon: <Icons.apple className="size-3" />,
                },
                {
                    type: "Website",
                    href: "https://zutogo.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "Career Path AI",
            href: "https://career-path-gen-ai-exchange.vercel.app/",
            dates: "",
            active: true,
            description:
                "CareerPath is a comprehensive platform designed to help individuals navigate their career journeys. It offers personalized career advice, skill assessments, and resources to help users make informed decisions about their professional paths.",
            technologies: [
                "Next.js",
                "Typescript",
                "MongoDB",
                "Gemini AI",
                "TailwindCSS",
                "Node.js",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://career-path-gen-ai-exchange.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/yash700701/career_path_backend",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/careerPath.c0376602.png",
            video: "",
        },
        {
            title: "Icon Kit",
            href: "https://iconkit.vercel.app/",
            dates: "",
            active: true,
            description:
                "IconKit is a powerful online tool that helps you generate platform-specific app icons like iOS, Android, and Web icons in various sizes and shapes (circle, square, squircle, etc.). It supports customization like background color, padding, badges, and text overlays. Now, IconKit also lets you generate AI-based images as icons using Gemini AI image generation, so you can create icons from text prompts too!",
            technologies: [
                "Next.js",
                "Typescript",
                "canvas",
                "sharp",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://iconkit.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/yash700701/iconkit",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/iconKit.png",
            video: "",
        },
        {
            title: "LeetCode Calendar",
            href: "https://www.npmjs.com/package/@yashx700/leetcodecalendar#leetcodecalendar",
            dates: "",
            active: true,
            description:
                "LeetCode Calendar is an open-source React component that visualizes LeetCode activity in a GitHub-style contribution calendar. It supports full customization of block size, spacing, fonts, themes, and layout, making it easy for developers to showcase their coding streaks. Published on npm as @yashx700/leetcodecalendar, it's designed for easy installation and integration into personal websites or dashboards.",
            technologies: [
                "React.js",
                "Typescript",
                "Google cloud",
                "TailwindCSS",
                "Node.js",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://www.npmjs.com/package/@yashx700/leetcodecalendar#leetcodecalendar",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/yash700701/leetcodeCalendar",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/npmLeetcodeCalendar.e09d585b.png",
            video: "",
        },
        {
            title: "Mimzy",
            href: "https://mimzy.vercel.app/",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Mimzy is a modern, open-source chat application built with React and Firebase. It features real-time messaging, user authentication, and a responsive design, making it easy for users to connect and communicate. With a focus on simplicity and usability, Mimzy is the perfect solution for anyone looking to create their own chat application.",
            technologies: [
                "Next.js",
                "Typescript",
                "MongoDB",
                "TailwindCSS",
                "Shadcn UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://mimzy.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/yash700701/memehub",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/mimzy.png",
            video: "",
        },
    ],
    hackathons: [
        {
            title: "Hack Western 5",
            dates: "November 23rd - 25th, 2018",
            location: "London, Ontario",
            description:
                "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "Hack The North",
            dates: "September 14th - 16th, 2018",
            location: "Waterloo, Ontario",
            description:
                "Developed a mobile application which delivers university campus wide events in real time to all students.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "FirstNet Public Safety Hackathon",
            dates: "March 23rd - 24th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
            icon: "public",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
            links: [],
        },
        {
            title: "DeveloperWeek Hackathon",
            dates: "February 3rd - 4th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
            links: [
                {
                    title: "Github",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/cryptotrends/cryptotrends",
                },
            ],
        },
        {
            title: "HackDavis",
            dates: "January 20th - 21st, 2018",
            location: "Davis, California",
            description:
                "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
            win: "Best Data Hack",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/my6footprint",
                },
                {
                    title: "ML",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/my6footprint-machine-learning",
                },
                {
                    title: "iOS",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/CarbonWallet",
                },
                {
                    title: "Server",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/wallet6-server",
                },
            ],
        },
        {
            title: "ETH Waterloo",
            dates: "October 13th - 15th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
            links: [
                {
                    title: "Organization",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/ethdocnet",
                },
            ],
        },
        {
            title: "Hack The North",
            dates: "September 15th - 17th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a virtual reality application allowing users to see themselves in third person.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Streamer Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/justinmichaud/htn2017",
                },
                {
                    title: "Client Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/RTSPClient",
                },
            ],
        },
        {
            title: "Hack The 6ix",
            dates: "August 26th - 27th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/ShareShip/ShareShip",
                },
                {
                    title: "Site",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://share-ship.herokuapp.com/",
                },
            ],
        },
        {
            title: "Stupid Hack Toronto",
            dates: "July 23rd, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/nsagirlfriend/nsagirlfriend",
                },
            ],
        },
        {
            title: "Global AI Hackathon - Toronto",
            dates: "June 23rd - 25th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
            win: "1st Place Winner",
            links: [
                {
                    title: "Article",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/TinySamosas/",
                },
            ],
        },
        {
            title: "McGill AI for Social Innovation Hackathon",
            dates: "June 17th - 18th, 2017",
            location: "Montreal, Quebec",
            description:
                "Developed realtime facial microexpression analyzer using AI",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
            links: [],
        },
        {
            title: "Open Source Circular Economy Days Hackathon",
            dates: "June 10th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
            win: "1st Place Winner",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/genecis",
                },
            ],
        },
        {
            title: "Make School's Student App Competition 2017",
            dates: "May 19th - 21st, 2017",
            location: "International",
            description:
                "Improved PocketDoc and submitted to online competition",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
            win: "Top 10 Finalist | Honourable Mention",
            links: [
                {
                    title: "Medium Article",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
                },
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "HackMining",
            dates: "May 12th - 14th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed neural network to optimize a mining process",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
            links: [],
        },
        {
            title: "Waterloo Equithon",
            dates: "May 5th - 7th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "SpaceApps Waterloo",
            dates: "April 28th - 30th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/earthwatch",
                },
            ],
        },
        {
            title: "MHacks 9",
            dates: "March 24th - 26th, 2017",
            location: "Ann Arbor, Michigan",
            description:
                "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/threejs-planes",
                },
            ],
        },
        {
            title: "StartHacks I",
            dates: "March 4th - 5th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
            win: "1st Place Winner",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/recipic-ionic",
                },
                {
                    title: "Source (Server)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/recipic-rails",
                },
            ],
        },
        {
            title: "QHacks II",
            dates: "February 3rd - 5th, 2017",
            location: "Kingston, Ontario",
            description:
                "Developed a mobile game which enables city-wide manhunt with random lobbies",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/human-huntr-react-native",
                },
                {
                    title: "Source (API)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/human-huntr-rails",
                },
            ],
        },
        {
            title: "Terrible Hacks V",
            dates: "November 26th, 2016",
            location: "Waterloo, Ontario",
            description:
                "Developed a mock of Windows 11 with interesting notifications and functionality",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
                },
            ],
        },
        {
            title: "Portal Hackathon",
            dates: "October 29, 2016",
            location: "Kingston, Ontario",
            description:
                "Developed an internal widget for uploading assignments using Waterloo's portal app",
            image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/UWPortalSDK/crowmark",
                },
            ],
        },
    ],
} as const;
