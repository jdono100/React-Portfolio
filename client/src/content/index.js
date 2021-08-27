const content = {
  navbar: {
    logo: 'Jared Donovan',
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
      'full-stack web developer. 🖥',
      2000,
      'UI/UX designer. 🎆',
      2000,
      'database/API manager. 🗄',
      2000,
      'lifelong tech nerd. 🕶',
      2000,
      'sports junkie. 🏈',
      2000
    ],
    btnText: 'More About Me'
  },
  projects: {
    priceTracker: {
      images: ['/assets/tcgtracker-SC1.png', '/assets/tcgtracker-SC2.png', '/assets/tcgtracker-SC3.png', '/assets/tcgtracker-SC4.png'],
      title: 'TCG Price Tracker',
      description: 'A Pokémon Trading Card Game card-search application that allows the user to save their favorite cards and keep track of their prices.',
      role: 'Front-end lead',
      technologies: 'HTML, CSS, JavaScript, jQuery, Materialize',
      github: '',
      deployed: ''
    },
    calendae: {
      images: ['/assets/calendae-SC1.png', '/assets/calendae-SC2.png', '/assets/calendae-SC3.png', '/assets/calendae-SC4.png'],
      title: 'Calendae',
      description: 'A simple social media site for planning casual events easier. Users add events to the database and other viewers can see the details.',
      role: 'Lead designer',
      technologies: 'Handlebars.js, CSS, JavaScript, Node.js, Express, Bulma, mySQL, Sequelize',
      github: '',
      deployed: ''
    },
    techBlog: {
      images: ['/assets/techtalk-SC1.png', '/assets/techtalk-SC2.png', '/assets/techtalk-SC3.png', '/assets/techtalk-SC4.png'],
      title: 'Tech Talk',
      description: 'A tech blog site where users can log up to post tech-related posts and articles. Allows users to update or delete their posts, and the ability to leave comments on posts.',
      role: 'Lead designer/programmer',
      technologies: 'Handlebars.js, CSS, JavaScript, Node.js, Express, mySQL, Sequelize',
      github: '',
      deployed: ''
    }
  },
  aboutMe: {

  },
  contact: {

  },
}

export default content;
