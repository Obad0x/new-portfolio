import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
      👋 Hey there! I'm an 18-year-old developer who's always on the lookout to build and ship exciting products. You'll find most of my quirky and experimental repositories public on GitHub, where I love to share my journey of learning and growth. 
      🚀 Currently, I'm passionately working on "Otakuhaven" - a project that holds a special place in my heart. 
      If you're curious to learn more about it, feel free to visit "otakuhavenhq" on Instagram for some sneak peeks and behind-the-scenes action! 💬 I'm all about collaboration and teamwork. 
      If you're interested in joining forces on a project or just want to chat about anything tech-related, 
      don't hesitate to slide into my DMs on Twitter. You can find me at @Obad0x. Let's create something awesome together! 🎉
  
      </div>
    </div>
  )
}
export default About;
