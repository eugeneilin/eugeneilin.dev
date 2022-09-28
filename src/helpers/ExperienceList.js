import Project1 from '../assets/Project1.jpeg';
import Project2 from '../assets/Project2.jpeg';
import Project3 from '../assets/Project3.jpeg';
import Project4 from '../assets/Project4.jpeg';
import Project5 from '../assets/Project5.jpeg';

export const ExperienceList = [
  {
    name: 'Church Directory',
    highlight: 'Express and MongoDB',
    image: Project2,
    code: 'https://github.com/eugeneilin/church-directory',
    demo: 'https://enigmatic-island-99499.herokuapp.com/',
    overview:
      'Built with a modern and simple look, the main idea of this web app is to view churches as a list as well as plotted on a map. Each individual church is clickable and takes you to a new page with more detailed information. Only admins have the rights to add, edit, and delete data through the admin panel.',
    highlights: [
      'Web pages in this app are served through Express, with EJS to dynamically generate HTML.',
      'The database lives on MongoDB Atlas, and is connected through Mongoose.',
      'Latest Bootstrap was used to create a simple but intuitive layout and design.',
      'Client-side validation as well as schema validation before uploading to database are only a few highlights of this project, along with the use of cookies, session, and flash messages.',
      'Authentication is done through Passport, images are uploaded to and served from Cloudinary, and the dynamic cluster map is done with Mapbox.',
      'Security concerns have been addressed by sanitizing HTML with JOI, hiding sensitive information from errors, cookies, and sessions, as well as securing the app using Helmet HTTP headers.',
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
    name: 'Personal Portfolio',
    highlight: 'React and Firebase',
    image: Project1,
    code: 'https://github.com/eugeneilin/eugeneilin.dev',
    demo: 'https://eugeneilin.dev/',
    overview:
      'This is my online web development home. Here I showcase some of the many projects I built in my coding journey. I am humbled to list the array of skills I have acquired during the past years. They are a result of continual resolve and persistence, sometimes riding the wave of momentum and confidence, and other times plowing through difficult concepts with resilience and diligence. Here I list professional references: these are people that have known me professionally and in some instances have worked closely with me. You will also find professional contact links here, such as my LinkedIn and GitHub profiles, and you can always send a message directly through the contact form.',
    highlights: [
      'Built with my favorite library, React, this website is fast and completely responsive, designed with mobile users first in mind.',
      'The use of React Hooks has made this site very dynamic, and the reusable code from components made the heavy-lifting possible.',
      'Firebase integration has been an integral part of the back-end, keeping the contact form submissions safe and readily available.',
    ],
    tools: ['devicon-react-original', 'devicon-css3-plain', 'devicon-firebase-plain'],
  },
  {
    name: 'RSVP Website for Family',
    highlight: 'jQuery and Firebase',
    image: Project3,
    code: 'https://github.com/eugeneilin/pavel-and-anna',
    demo: 'https://pavelandanna.eugeneilin.dev/',
    overview:
      "This was the very first website I built, with only a few months of coding experience behind my back. The opportunity came up to create a simple website for my close family, allowing wedding guests to RSVP ahead of time. This website lifted up to 30% percent of the client's load, from the client's own words.",
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
    name: 'Music Artist Website',
    highlight: 'Sass and JS',
    image: Project4,
    code: 'https://github.com/eugeneilin/eugeneilin.com',
    demo: 'https://eugeneilin.com/',
    overview:
      'Finding another project to get hands-on experience with code didn\t take too long here. This is a website I built with a dream to grow my personal artist brand.',
    highlights: [
      'Here I wanted to take a step ahead and use Sass to create a more efficient stylesheet.',
      'This project taught me a lot about embedding 3rd party tools into code.',
    ],
    tools: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-sass-original',
      'devicon-nodejs-plain',
      'devicon-javascript-plain',
    ],
  },
  {
    name: 'RSVP Website',
    highlight: 'Cross Browser Compatibility',
    image: Project5,
    code: 'https://github.com/eugeneilin/wedding-website',
    demo: 'https://wedding-website.eugeneilin.dev/',
    overview:
      'This website is also one of the first. It looks simple but has some intricate designs that I spent time on and got experience in.',
    highlights: [
      'Because this design has very detailed aspects, this project is where I first got a sense of Cross-Browser Compatibility.',
      'The logo is designed purely in CSS, and so are the section frames.',
    ],
    tools: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
  },
];
