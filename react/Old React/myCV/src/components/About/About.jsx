import React from 'react'

const About = ({hero}) => {
  const {aboutMe} = hero
  return (
    <div>
    <h3>About Me</h3>
      <div className='aboutMe card'>
      {aboutMe.map((item) => {
        return (
          <div key = {JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default About