import pageTurners from '../assets/page-turners.jpeg';
import pokedex from '../assets/pokedex.jpeg';
import reactTypecart from '../assets/react-typecart.jpeg';
import reactRecall from '../assets/react-recall.jpeg';
import sunnySide from '../assets/sunny-side.jpeg';
import kenKen from '../assets/ken-ken.jpeg';
import fairviewContainers from '../assets/fairview-containers.jpeg';
import kingJS from '../assets/king-javascript.jpeg';
import churchDirectory from '../assets/church-directory.jpeg';
import passwordGenerator from '../assets/password-generator.jpeg';
import contactAccess from '../assets/contact-access.jpeg';
import gitTheUsers from '../assets/git-the-users.jpeg';
import valPro from '../assets/valpro.jpeg';
import liyasBakery from '../assets/liyas-bakery.jpeg';
import mufflerShop from '../assets/muffler-shop.jpeg';
import liz from '../assets/photo-with-liz.jpeg';
import edgeLedger from '../assets/edge-ledger.jpeg';
import loanCalculator from '../assets/loan-calculator.jpeg';
import todo from '../assets/todo.jpeg';
import designerPortfolio from '../assets/designer-portfolio.jpeg';
import newsGrid from '../assets/news-grid.jpeg';
import knowledgeResume from '../assets/knowledge-resume.jpeg';
import navigationEffects from '../assets/navigation-effects.jpeg';
import presentation from '../assets/presentation.jpeg';
import hotelBT from '../assets/hotel-bt.jpeg';
import rsvpForFamily from '../assets/rsvp-for-family.jpeg';
import piano from '../assets/piano.jpeg';
import vineyard from '../assets/vineyard.jpeg';
import blog from '../assets/blog.jpeg';
import rsvp from '../assets/rsvp.jpeg';
import tempVerter from '../assets/temp-verter.jpeg';
import digiClock from '../assets/digi-clock.jpeg';
import portfolio from '../assets/portfolio.jpeg';
// import favRecipes from '../assets/fav-recipes.jpeg';
// import musiciansWebsite from '../assets/musicians-website.jpeg';

export const ExperienceList = [
  // Page Turners Library
  {
    slug: 'page-turners-library',
    name: 'PageTurners Library',
    highlight: 'TypeScript and CSS',
    subtitle: 'Library management app',
    tag: 'TrueCoders',
    image: pageTurners,
    code: 'https://github.com/eugeneilin/page-turners-library',
    demo: 'https://page-turners-library.eugeneilin.dev/',
    overview:
      "This app has been refactored to TypeScript (initially built with JavaScript). This is an interactive library management application that enables users to add, delete, and mark books as read. The app is designed with a user-friendly interface, where the form to add books is placed conveniently below the table displaying the list of books added. Newly added functionality includes app's ability to recommend books to user.",
    highlights: [
      'Converted to TypeScript from JavaScript',
      'Modern and intuitive UI',
      'CSS transitions',
    ],
    tools: [
      'devicon-typescript-plain',
      'devicon-css3-plain',
      'devicon-html5-plain',
      'devicon-javascript-plain',
    ],
  },

  // Pokedex
  {
    slug: 'pokedex-advanced-search',
    name: 'Pokedex Advanced Search',
    subtitle: 'Search for Pokemon using API',
    highlight: 'Fetch API, React, and Bootstrap',
    tag: 'TrueCoders',
    image: pokedex,
    code: 'https://github.com/eugeneilin/pokedex',
    demo: 'https://pokedex.eugeneilin.dev/',
    overview:
      'This is a responsive React app that allows users to search for Pokemon by name or filter by type and weakness. This search app was built with user experience in mind, and features instant results as you type, messages to help user if no results are found, and a clear button to clear the search.',
    highlights: [
      'React hooks are used to manage state and lifecycle methods.',
      'React Bootstrap components are used to display the fetched Pokemon data.',
      'CSS animations and transitions are sprinkled throughout the app to make it more user-friendly.',
      'And as always, the app is responsive and works well across all devices.',
    ],
    tools: ['devicon-react-original', 'devicon-bootstrap-plain'],
  },

  // Chef's Magic Pens
  {
    slug: 'chefs-magic-pens',
    name: "Chef's Magic Pens",
    subtitle: 'E-commerce store',
    highlight: 'React and TypeScript',
    tag: '',
    image: reactTypecart,
    code: 'https://github.com/eugeneilin/reactful-typecart',
    demo: 'https://reactful-typecart.eugeneilin.dev/',
    overview:
      'E-commerce store listing inventory and allowing users to add items to cart. Once items are added to cart, user can add, subtract, or remove items. Upon refreshing the page, cart items are saved and displayed. The app is built with a modern, user-friendly interface, and works well across all devices.',
    highlights: [
      'React hooks and custom hooks are used to manage state and lifecycle methods.',
      'Items are saved to and retrieved from Local Storage.',
      'TypeScript is used to ensure type safety and prevent bugs.',
      'React Bootstrap components are used to create a simple but intuitive layout and design.',
    ],
    tools: ['devicon-react-original', 'devicon-typescript-plain', 'devicon-bootstrap-plain'],
  },

  // Memory Game
  {
    slug: 'memory-game',
    name: 'Memory Game',
    subtitle: 'React app',
    highlight: 'React and CSS',
    tag: 'TrueCoders',
    image: reactRecall,
    code: 'https://github.com/eugeneilin/react-recall',
    demo: 'https://react-recall.eugeneilin.dev/',
    overview:
      "This responsive React app is built with a modern, user-friendly interface. Player's score is shown on the top and is saved to Local Storage. When game is over, player can choose to play again or reset the game.",
    highlights: ['React Props and state', 'Local storage'],
    tools: ['devicon-react-original', 'devicon-css3-plain'],
  },

  // Sunny Side Weather
  {
    slug: 'sunny-side-weather',
    name: 'Sunny Side Weather',
    subtitle: 'JavaScript weather app',
    highlight: 'Fetch API and JS',
    tag: 'TrueCoders',
    image: sunnySide,
    code: 'https://github.com/eugeneilin/sunny-side-weather',
    demo: 'https://sunny-side-weather.eugeneilin.dev/',
    overview:
      'Interactive weather app fetching current weather data from openweathermap.org and displaying it to the user. User can save certain cities to favorites and get current data when they click on re-run. User can also toggle between Celsius and Fahrenheit.',
    highlights: ['Fetch API calls', 'Background color changes based on temperature', 'CSS Flexbox'],
    tools: ['devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // KenKen Game
  {
    slug: 'kenken-game',
    name: 'KenKen Game',
    subtitle: 'CSS Grid and FlexBox',
    highlight: 'CSS Grid and FlexBox',
    tag: 'TrueCoders',
    image: kenKen,
    code: 'https://github.com/eugeneilin/CSS-KenKen',
    demo: 'https://ken-ken.eugeneilin.dev/',
    overview: 'This is a KenKen challenge in the browser.',
    highlights: ['CSS Grid and FlexBox', 'Responsive design'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Fairview Containers
  {
    slug: 'fairview-containers',
    name: 'Fairview Containers',
    subtitle: 'Dumpster rentals client website',
    highlight: 'Client website',
    tag: 'Client',
    image: fairviewContainers,
    code: 'https://github.com/eugeneilin/fairview-containers',
    demo: 'https://fairviewcontainersllc.com/',
    overview:
      'Modern business website featuring a polished design and user-friendly interface. Site creatively showcases the necessary information for potential customers to book services, using animations that activate as users scroll through the site. Additionally, the site includes various calls to action, along with a booking form that automatically alerts the business owner of any new reservations. Additional skills involved include article writing, page design, image editing, and graphic creation.',
    highlights: [
      'Design is completely original and employs semantic HTML, as well as the latest CSS with animations and transitions.',
      'Images have been optimized for quick loading',
      'Design has been thoroughly tested on various browsers to ensure compatibility.',
      "The website's form submissions are handled through Netlify, which redirects the user to a confirmation page.",
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // King JavaScript
  {
    slug: 'king-javascript',
    name: 'King JavaScript',
    highlight: 'E-Commerce UI',
    subtitle: 'Lion Art E-commerce UI',
    tag: '',
    image: kingJS,
    code: 'https://github.com/eugeneilin/king-javascript',
    demo: 'https://king-javascript.eugeneilin.dev/',
    overview:
      "This website is an e-commerce platform developed using JavaScript. Users can explore a vast collection of wall art featuring majestic lions and add a sample piece of art to their shopping cart. The cart accurately displays the chosen item's quantity and total price, with the option to delete items or adjust the quantity as needed.",
    // eslint-disable-next-line
    highlights: [
      'Object-oriented programming, separating functionality into distinct classes, making it more modular and easier to maintain.',
      'DOM manimpulation, dynamically generating HTML elements in response to user interactions, particularly from event listeners',
      "Local storage, ensuring that the user's cart remains updated even after reloading the page",
      'JSON data, fetched and displayed in the UI',
      'Mobile-first responsive design, built with CSS Grid and FlexBox, producing a clean UI and an intuitive UX.',
      ,
    ],
    tools: ['devicon-javascript-plain', 'devicon-css3-plain', 'devicon-html5-plain'],
  },

  // Church Directory
  {
    slug: 'church-directory',
    name: 'Church Directory',
    highlight: 'Express and MongoDB',
    subtitle: 'This is an Express app',
    tag: '',
    image: churchDirectory,
    code: 'https://github.com/eugeneilin/church-directory',
    demo: 'https://enigmatic-island-99499.herokuapp.com/',
    overview:
      'This primary purpose of this application is to display a list of churches and show their locations on a map. Each church on the list is clickable, leading to a new page with more information. The cluster map is an interactive feature that automatically updates itself based on the data provided from each church. Only administrators have permission to add, modify, and delete data using the admin panel.',
    highlights: [
      'Web pages in this app are served through Express, with EJS to dynamically generate HTML.',
      'The database lives on MongoDB Atlas, and is connected through Mongoose.',
      'Latest Bootstrap was used to create a simple but intuitive layout and design.',
      'Client-side validation as well as schema validation before uploading to database are only a few highlights of this project, along with the use of cookies, session, and flash messages.',
      'Authentication is done through Passport, images are uploaded to and served from Cloudinary, and the dynamic cluster map is done with Mapbox.',
      'Security concerns have been addressed by preventing Mongo injection, sanitizing HTML with JOI, hiding sensitive information from errors, cookies, and sessions, as well as securing the app using Helmet HTTP headers.',
    ],
    tools: [
      'devicon-express-original',
      'devicon-bootstrap-plain',
      'devicon-mongodb-plain',
      'devicon-nodejs-plain',
    ],
  },

  // Eternal Security
  {
    slug: 'eternal-security',
    name: 'Eternal Security',
    highlight: 'JavaScript and CSS',
    subtitle: 'Responsive JavaScript app',
    tag: '',
    image: passwordGenerator,
    code: 'https://github.com/eugeneilin/password-generator',
    demo: 'https://www.eternalsecuritypasswords.com/',
    overview:
      'If you want a custom password made the way you want, try this website. Just check the right boxes, click "Generate", and copy the password.',
    highlights: ['Simple design', 'Latest JavaScript practices and use of higher-order functions'],
    tools: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Contact Access
  {
    slug: 'contact-access',
    name: 'Contact Access',
    highlight: 'MERN app',
    subtitle: 'MERN stack app',
    tag: '',
    image: contactAccess,
    code: 'https://github.com/eugeneilin/contact-access',
    demo: 'https://contact-access-real.herokuapp.com/',
    overview:
      'This is a full-stack MERN application for storing contact information. Users create an account, then are able to add, view, edit, and delete their contacts. Users are only able to access their own contacts. Just create an account and enjoy :)',
    highlights: [
      'Express API dynamically serving our routes.',
      'Users and contacts are stored on MongoDB Atlas.',
      'Authentication is done using JSON Web Tokens.',
    ],
    tools: [
      'devicon-react-original',
      'devicon-express-original',
      'devicon-mongodb-plain',
      'devicon-nodejs-plain',
    ],
  },

  // Git The Users
  {
    slug: 'git-the-users',
    name: "'Git' The Users",
    highlight: 'React',
    subtitle: 'A website using Github API',
    tag: '',
    image: gitTheUsers,
    code: 'https://github.com/eugeneilin/github-finder',
    demo: 'https://gitTheUsers.eugeneilin.dev/',
    overview:
      'In the search bar, you can search up any user from Github and see their name, profile pic, whether they are hireable or not, their last 5 repositories, and more. Really cool, check it out.',
    highlights: [
      "This was a fun project linking directly to Github's API.",
      'Components were dynamically displayed using React.',
    ],
    tools: ['devicon-react-original'],
  },

  // Val Pro Services
  {
    slug: 'val-pro-services',
    name: 'Val Pro Services',
    subtitle: 'Sample website for remodeling business',
    highlight: 'CSS Grid and FlexBox',
    tag: '',
    image: valPro,
    code: 'https://github.com/eugeneilin/val-salagornik-business',
    demo: 'https://valproservices.eugeneilin.dev/',
    overview:
      'This sample website features a straight-forward design sharing the necessary information to guide potential client to the contact form.',
    highlights: ['Responsive design', 'CSS and JavaScript transitions'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Bakery Website
  {
    slug: 'bakery-website',
    name: 'Bakery Website',
    highlight: 'Less',
    subtitle: 'A website using Less',
    tag: '',
    image: liyasBakery,
    code: 'https://github.com/eugeneilin/wifeys-website',
    demo: 'https://wifeys-business.eugeneilin.dev/',
    overview: 'Food ordering website for a local bakery, attempting to setup a macaroon business.',
    highlights: [
      'This was a fun little experience learning Less.',
      'The contact form works through Netlify, notifying owner of new order.',
    ],
    tools: ['devicon-html5-plain', 'devicon-less-plain-wordmark'],
  },

  // Muffler Shop
  {
    slug: 'muffler-shop',
    name: 'Muffler Shop',
    subtitle: 'Sample website for local shop',
    highlight: 'Modern design',
    tag: '',
    image: mufflerShop,
    code: 'https://github.com/eugeneilin/muffler-shop',
    demo: 'https://mufflershop.eugeneilin.dev/',
    overview:
      "This sample website was built completely from scratch. You'll find here a very modern look with beautiful transitions, animations, and overlays. ",
    highlights: ['Intuitive UI/UX', 'Responsive design', 'CSS animations', 'Mobile-first'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Photography Website
  {
    slug: 'photography-website',
    name: 'Photography Website',
    highlight: 'CSS FlexBox',
    subtitle: 'Designed completely from scratch',
    tag: '',
    image: liz,
    code: 'https://github.com/eugeneilin/liz-website',
    demo: 'https://photowithliz.eugeneilin.dev/',
    overview:
      'Sample website showcasing new local photography services with a functional booking form.',
    highlights: [
      'Completely responsive',
      'CSS transitions and some JavaScript',
      'Working contact form  through Netlify',
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Edge Ledger
  {
    slug: 'edge-ledger',
    name: 'Edge Ledger',
    highlight: 'CSS Grid and FlexBox',
    subtitle: 'Business website',
    tag: '',
    image: edgeLedger,
    code: 'https://github.com/eugeneilin/edgeledger',
    demo: 'https://edgeledger.eugeneilin.dev/',
    overview:
      'Responsive business website, featuring business services, leadership, latest blog posts, and more. Separate pages for blog posts, with a contact form.',
    highlights: [
      'Custom CSS, utilizing borth CSS Grid and FlexBox',
      'jQuery smooth scrolling effect',
      'JavaScript for navigation effects',
      'PHP for contact form',
    ],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-jquery-plain',
      'devicon-php-plain',
    ],
  },

  // Loan Calculator
  {
    slug: 'loan-calculator',
    name: 'Loan Calculator',
    highlight: 'JavaScript and Bootstrap',
    subtitle: 'JavaScript loan calculator',
    tag: '',
    image: loanCalculator,
    code: 'https://github.com/eugeneilin/loan-calculator',
    demo: 'https://loan-calculator.eugeneilin.dev/',
    overview:
      'A simple loan calculator app in the browser, where user can calculate monthly payments.',
    highlights: ['User interface built with Bootstrap', 'New tasks are stored in local storage'],
    tools: ['devicon-html5-plain', 'devicon-javascript-plain', 'devicon-bootstrap-plain'],
  },

  // Todo List
  {
    slug: 'todo-list',
    name: 'Todo list',
    highlight: 'JavaScript and Materialize',
    subtitle: 'Todo list app utilizing DOM manipulation',
    tag: '',
    image: todo,
    code: 'https://github.com/eugeneilin/todo-app',
    demo: 'https://todo-app.eugeneilin.dev/',
    overview: 'A todo list app in the browser, where user can add/delete and complete tasks.',
    highlights: [
      'Design built with Materialize',
      'New tasks are stored in local storage',
      'JavaScript DOM manipulation',
    ],
    tools: ['devicon-html5-plain', 'devicon-javascript-plain'],
  },

  // Designer Portfolio
  {
    slug: 'designer-portfolio',
    name: 'Designer Portfolio',
    subtitle: 'Example of a portfolio website',
    highlight: 'CSS Grid',
    tag: '',
    image: designerPortfolio,
    code: 'https://github.com/eugeneilin/portfolio-website',
    demo: 'https://portfolio-website.eugeneilin.dev/',
    overview:
      'Clean and modern portfolio website for a designer, featuring a responsive design and a grid of projects. ',
    highlights: ['CSS Grid and FlexBox', 'Typewriter effect using JavaScript'],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-sass-original',
    ],
  },

  // News Grid
  {
    slug: 'news-grid',
    name: 'NewsGrid',
    subtitle: 'News website',
    highlight: 'CSS Grid',
    tag: '',
    image: newsGrid,
    code: 'https://github.com/eugeneilin/newsgrid',
    demo: 'https://newsgrid.eugeneilin.dev/',
    overview:
      'This is a sample news website, featuring a section for top news, as well as articles.',
    highlights: ['Thorough implementation of CSS Grid', 'Netlify form integration'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Knowledge Resume
  {
    slug: 'knowledge-resume',
    name: 'Knowledge Resume',
    subtitle: 'Timeline scroll-through',
    highlight: 'CSS and JavaScript',
    tag: '',
    image: knowledgeResume,
    code: 'https://github.com/eugeneilin/knowledge-resume',
    demo: 'https://knowledge-resume.eugeneilin.dev/',
    overview: 'This is a website displaying skills as they are scrolled into the viewport.',
    highlights: ['CSS transitions', 'JavaScript event listeners'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Animated Navigation
  {
    slug: 'animated-navigation',
    name: 'Animated Navigation',
    subtitle: 'Navigation with overlay effects',
    highlight: 'CSS',
    tag: '',
    image: navigationEffects,
    code: 'https://github.com/eugeneilin/hamburger-overlay-menu',
    demo: 'https://hamburger-overlay-menu.eugeneilin.dev/',
    overview:
      'Responsive navigation overlay component using CSS FlexBox and transitions (no JavaScript).',
    highlights: ['CSS FlexBox', 'CSS transitions'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Presentation Website
  {
    slug: 'presentation-website',
    name: 'Presentation Website',
    subtitle: 'Presentation website with animations',
    highlight: 'CSS',
    tag: '',
    image: presentation,
    code: 'https://github.com/eugeneilin/presentation-website',
    demo: 'https://presentation-website.eugeneilin.dev/',
    overview:
      'This is a website for presenting a project. It has animations and transitions between slides.',
    highlights: ['CSS Floats', 'CSS animations and transitions'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Hotel BT
  {
    slug: 'hotel-bt',
    name: 'Hotel BT',
    subtitle: 'Business website',
    highlight: 'CSS Floats',
    tag: '',
    image: hotelBT,
    code: 'https://github.com/eugeneilin/hotel-website',
    demo: 'https://hotelbt.eugeneilin.dev/',
    overview: '3-page website for a hotel business.',
    highlights: ['CSS Floats', 'Responsive design'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // RSVP Website
  {
    slug: 'rsvp-website',
    name: 'RSVP Website',
    highlight: 'jQuery and Firebase',
    subtitle: 'Probably the very FIRST real-world website I built',
    tag: 'Client',
    image: rsvpForFamily,
    code: 'https://github.com/eugeneilin/pavel-and-anna',
    demo: 'https://pavelandanna.eugeneilin.dev/',
    overview:
      "I built this with only a few months of coding experience behind my back. The opportunity came up to create a simple website for my close family, allowing wedding guests to RSVP ahead of time. This website lifted up to 30% percent of the client's load, from the client's own words.",
    highlights: [
      "This simple website is responsive, featuring different layouts for mobile and desktop, designed according to the client's own tastes and wishes.",
      'Animations and special effects have been added using jQuery.',
      'Even with very little coding experience at the time, I was eager to learn about and expand into the back-end, pushing RSVP data to Firebase Realtime Database.',
    ],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-jquery-plain',
      'devicon-firebase-plain',
    ],
  },

  // Piano Email
  {
    slug: 'piano-email',
    name: 'Piano Email',
    subtitle: 'Email development',
    highlight: 'HTML Email Marketing',
    tag: '',
    image: piano,
    code: 'https://piano-lessons.eugeneilin.dev/',
    demo: 'https://github.com/eugeneilin/piano-lessons',
    overview: 'Marketing email responsive for all devices.',
    highlights: ['Knowledge of HTML tables', 'Inline CSS'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Vineyard Email
  {
    slug: 'vineyard-email',
    name: 'Vineyard Email',
    subtitle: 'Email development',
    highlight: 'HTML Email Marketing',
    tag: '',
    image: vineyard,
    code: 'https://github.com/eugeneilin/our-vineyard',
    demo: 'https://our-vineyard.eugeneilin.dev/',
    overview: 'This is an email with integrated images, perfectly responsive.',
    highlights: ['Knowledge of HTML tables', 'Inline CSS'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // Blog It
  {
    slug: 'blog-it',
    name: 'Blog It',
    highlight: 'CSS',
    subtitle: 'Blog site',
    tag: '',
    image: blog,
    code: 'https://github.com/eugeneilin/blog',
    demo: 'https://blog.eugeneilin.dev/',
    overview: 'This is a simple blog site, with a few posts.',
    highlights: ['CSS Floats'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },

  // RSVP Site
  {
    slug: 'rsvp-site',
    name: 'RSVP Site',
    highlight: 'JS and Firebase',
    subtitle: 'Informational website with RSVP form',
    tag: '',
    image: rsvp,
    code: 'https://github.com/eugeneilin/wedding-website',
    demo: 'https://wedding-website.eugeneilin.dev/',
    overview: 'One page website with a simple RSVP form.',
    highlights: ['Responsive design', 'custom CSS and jQuery', 'Firebase integration'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Temp Verter
  {
    slug: 'temp-verter',
    name: 'Temp Verter',
    highlight: 'JavaScript',
    subtitle: 'Temperature converter',
    tag: '',
    image: tempVerter,
    code: 'https://github.com/eugeneilin/temperature-converter',
    demo: 'https://temp-verter.eugeneilin.dev/',
    overview:
      'This app provides a simple and interactive way for users to convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    highlights: ['Event listeners', 'DOM manipulation', 'Math functions'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Digi Clock
  {
    slug: 'digi-clock',
    name: 'Digi Clock',
    highlight: 'JavaScript',
    subtitle: 'One of my very first projects',
    tag: '',
    image: digiClock,
    code: 'https://github.com/eugeneilin/digital-clock',
    demo: 'https://digi-clock.eugeneilin.dev/',
    overview:
      'This is a simple digital clock showing military time. Depending on the time of day, the logo will be switched out for a custom greeting.',
    highlights: [
      'Callback functions to update the time every second',
      'DOM manipulation with JavaScript',
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },

  // Personal Portfolio
  {
    slug: 'personal-portfolio',
    name: 'Personal Portfolio',
    highlight: 'React and Firebase',
    subtitle: 'My portfolio website',
    tag: '',
    image: portfolio,
    code: 'https://github.com/eugeneilin/eugeneilin.dev',
    demo: 'https://eugeneilin.dev/',
    overview: 'This is a little about the website you are on right now.',
    highlights: [
      'Built with my favorite library, React, this website is fast and completely responsive, designed with mobile users first in mind.',
      'The use of React Hooks has made this site very dynamic, and the reusable code from components made the heavy-lifting possible.',
      'Firebase integration has been an integral part of the back-end, keeping the contact form submissions safe and readily available.',
    ],
    tools: ['devicon-react-original', 'devicon-css3-plain', 'devicon-firebase-plain'],
  },

  // {
  //   slug: 'recipe-collection',
  //   name: 'Recipe Collection',
  //   highlight: 'React and Firebase',
  //   subtitle: 'WORK IN PROGRESS',
  //   tag: '',
  // image: favRecipes,
  //   code: 'https://github.com/eugeneilin/fav-recipes',
  //   demo: 'https://fav-recipes.eugeneilin.dev/',
  //   overview:
  //     'This is an app inspired by my lovely wife, whom I adore, and whose life I want to make easier and more automated with this app <3',
  //   highlights: [
  //     'The idea here is to dynamically serve recipe name, image, ingredients, directions, and tags info from Firebase.',
  //     'Working on setting up authorization and authentication to allow users to populate their own recipe collection.',
  //     "Additionally, I'd like to allow users to share recipes within the app.",
  //     'And another cool thing would be to suggest meals based on calorie count, last used, etc.',
  //   ],
  //   tools: ['devicon-react-original', 'devicon-firebase-plain', 'devicon-css3-plain'],

  // },

  // {
  //   slug: 'music-website',
  //   name: 'Music Website',
  //   highlight: 'Sass and JavaScript',
  //   subtitle: 'A simple responsive website with integrations',
  //   tag: '',
  //   image: musiciansWebsite,
  //   code: 'https://github.com/eugeneilin/eugeneilin.com',
  //   demo: 'https://eugeneilin.com/',
  //   overview:
  //     'I am also a bit of a musician. So this is a place where I can develop my online presence as a musician.',
  //   highlights: [
  //     'Here I wanted to take a step ahead and use Sass to create a more efficient stylesheet.',
  //     'This project taught me a lot about embedding 3rd party tools into code, like Spotify, Youtube, etc.',
  //   ],
  //   tools: [
  //     'devicon-html5-plain',
  //     'devicon-css3-plain',
  //     'devicon-sass-original',
  //     'devicon-javascript-plain',
  //   ],

  // },
];
