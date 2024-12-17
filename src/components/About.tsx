import { Education } from "./Education";
import { Experience } from "./Experience";

const About = () => {
  const experiences = [
    {
      company: "Talentelgia Technologies Private Limited, Mohali, India",
      position: "Senior Software Engineer",
      period: "05/2023 – 11/2024",
      description: [
        'created and developed dynamic web applications using React.js for front-end and Laravel, Node.js and Nest.js with Express for back-end services, ensuring seamless user experiences and robust performance.'
      ],
      technologies: ["React","Laravel",'Redux','Node','Nest','Express','MySQL','Router','MongoDB','Prisma','Email Sevices','WebHooks','GIT']
    },
    {
      company: "Corepeelers private limited, Gurugram , India",
      position: "Senior Software Engineer",
      period: "03/2022 – 04/2023",
      description: [
        "Developed and maintained web applications using React.js and Node.js, ensuring high performance and responsiveness. Built mobile applications with React Native, enhancing user experience and increasing cross-platform compatibility."
      ],
      technologies: ["React", "Node", "MongoDB", "AWS",'GIT','React Native']
    },
    {
      company: "Quadrish Innovations Private Limited, Mohali, India",
      position: "Senior Laravel Developer",
      period: "07/2021 – 02/2022",
      description: [
        "Spearheaded the development of advanced web applications using Laravel and React js technologies Successfully managed remote work environment to deliver high-quality results on time." 
      ],
      technologies: ["React", "Laravel", "MYSQL", "AWS",'GIT']
    },
    {
      company: "Coronet Software Private Limited, Gurugram, India",
      position: "Junior Web Developer",
      period: "03/2019 – 06/2021",
      description: [
        "Developed and maintained websites using HTML, CSS, JavaScript, jQuery, PHP, and Laravel Collaborated with team members to ensure on-site functionality Transitioned seamlessly to remote work post-COVID restrictions." 
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery",'PHP','Laravel','MYSQL']
    },
    {
      company: "Embient creatives, Jalandhar, India",
      position: "Junior Web Developer",
      period: "10/2017 – 09/2018",
      description: [
        "Cultivated expertise in, HTML, CSS, JavaScript, jQuery, PHP and WordPress Contributed to on-site development projects with dedication." 
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery",'PHP','MYSQL','Bootstrap','WordPress']
    }
  ];
  const education = [
    {
      college: "Masters's in Computer Applications - MCA, Jalandhar, India",
      period: "06/2014 – 07/2017",
      description: [
        'Gained knowledge in software development, data structures. Developed proficiency in programming languages including C/C++, the SDLC, and Waterfall methodologies.'
      ],
      companyLogo :''
    },
    {
      college: "Bachelor's in Computer Applications - BCA, Jalandhar , India",
      period: "06/2011 – 05/2014",
      description: [
        "Participated in internships and real-world projects, applying academic knowledge to industry-standard tools and technologies"
      ],
      companyLogo :''
    },
  ];
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am an accomplished Full Stack Developer with a proven track record of building dynamic and scalable web applications. Combining expertise in modern front-end frameworks like React.js with robust back-end technologies such as Node.js and Laravel, I deliver seamless, user-focused digital solutions that address real-world challenges.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
          With over 6 years of experience across diverse projects, I have honed my skills in crafting efficient architectures, optimizing performance, and adhering to industry best practices. My passion lies in transforming complex requirements into accessible and impactful digital experiences.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Education</h3>
              <section>
            <Education education={education} />
          </section>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Experience</h3>
               <section>
            <Experience experiences={experiences} />
          </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;