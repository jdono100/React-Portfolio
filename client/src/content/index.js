const content = {
  navbar: {
    logo: 'Web Dev Portfolio π»',
    links: [
      { text: 'Projects', to: 'myProjects' },
      { text: 'About Me', to: 'aboutMe' },
      { text: 'Contact', to: 'myContact' },
    ],

  },
  header: {
    img: '/assets/headshot.png',
    text: ['Hello there!', 'My name is Jared Donovan.', 'I am a '],
    typical: [
      'full-stack web developer. π₯',
      2000,
      'UI/UX designer. π',
      2000,
      'database/API manager. π',
      2000,
      'lifelong tech nerd. πΆ',
      2000,
      'sports junkie. π',
      2000
    ],
    btnText: 'More About Me'
  },
  projects: {
    priceTracker: {
      images: ['/assets/tcgtracker-SC2.png', '/assets/tcgtracker-SC1.png', '/assets/tcgtracker-SC3.png', '/assets/tcgtracker-SC4.png'],
      title: 'TCG Price Tracker',
      description: 'An unofficial PokΓ©mon Trading Card Game card-search application that allows the user to save their favorite cards and keep track of their prices.',
      role: 'Front-end lead',
      technologies: 'HTML, CSS, JavaScript, jQuery, Materialize',
      github: 'https://github.com/Project01-TCG-Price-Tracker/TCG_Price_Tracker',
      deployed: 'https://project01-tcg-price-tracker.github.io/TCG_Price_Tracker/'
    },
    quizzard: {
      images: ['/assets/quizzard-SC1.png', '/assets/quizzard-SC2.png', '/assets/quizzard-SC3.png', '/assets/quizzard-SC4.png'],
      title: 'Quizzard',
      description: 'A MERN stack, progressive web app that allows users to create and take quizzes of their own design. Quizzes are sorted by popularity, and recent scores are displayed on the quiz page. Users can also search for quizzes by name, author, or tags.',
      role: 'Front-end lead',
      technologies: 'MongoDB, Express.js, React.js, Node.js, TailwindCSS, PopperJS',
      github: 'https://github.com/Quizzard-Dev/Quizzard',
      deployed: 'https://quizzardweb.herokuapp.com/'
    },
    calendae: {
      images: ['/assets/calendae-SC2.png', '/assets/calendae-SC1.png', '/assets/calendae-SC3.png', '/assets/calendae-SC4.png'],
      title: 'Calendae',
      description: 'A simple social media site for planning casual events easier. Users add events to the database and other viewers can see the details.',
      role: 'Lead designer',
      technologies: 'Handlebars.js, CSS, JavaScript, Node.js, Express, Bulma, MySQL, Sequelize',
      github: 'https://github.com/JTJ-Calendae/Calendae',
      deployed: 'https://tjj-calendae.herokuapp.com/'
    },
    techBlog: {
      images: ['/assets/techtalk-SC2.png', '/assets/techtalk-SC1.png', '/assets/techtalk-SC3.png', '/assets/techtalk-SC4.png'],
      title: 'Tech Talk',
      description: 'A tech blog site where users can log up to post tech-related posts and articles. Allows users to update or delete their posts, and the ability to leave comments on posts.',
      role: 'Lead designer/programmer',
      technologies: 'Handlebars.js, CSS, JavaScript, Node.js, Express, MySQL, Sequelize',
      github: 'https://github.com/jdono100/MVC_Tech-Blog',
      deployed: 'https://jd-tech-talk.herokuapp.com/'
    }
  },
  aboutMe: {
    image: '/assets/cats.png',
    paragraphs: [
      "If you haven't guessed already, my name is Jared Donovan and I'm a junior level full-stack web developer that currently resides in the Chicagoland area.",
      "I'm passionate for client-side design & functionality but have solid experience working with back-end databases and APIs.",
      "I recently graduated from Northwestern University's Full-Stack Web Development Boot Camp and the class equipped me with a firm understanding of the MERN stack.",
      "There are new technologies and languages I am learning every day and I continue to develop projects using an agile workflow.",
      "Some more fun stuff: I love sports, working out, going to the beach, playing games with friends,"
    ]
  },
  contact: {
    links: {
      linkedin: 'https://www.linkedin.com/in/jared-donovan/',
      github: 'https://github.com/jdono100',
      twitter: 'https://twitter.com/jaredonovan',
    },
    resume: '/Jared_Donovan_resume.pdf'
  },
}

export default content;
