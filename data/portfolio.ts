const about = {
  name: 'Shashwat',
  fullName: 'Shashwat Kadam',
  role: '',
  company: '',
  description: [
  ` — a full-stack developer 💻 who enjoys crafting intuitive web 
  experiences 🌐 and exploring problem-solving through DSA 🧠.
  `,
  ],
  resume: '/documents/CV.pdf',
  social: {
    github: 'https://github.com/Shashwat3467'
  },
  greetingEmoji: '👋',
}

const projects = [
  {
    thumbnail: '/images/Talksy.png',
    name: 'Chat-app/Talksy',
    description: [
      `A real-time chat web application built using WebSockets for seamless, bi-directional communication.`,
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'WebSocket' ],
    sourceCode: 'https://github.com/Shashwat3467/Chat-App-Talksy',
    livePreview: 'https://www.linkedin.com/posts/shashwat-kadam-4ba852258_talksy-chatapp-realtime-activity-7342071316658683904-J2ff?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD98RU4BXuSSwGiG0P_mjeciarvsXbefjmY',
  },
  {
    thumbnail: '/images/cloudburst.png',
    name: 'Cloud-burst prediction system',
    description: [
      `Cloudburst Prediction System — a tech-driven tool to forecast extreme rainfall events and support early warnings.`,
    ],
    stack: ['pandas', 'python', 'matplotlib', 'scikit-learn','Jupyter Notebook'],
    livePreview: 'https://cloudburst-prediction-system.streamlit.app/',
    sourceCode: 'https://github.com/Shashwat3467/Cloudburst-Prediction-System'
  },
  {
    thumbnail: '/images/employee.png',
    name: 'Employee management system',
    description: [
      `This Employee Management System is a full-stack web application which provides CRUD (Create, Read, Update, Delete) primary operations to efficiently manage employee data. 
      `,
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    livePreview: 'https://www.linkedin.com/posts/shashwat-kadam-4ba852258_webapp-nodejs-mongodb-activity-7343550938743197696-hCPF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD98RU4BXuSSwGiG0P_mjeciarvsXbefjmY',
    sourceCode: 'https://github.com/Shashwat3467/employee-management'
  },
  {
    thumbnail: '/images/authentication.png',
    name: 'Authentication System',
    description: [
      'A secure user authentication system developed to handle login and signup functionality.It includes features like password hashing, form validation, and session management to ensure user data protection and access control.',
    ],
    stack: [ 'MongoDB', 'Express','bcrypt'],
    livePreview:'https://www.linkedin.com/posts/shashwat-kadam-4ba852258_webdevelopment-nodejs-mongodb-activity-7342065675802161155-Eikb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD98RU4BXuSSwGiG0P_mjeciarvsXbefjmY',
    sourceCode: 'https://github.com/Shashwat3467/Authentication-system'
  },
  {
    thumbnail: '/images/Portfolio.png',
    name: 'Portfolio',
    description: [
      `A personal portfolio website showcasing my projects, skills, and experience .`,
    ],
    stack: [
      'Next.js',
      'TypeScript',
    ],
    sourceCode: 'https://github.com/Shashwat3467/Portfolio',
    livePreview: 'https://myportfolio-xi-gilt.vercel.app/',
  }
]

const skills = [
  'TypeScript',
  'Express JS',
  'Node JS',
  'React JS',
  'Git',
  'MySQL',
  'MongoDB',
  'Github',
  'Java',
  'HTML',
  'CSS'
]

const contact = {
      email: 'shashwatkadam11@gmail.com',
    }
    
    const contacts = [
      {
        name: 'Email',
        link: 'mailto:shashwatkadam11@gmail.com',
        icon: 'fas fa-envelope',
      },
      {
        name: 'WhatsApp',
        link: 'https://wa.me/918446031604', 
        icon: 'fab fa-whatsapp',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/Shashwat3467', // Replace with your actual GitHub username
        icon: 'fab fa-github',
      }
    ]

export { about, projects, skills, contact, contacts }