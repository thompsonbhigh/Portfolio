import React from 'react'

const About2 = () => {
  return (
    <main class="about-main">
        <div class="glass-flex">
            <div class="glass-card">
            <h2>First Time Coding</h2>
            <p>
                In fourth grade, the class culminated in a final project where we had
                to program a robot to help address an accessibility challenge. My group
                chose to design a robot that could turn on a light switch when someone 
                entered a room, assisting individuals who might not be able to reach it 
                themselves. This was my first time working with code beyond a visual 
                interface, and it made programming feel tangible and impactful. That 
                project played a big role in growing my interest in coding.
            </p>
            <div class="btn-flex">
                <a class="back-btn" href="/about1"><button>←Back</button></a>
                <a class="next-btn" href="/about3"><button>Next→</button></a>
            </div>
            </div>
        </div>
    </main>
  )
}

export default About2