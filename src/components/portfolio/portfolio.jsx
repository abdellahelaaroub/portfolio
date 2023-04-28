import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projet-ensas-2.png'
import IMG2 from '../../assets/mine.png'
import IMG3 from '../../assets/ML.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : "[ On going ] Training agent to solve a real world problem using Python Gym with MDP, Q-Learning and deep learning",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  },
  {
    id : 2,
    image : IMG2,
    title : "[ On going ] Building a data analytics project for hight heterogeneous data from diffirent ressources (spark, powerBI, NLP)",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  },
  {
    id : 3,
    image : IMG3,
    title : "[ Done ] ML model generator : web site to make model from dataset with 0 knoledge of ML (Angular, Flsk, nodeJs)",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  },
  {
    id : 4,
    image : IMG4,
    title : "item will be completed soon..",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  },
  {
    id : 5,
    image : IMG5,
    title : "item will be completed soon..",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  },
  {
    id : 6,
    image : IMG6,
    title : "item will be completed soon..",
    github : "https://github.com/abdellahelaaroub",
    demo : "github.com/abdellahelaaroub"
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">        
        
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'> Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'> Live Demo</a>            
                </div>
              </article>
            )
          })
        }                          
      </div>
    </section>
  )
}

export default portfolio