import React from 'react'

const About3 = () => {
  return (
    <main class="about-main">
        <div class="glass-flex">
            <div class="glass-card">
            <h2>Growing Interest</h2>
            <p>
                By seventh grade, my interest in computing had expanded beyond software to the inner workings
                of the machine itself. I wanted to understand what was happening beneath the surface, which led
                me to research computer hardware and ultimately build my own PC. After saving money and
                receiving several components as Christmas gifts, I spent an entire day assembling the system,
                troubleshooting issues, and diagnosing why certain parts were not functioning as expected.
                Through a combination of persistence, trial and error, and countless tutorials, I successfully built
                a fully functioning computer. That experience gave me a stronger appreciation for hardware
                architecture and system integration, and once I understood the physical foundation, I became
                even more motivated to explore how software interfaces with hardware to bring systems to life.
            </p>
            <div class="btn-flex">
                <a class="back-btn" href="/about2"><button>←Back</button></a>
                <a class="next-btn" href="/about4"><button>Next→</button></a>
            </div>
            </div>
        </div>
    </main>
  )
}

export default About3