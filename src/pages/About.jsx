import React from 'react'

const About = () => {
  return (
    <main class='about-main'>
      <div class="glass-flex">
        <div class="glass-card">
            <h2>Hello, I'm <span>Thompson</span></h2>
            <p>
                I am a junior Computer Science student at Texas A&M
                University with a strong interest in software development and
                problem-solving. I am driven by a desire to understand
                systems at a fundamental level, from exploring hardware to
                designing and implementing clean and efficient code. I enjoy
                collaborating in team-based environments where ideas, technical
                skills, and perspectives come together to build effective solutions.
            </p>
            <div class="btn-flex">
                <a class="next-btn"  href="/about1"><button>Next→</button></a>
            </div>
        </div>
      </div>
    </main>
  )
}

export default About