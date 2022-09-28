import SFursov from '../assets/S-Fursov.jpeg';
import BYurkin from '../assets/B-Yurkin.jpeg';
import ProfilePic from '../assets/no-profile-picture-icon.webp';

export const ReferenceList = [
  {
    id: 1,
    defaultChecked: true, // fix
    name: 'Slavik Fursov',
    position: 'Software Engineer',
    company: 'Oracle',
    image: SFursov,
    recommendation:
      'I recommend Eugene for the position of Web Developer. I know Eugene as a very responsible, energetic and dependable person. He is a quick learner and shows great leadership skills. As a Software Engineer for Oracle CX Marketing myself, I know anyone would be thrilled to have Eugene on their team.',
    linkedIn: 'https://www.linkedin.com/in/slavikf/',
    companyUrl: 'https://www.oracle.com/',
  },
  {
    id: 2,
    defaultChecked: false, // fix
    name: 'Stepan Misiruk',
    position: 'Senior Test Automation Engineer',
    company: 'Accenture',
    image: ProfilePic,
    recommendation:
      'Eugene comes with my highest recommendations. He is always looking for new ideas to assist and develop the relationship between the teams. He dives deep into the problems to understand them and comes up with the most optimized and elegant solution. He has the technical knowledge to successfully comply with the tasks assigned, I would recommend him if you want to have a team member that will add value to your project.',
    linkedIn: 'https://www.linkedin.com/in/stepan-misiruk/',
    companyUrl: 'https://www.accenture.com/us-en',
  },
  {
    id: 3,
    defaultChecked: false, // fix
    name: 'Ben Yurkin',
    position: 'Test Engineering Manager',
    company: 'Accenture',
    image: BYurkin,
    recommendation:
      'Eugene is a highly motivated, hard-working individual who possesses a solid reputation for honesty and great dedication in both his personal and professional dealings. He is very dependable and responsible, always bringing to the table the highest level of knowledge, expertise, and excellence, that simply inspires trust. I confidently recommend him for any position or undertaking that he chooses to pursue and truly believe that we will be a good asset to any organization.',
    linkedIn: 'https://www.linkedin.com/in/ben-yurkin/',
    companyUrl: 'https://www.accenture.com/us-en',
  },
];
