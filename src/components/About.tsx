const About = () => {
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
              <ul className="space-y-2">
                <li>Masters's in Computer Applications - MCA</li>
                <li>Bachelor's in Computer Applications - BCA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Experience</h3>
              <ul className="space-y-2">
              <li>Senior software engineer at Talentelgia technologies Private Limited</li>
              <li>Senior software engineer at Corepeelers private limited </li>
              <li>Senior software engineer at Quadrish Innovations Private Limited </li>
              <li>Website Developer at CORONET SOFTWARE PRIVATE LIMITED </li>
              <li>Website Developer at Embient creatives </li>
              <li>Freelance Web Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;