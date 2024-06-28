import React from 'react'
import portfolioImage5 from '../../assets/demo.png'
import portfolioImage4 from '../../assets/pic1.png'
import portfolioImage1 from '../../assets/portfolio.png'
import portfolioImage3 from '../../assets/setup.png'
import './Protfolio.css'

const data = [
  {
    id: 1,
    image: portfolioImage3,
    title: " HR Management System",
    details:"Achieve unparalleled efficiency with our HR platform: manage unlimited job postings with advanced filters ensuring 95% candidate accuracy. Automate 90% of interview scheduling, confirmations, and reminders. Implement a 100% online attendance feature and staff management system. Employers benefit from comprehensive candidate profiles, accessing detailed resumes and personal information for thorough evaluation.",
    github: "https://github.com/Shruti2-0Thakur/HR",
    demo: "https://.com"

  },
  {
    id: 2,
    image: portfolioImage4,
    title: "Dream Square",
    details:"Experience interactive learning with our platform: course enrollment features drive a 25% surge in sign-ups, enabling personalized learning. We've implemented a 95% secure payment system with withdraw functionality, ensuring safe transactions. Our tailored blog section increases user satisfaction by 20% with engaging content. Seamless profiles and tools have reduced account management workload by 20%, easing administration.",
    github: "https://github.com/Shruti2-0Thakur/DreamSquare",
    demo: "https://.com"

  },
  {
    id: 3,
    image: portfolioImage5,
    title: "VTA (video to audio)",
    details:"Achieve a 40% increase in efficiency with our user-friendly platform for MP4 to MP3 conversion. Enable MP4 uploads and YouTube links, driving a 25% rise in user engagement. Experience 30% faster download speeds, enhancing overall user satisfaction.",
    github: "https://github.com/Shruti2-0Thakur/VTA",
    demo: "https://.com"

  },
  {
    id: 4,
    image: portfolioImage1,
    title: "Interactive Portfolio: API-Driven and Dynamic",
    details:"I'm transforming my portfolio into a dynamic API-based project using React for frontend, Node.js for backend, and MongoDB for the database. This showcases my ability in full-stack development and proficiency in the MERN stack, creating modern, responsive, interactive web apps with efficient data management and seamless user experiences.",
    github: "https://github.com/Shruti2-0Thakur/landing_page/settings/pages",
    demo: "https://.com"

  },
  // {
  //   id: 5,
  //   image: portfolioImage4,
  //   title: "cvbrtghyjkbnm,rtyhjklcvbnmrtyjkl",
  //   details:"dfcgh",
  //   github: "https://github.com/Shruti2-0Thakur/landing_page/settings/pages",
  //   demo: "https://.com"

  // },
  // {
  //   id: 6,
  //   image: portfolioImage5,
  //   title: "cvbrtghyjkbnm,rtyhjklcvbnmrtyjkl",
  //   details:"fghj",
  //   github: "https://github.com/Shruti2-0Thakur/landing_page/settings/pages",
  //   demo: "https://.com"

  // },
]
const Protfolio = () => {
  return (
    <section id='protfolio'>
       <h5>My recent work</h5>
      <h2>Project</h2>

      <div className=' portfolio_container'>
        {
          data.map(({id, image, title,details, github, demo}) => {
            return(
              <article key={id} className='port_item'>
                <div className='port_img'>
                <img src={image} alt={title}></img>
                </div>
                  <h3>{title}</h3>
                  <p>{details}</p>
                  <div className='port-cta'>
                  <a href={github} className='btn btn-primary'>GitHub</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                  </div>
              </article>

            )
          })
        }   
      </div>
    </section>
  )
}

export default Protfolio