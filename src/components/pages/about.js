import React from 'react';
import Me from '../../assets/myphoto1.jpeg'

export default function AboutMe() {
  return (
      <div>
          <h1>About Me</h1>
          <img src = {Me} width={175} height={375} alt ="Myphoto" className='mePhoto '></img>
          
          <p className=''> Hello my name is Vanessa Mendez and I'm an aspiring Full Stack Developer.
          Coding is complete career change for me, and I'm excited to practice everything I'm learning in a real world job setting.
          In my personal life, I have two small children that I love to do activities with such as traveling, arts and crafts, playing
          video games etc. I am also part of the salsa dancing community locally and help teach kids dance classes.
         
         </p>
        
      </div>
  )
}
