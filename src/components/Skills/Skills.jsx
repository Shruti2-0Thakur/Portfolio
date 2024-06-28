import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import './Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What skills i have</h5>
      <h2>My Skills</h2>

      <div className='container experience_container'>
        <div className='expe_frontend'>
            <h3>Frontend Developmet</h3>
            <div className='exp_content'>
              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>JQuery</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'></small>
                </div>
              </article>

              
            </div>
        </div>
        <div className='expe_backend'>
        <h3>Backend Developmet</h3>
        <div className='exp_content'>
              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>Node.jS</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>Express.js</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'></small>
                </div>
              </article>

              
              
            </div>
        </div>

        <div className='expe_backend'>
        <h3>Programming Languages</h3>
        <div className='exp_content'>
              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'></small>
                </div>
              </article>

              <article className='exp_details'>
              <IoIosCheckmarkCircle className='exp_icons'/>
              <div>
                <h4>C/C++ Language</h4>
                <small className='text-light'></small>
                </div>
              </article>
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills