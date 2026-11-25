// ---------- EDIT YOUR CONTENT HERE ----------
// To add a project: copy one object in `projects`, change the fields, save.
// Screenshots: put image files in /public/screens and list them in `shots`.
// Set phone: true for mobile app screens (shown as a phone-style gallery).

export const profile = {
  name: 'Muhammad Ali',
  handle: 'ali-webcraft',
  title: 'Full Stack Developer',
  tagline: 'I build clean, fast and user-friendly web and mobile applications.',
  about:
    "I'm Muhammad Ali, a full stack developer focused on building modern web and mobile applications. I work with React, Next.js and React Native on the frontend, and Node.js, Express and databases on the backend. I care about clean code, smooth user experience and well-structured APIs. I'm expanding my skills with the MERN and PERN stacks, and I'm open to freelance work and full-stack opportunities.",
  email: 'muhammadali499a@gmail.com',
  phone: '+92 319 8390 955',
  github: 'https://github.com/ali-webcraft',
  linkedin: 'https://www.linkedin.com/in/ali-webcraft/',
}

export const heroStack = ['React', 'Next.js', 'React Native', 'Node.js', 'Express', 'MongoDB', 'TypeScript']

export const whatIDo = [
  { title: 'Web apps', text: 'Responsive interfaces built with React and Next.js.' },
  { title: 'Mobile apps', text: 'Cross-platform apps built with React Native and Expo.' },
  { title: 'APIs and databases', text: 'REST APIs with Express, MongoDB and SQL.' },
]

export const now = [
  'Building a full-stack inventory system with Express, MongoDB, JWT auth and Next.js',
  'Learning SQL with Microsoft SQL Server',
  'Learning C# and .NET',
  'Completing the remaining MERN topics: validation, security, testing and deployment',
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'shadcn/ui'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'NativeWind'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { group: 'Databases', items: ['MongoDB', 'SQL (MS SQL Server)', 'Supabase'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel'] },
  { group: 'AI tools', items: ['Claude', 'Claude Code', 'Cursor', 'ChatGPT', 'Antigravity'] },
]

// ---------- PROJECTS ----------
// tagline: short plain-English line shown on the card.
// phone: true = mobile app (phone-style gallery). Put screens in /public/screens and list them in `shots`.
// Missing screenshots are skipped automatically, so it is safe to list more than you have.
const tanki = Array.from({ length: 10 }, (_, n) => `/screens/tanki-${n + 1}.jpg`)

export const projects = [
  {
    title: 'SMARTI Attendance App',
    tag: 'Mobile app',
    status: 'Completed',
    note: 'Demo not live',
    tagline: 'A college attendance app that lets teachers mark a whole class in a few taps.',
    overview: 'Taking attendance on paper is slow and records are easy to lose. SMARTI replaces the register with a simple mobile app. Teachers mark attendance quickly, and students can check their own record at any time. Everything is stored safely in one online place.',
    features: ['Teachers log in and mark each student present or absent', 'Students look up their own attendance with their roll number, no account needed', 'Keeps working when the internet is weak or unavailable', 'Uses the same data as the college web portal'],
    how: ['A teacher logs in and opens a class', 'They mark every student present or absent', 'The attendance is saved securely to an online database', 'A student enters their roll number to see their own attendance'],
    role: 'I designed and built the complete mobile app myself, from the screens to the database connection.',
    stack: [['Expo and React Native', 'Lets one codebase run on both Android and iPhone'], ['TypeScript', 'Catches mistakes early so the app is more reliable'], ['Supabase', 'The online database and login system behind the app'], ['NativeWind', 'Keeps the design consistent on every screen']],
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'NativeWind'],
    phone: true,
    shots: [1, 2, 3, 4, 5, 6].map((n) => `/screens/smarti-${n}.jpg`),
  },
  {
    title: 'Tanki Wala',
    tag: 'Mobile app',
    status: 'Completed',
    note: 'Demo not live',
    tagline: 'Order a water tanker to your door from a local supplier in Karachi.',
    overview: 'Ordering water by phone call is slow and hard to track. Tanki Wala gives customers and the supplier one simple place to manage deliveries. The whole app is in Roman Urdu so everyday users find it easy to use.',
    features: ['Separate screens for customers and for the supplier', 'Customers sign in with a phone number, no email needed', 'A loyalty points system that rewards repeat customers', 'Fully in Roman Urdu, with a consistent custom design'],
    how: ['A customer signs in with their phone number and places a water delivery order', 'The supplier sees the new order on their own screens and manages the delivery', 'The customer earns loyalty points for their orders'],
    role: 'I built the whole app myself for a real local supplier, including the design style and the app builds for testing on phones.',
    stack: [['Expo Router', 'Handles moving between the app\'s screens'], ['Supabase', 'Stores users and orders, with login and data-access rules'], ['React Native Paper', 'Ready-made, consistent buttons and forms'], ['EAS Build', 'Creates the installable app files for testing']],
    tech: ['React Native', 'Expo Router', 'Supabase', 'React Native Paper'],
    phone: true,
    shots: tanki,
  },
  {
    title: 'Webcraft Inventory',
    tag: 'Web app',
    status: 'Live',
    tagline: 'Manage products, photos and stock in one simple dashboard.',
    overview: 'A full stack inventory app for keeping track of products. An admin signs in to add products with photos, update stock with one click, edit details and remove items. Everyone else can browse, search and filter the catalogue. Low and out of stock items are flagged so nothing runs out unnoticed.',
    features: ['Secure admin login, while visitors can only browse', 'Add, edit and delete products with photo uploads', 'One click stock updates with Low stock and Out of stock labels', 'Search, category filter and pages for bigger catalogues', 'Every form is checked on the server so bad data never gets saved'],
    how: ['An admin signs in and adds products with a photo, price and stock', 'The site saves the product details in a database and the photos in an image service', 'Visitors see the live catalogue and can search or filter it, while admins can update stock, edit or delete'],
    role: 'I designed and built the whole app myself, both the website and the server behind it.',
    stack: [['Next.js and Tailwind CSS', 'Builds the pages and the clean design'], ['Node.js and Express', 'The server that handles logins and products'], ['MongoDB', 'Stores all the product and user data'], ['ImageKit', 'Stores and serves the product photos'], ['Zod', 'Checks that submitted data is valid'], ['Vercel', 'Hosts the website and the server online']],
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    live: 'https://webcraft-inventory-app.vercel.app/',
    github: 'https://github.com/ali-webcraft/webcraft-inventory',
    shots: ['/screens/webcraft-products.jpg', '/screens/webcraft-add-product.jpg', '/screens/webcraft-login.jpg', '/screens/webcraft-mobile.jpg'],
  },
  {
    title: 'UserBase App',
    tag: 'Full-stack web app',
    status: 'Completed',
    note: 'Demo not live',
    tagline: 'Sign up, log in and manage your own posts in a simple, secure app.',
    overview: 'A project built to practise how real apps handle accounts. Users can create an account, log in securely, and add or delete their own posts. Private pages are protected, so only logged-in users can open them.',
    features: ['Sign up and log in with email and password', 'Private pages that send visitors to the login page if they are not signed in', 'Create, view and delete posts', 'Stays logged in after a page refresh, with a dark and light theme'],
    how: ['A user creates an account and logs in', 'The app remembers who they are, even after refreshing the page', 'They write a post with a title and description', 'Their posts appear in a list and can be deleted'],
    role: 'I built the full app myself: the screens, the login system and the connection to the database.',
    stack: [['React', 'Builds the pages and buttons you see'], ['Redux', 'Remembers who is logged in'], ['Supabase', 'Handles accounts and stores the posts'], ['Tailwind CSS', 'Styling, including the dark and light theme'], ['Axios', 'Sends requests and attaches the login token automatically']],
    tech: ['React', 'Redux', 'Supabase', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/ali-webcraft/userbase-app',
    sample: 'The screenshot shows sample data.',
    shots: ['/screens/userbase.jpg'],
  },
  {
    title: 'AI Chat App',
    tag: 'Web app',
    status: 'Completed',
    note: 'Demo not live',
    tagline: 'A chat assistant powered by Google\'s Gemini AI.',
    overview: 'This app shows how to connect a real AI model to a website safely. You type a question, and the assistant answers in a clean, readable format with lists, bold text and code where needed.',
    features: ['Ask anything and get an answer from Google\'s Gemini AI', 'Replies are neatly formatted, including lists and code', 'A typing indicator while the answer is being prepared', 'The secret AI key stays on the server, never in the browser'],
    how: ['You type a message and press send', 'The website\'s server passes it to the Gemini AI', 'The answer comes back and is shown in the chat, nicely formatted'],
    role: 'I built the whole app myself, including the secure connection to the AI.',
    stack: [['Next.js and TypeScript', 'Builds the site and runs the secure server part (Server Actions)'], ['Tailwind CSS', 'Styling the dark chat screen'], ['Gemini API', 'The AI model that writes the answers'], ['react-markdown', 'Shows AI replies neatly formatted']],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    github: 'https://github.com/ali-webcraft/ai-chat-app',
    shots: ['/screens/aichat.jpg'],
  },
  {
    title: 'Weather App',
    tag: 'Web app',
    status: 'Live',
    tagline: 'Check the current weather in any city, in one search.',
    overview: 'A simple, clean weather app. Type a city and instantly see the temperature and what it feels like, along with humidity and wind. If the city is not found, it tells you clearly instead of breaking.',
    features: ['Search any city in the world', 'Temperature, feels-like, humidity and wind speed', 'Clear message if a city cannot be found'],
    how: ['You type a city name and press search', 'The app asks a weather service for the latest data', 'The result is shown on a card, or a friendly error if something went wrong'],
    role: 'I designed and built the whole app myself.',
    stack: [['React', 'Builds the screen and handles your search'], ['OpenWeatherMap API', 'The service that provides live weather data'], ['CSS', 'The clean blue design'], ['Netlify', 'Hosts the app online']],
    tech: ['React', 'OpenWeatherMap API', 'CSS'],
    live: 'https://ali-webcraft-sky-pulse.netlify.app/',
    github: 'https://github.com/ali-webcraft/weather-app',
    shots: ['/screens/weather.jpg'],
  },
  {
    title: 'Movies Explorer',
    tag: 'Web app',
    status: 'Live',
    tagline: 'Browse TV shows and find something to watch.',
    overview: 'A TV show browser that makes it easy to discover what to watch. Search by name or pick a genre, and every show displays its rating, whether it is still running and when it first aired. It also has a dark and a light mode.',
    features: ['Search shows by name', 'Filter by genre with one click', 'See rating, status and premiere date on every show', 'Dark and light mode'],
    how: ['The app loads a list of TV shows', 'Search or genre buttons narrow the list instantly', 'The theme button switches between dark and light'],
    role: 'I designed and built the whole app myself.',
    stack: [['React', 'Builds the page and handles search, filters and theme'], ['Netlify', 'Hosts the app online']],
    tech: ['React'],
    live: 'https://movies-explorrer.netlify.app/',
    shots: ['/screens/movies.jpg'],
  },
  {
    title: 'Meme Generator',
    tag: 'Web app',
    status: 'Live',
    tagline: 'Create your own memes in seconds and download them.',
    overview: 'Pick a popular meme template, write your own text on it and download the finished image. No design skills or software needed.',
    features: ['A grid of popular meme templates', 'Add your own text to the image', 'Download the finished meme'],
    how: ['Choose a template from the grid', 'Type your text and add it to the image', 'Download your meme'],
    role: 'I designed and built the whole app myself.',
    stack: [['React', 'Builds the pages and handles your text'], ['Netlify', 'Hosts the app online']],
    tech: ['React'],
    live: 'https://meme-generator-112.netlify.app',
    shots: ['/screens/meme.jpg'],
  },
  {
    title: 'GitHub Profile Finder',
    tag: 'Web app',
    status: 'Live',
    tagline: 'Look up any GitHub user and see their profile at a glance.',
    overview: 'Type any GitHub username and get a clean profile card with their photo, short bio and follower numbers, plus a button to open the real profile. Useful for quickly checking a developer\'s profile.',
    features: ['Search by GitHub username', 'Profile card with photo and bio', 'Followers and following counts', 'One click to the real GitHub profile'],
    how: ['You enter a GitHub username', 'The app asks GitHub for that person\'s public information', 'A profile page opens with the card and a View Profile button'],
    role: 'I designed and built the whole app myself.',
    stack: [['React', 'Builds the pages and handles routing'], ['GitHub API', 'Provides the public profile information'], ['Netlify', 'Hosts the app online']],
    tech: ['React', 'GitHub API'],
    live: 'https://github-profille-finder.netlify.app/',
    github: 'https://github.com/ali-webcraft/github-profile-finder',
    shots: ['/screens/finder.jpg'],
  },
]
