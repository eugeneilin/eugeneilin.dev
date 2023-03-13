import contactAccess from '../assets/contact-access.jpeg';
import fairviewContainers from '../assets/fairview-containers.jpeg';
import passwordGenerator from '../assets/password-generator.jpeg';
import portfolio from '../assets/portfolio.jpeg';
import churchDirectory from '../assets/church-directory.jpeg';
import musiciansWebsite from '../assets/musicians-website.jpeg';
import rsvpForFamily from '../assets/rsvp-for-family.jpeg';
import favRecipes from '../assets/fav-recipes.jpeg';
import gitTheUsers from '../assets/git-the-users.jpeg';
import liyasBakery from '../assets/liyas-bakery.jpeg';
import liz from '../assets/photo-with-liz.jpeg';
import todo from '../assets/todo.jpeg';
import mufflerShop from '../assets/muffler-shop.jpeg';
import blCafe from '../assets/bagel-lovers-cafe.jpeg';
import valPro from '../assets/valpro.jpeg';
import vineyard from '../assets/vineyard.jpeg';
import kingJS from '../assets/king-javascript.jpeg';

export const ExperienceList = [
  {
    name: 'Dumpster Rentals',
    subtitle: 'Recently completed website for client',
    highlight: 'Modern design',
    image: fairviewContainers,
    code: 'https://github.com/eugeneilin/fairview-containers',
    demo: 'https://fairviewcontainersllc.com/',
    overview:
      'Modern business website featuring a polished design and user-friendly interface. Site creatively showcases the necessary information for potential customers to book services, using animations that activate as users scroll through the site. Additionally, the site includes various calls to action, along with a booking form that automatically alerts the business owner of any new reservations. Additional skills involved include article writing, page design, image editing, and graphic creation.',
    highlights: [
      'Design is completely original and employs semantic HTML, as well as the latest CSS with animations and transitions.',
      'Images have been optimized for quick loading',
      'Design has been thoroughly tested on various browsers to ensure compatibility.',
      "The website' form submissions are handled through Netlify, which redirects the user to a confirmation page.",
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },
  {
    name: 'Church Directory',
    highlight: 'Express and MongoDB',
    subtitle: 'This is an Express app',
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
      'devicon-npm-original-wordmark',
      'devicon-heroku-original',
    ],
  },
  {
    name: 'King JavaScript',
    highlight: 'E-Commerce',
    subtitle: 'Lion Art E-commerce Website',
    image: kingJS,
    code: 'https://github.com/eugeneilin/king-javascript',
    demo: 'https://king-javascript.eugeneilin.dev/',
    overview:
      "This website is an e-commerce platform developed using JavaScript. Users can explore a vast collection of wall art featuring majestic lions and add a sample piece of art to their shopping cart. The cart accurately displays the chosen item's quantity and total price, with the option to delete items or adjust the quantity as needed.",
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
  {
    name: 'Recipe Collection',
    highlight: 'React and Firebase',
    subtitle: 'WORK IN PROGRESS',
    image: favRecipes,
    code: 'https://github.com/eugeneilin/fav-recipes',
    demo: 'https://fav-recipes.eugeneilin.dev/',
    overview:
      'This is an app inspired by my lovely wife, whom I adore, and whose life I want to make easier and more automated with this app <3',
    highlights: [
      'The idea here is to dynamically serve recipe name, image, ingredients, directions, and tags info from Firebase.',
      'Working on setting up authorization and authentication to allow users to populate their own recipe collection.',
      "Additionally, I'd like to allow users to share recipes within the app.",
      'And another cool thing would be to suggest meals based on calorie count, last used, etc.',
    ],
    tools: ['devicon-react-original', 'devicon-firebase-plain', 'devicon-css3-plain'],
  },
  {
    name: 'Contact Access',
    highlight: 'MERN app',
    subtitle: 'MERN stack app',
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
      'devicon-npm-original-wordmark',
      'devicon-heroku-original',
    ],
  },
  {
    name: "'Git' The Users",
    highlight: 'React',
    subtitle: 'A website using Github API',
    image: gitTheUsers,
    code: 'https://github.com/eugeneilin/github-finder',
    demo: 'https://gitTheUsers.eugeneilin.dev/',
    overview:
      'In the search bar, you can search up any user from Github and see their name, profile pic, whether they are hireable or not, their last 5 repositories, and more. Really cool, check it out.',
    highlights: [
      "This was a fun project linking directly to Github's API.",
      'Components were dynamically displayed using React.',
    ],
    tools: ['devicon-react-original', 'devicon-github-original'],
  },
  {
    name: 'Password Generator',
    highlight: 'JavaScript and CSS',
    subtitle: 'Responsive JavaScript app',
    image: passwordGenerator,
    code: 'https://github.com/eugeneilin/password-generator',
    demo: 'https://www.eternalsecuritypasswords.com/',
    overview:
      'If you want a custom password made the way you want, try this website. Just check the right boxes, click "Generate", and copy the password.',
    highlights: ['Simple design', 'Latest JavaScript practices and use of higher-order functions'],
    tools: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain'],
  },
  {
    name: 'Muffler Shop',
    subtitle: 'Sample website for local shop',
    highlight: 'Modern design',
    image: mufflerShop,
    code: 'https://github.com/eugeneilin/muffler-shop',
    demo: 'https://mufflershop.eugeneilin.dev/',
    overview:
      "This sample website was built completely from scratch. You'll find here a very modern look with beautiful transitions, animations, and overlays. ",
    highlights: ['Intuitive UI/UX', 'Responsive design', 'CSS animations', 'Mobile-first'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },
  {
    name: 'RSVP Website',
    highlight: 'jQuery and Firebase',
    subtitle: 'Probably the very FIRST real-world website I built',
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
  {
    name: 'Bakery Website',
    highlight: 'Less',
    subtitle: 'A website using Less',
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
  {
    name: 'Photography Website',
    highlight: 'Simple design',
    subtitle: 'Designed completely from scratch',
    image: liz,
    code: 'https://github.com/eugeneilin/liz-website',
    demo: 'https://photowithliz.eugeneilin.dev/',
    overview:
      'Sample website showcasing new local photography services with a functional booking form.',
    highlights: [
      'Completely responsive',
      'CSS transitions and some JavaScript',
      'Working contact form  thrugh Netlify',
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },
  {
    name: 'Cafe Website',
    highlight: 'Sass, JavaScript, and Firebase',
    subtitle: 'A REMAKE of an outdated website',
    image: blCafe,
    code: 'https://github.com/eugeneilin/bagel-lovers-cafe',
    demo: 'https://bagelloverscafe.eugeneilin.dev/',
    overview:
      "This is a little cafe next door to where we used to live, that my wife and I absolutely loved. This is a redesign for their website, which was super outdated. Unfortunately, didn't finish this project, and we moved away, but this was a great learning experience.",
    highlights: [
      'This simple website is responsive, featuring different layouts for mobile and desktop',
      'Menu search filter implemented with JavaScript',
    ],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain',
      'devicon-sass-original',
      'devicon-firebase-plain',
    ],
  },
  {
    name: 'Todo list',
    highlight: 'JavaScript and Materialize',
    subtitle: 'Todo list app utilizing DOM manipulation',
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
  {
    name: 'Music Website',
    highlight: 'Sass and JavaScript',
    subtitle: 'A simple responsive website with integrations',
    image: musiciansWebsite,
    code: 'https://github.com/eugeneilin/eugeneilin.com',
    demo: 'https://eugeneilin.com/',
    overview:
      'I am also a bit of a musician. So this is a place where I can develop my online presence as a musician.',
    highlights: [
      'Here I wanted to take a step ahead and use Sass to create a more efficient stylesheet.',
      'This project taught me a lot about embedding 3rd party tools into code, like Spotify, Youtube, etc.',
    ],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-sass-original',
      'devicon-javascript-plain',
    ],
  },
  {
    name: 'Contractor Website',
    subtitle: 'Sample website for remodeling business',
    highlight: 'Clean design',
    image: valPro,
    code: 'https://github.com/eugeneilin/val-salagornik-business',
    demo: 'https://valproservices.eugeneilin.dev/',
    overview:
      'This sample website features a straight-forward design sharing the necessary information to guide potential client to the contact form.',
    highlights: ['Responsive design', 'CSS and JavaScript transitions'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },
  {
    name: 'Vineyard Email',
    subtitle: 'Email development',
    highlight: 'HTML Email Marketing',
    image: vineyard,
    code: 'https://github.com/eugeneilin/our-vineyard',
    demo: 'https://our-vineyard.eugeneilin.dev/',
    overview: 'This is an email with integrated images, perfectly responsive.',
    highlights: ['Knowledge of HTML tables', 'Inline CSS'],
    tools: ['devicon-html5-plain', 'devicon-css3-plain'],
  },
  {
    name: 'Personal Portfolio',
    highlight: 'React and Firebase',
    subtitle: 'My portfolio website',
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
];
