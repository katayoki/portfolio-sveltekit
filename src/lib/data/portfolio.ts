export const profile = {
  name: {
    first: 'John Jhed',
    middle: 'Raniel',
    last: 'Calumpang'
  },
  title: 'Web Developer',
  yearsOfExperience: 5,
  summary:
    'Enthusiastic web developer crafting user-centric web applications with modern technologies. Goal-oriented, driven, and passionate about programming and solving problems.',
  about:
    "I'm a web developer based in Quezon City, Philippines with 5 years of hands-on experience building full-stack web applications. I've worked across government systems, enterprise solutions, and client-facing products — always with a focus on clean code and great user experience.",
  contact: {
    phone: '+63927-892-3725',
    email: 'jjrcalumpang16@gmail.com',
    location: 'Novaliches, Quezon City, 1116'
  }
};

export const skills = [
  'Proficient in HTML5 and CSS3',
  'Experienced with various CSS frameworks',
  'Expert in JavaScript — frameworks & debugging',
  'Secure API development & backend systems',
  'WordPress theme development',
  'Laravel, VueJS, Bootstrap & modern stacks',
  'ASP.Net MVC, C#, MSSQL',
  'Full-stack development lifecycle'
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: (string | { text: string; sub: string[] })[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Lead Web Developer',
    company: 'Presidential Communications Office',
    period: 'May 2022 – July 2024',
    bullets: [
      'Led development and maintenance of the PCO and Official Gazette websites',
      {
        text: 'Implemented systems to improve departmental efficiency:',
        sub: [
          'News & Media Microsite — Streamlined content upload and management of presidential news, photos, and videos',
          'Digitization Systems — Automated employee data management and enrollment processes',
          'CMS Platform — Facilitated content creation, editing, and publishing for authorized personnel'
        ]
      },
      'Resolved technical issues and implemented application changes based on user feedback'
    ]
  },
  {
    role: 'Junior Web Developer',
    company: 'Chanz Global Business IT Solutions',
    period: 'May 2021 – April 2022',
    bullets: [
      'Maintained and enhanced various web applications for clients',
      'Delivered efficient technical solutions to client requests and addressed project challenges',
      'Collaborated with senior developers to expand knowledge base in web development best practices'
    ]
  },
  {
    role: 'System Developer',
    company: 'Software Farm International Inc.',
    period: 'Oct 2019 – April 2021',
    bullets: [
      'Developed and maintained a web-based accounting system (ASYST) using ASP.Net MVC, C#, and MSSQL',
      'Contributed to the full-stack development lifecycle — backend logic, database interactions, and UI design',
      'Performed unit and integration testing, ensuring software functionality and quality',
      'Demonstrated strong problem-solving skills through debugging and resolving technical challenges'
    ]
  }
];

export const education = {
  degree: "Bachelor's Degree in Information Technology",
  school: 'STI Novaliches',
  years: '2015 – 2019'
};
