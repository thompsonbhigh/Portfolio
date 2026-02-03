import React from 'react'

const Projects = () => {
    return (
        <main class='about-main'>
            <div class="projects-flex">
                <div class="glass-card-project">
                    <a href='https://github.com/thompsonbhigh/Panda-Express-Web-App'>Panda Express Web App↗</a>
                        <p>
                            I designed and deployed a full-stack restaurant management web service using Node.js, Express.js, EJS, 
                            and PostgreSQL, with data hosted on AWS RDS. The system supports end-to-end restaurant operations through 
                            multiple dedicated views, including cashier, manager, kitchen, customer and menu displays.
                            <br/>
                            <br/>
                            Each view interfaces with a shared backend API, enabling real-time updates for orders, inventory, and pricing 
                            across the system. I led the backend development and database design, implementing core business logic and 
                            ensuring consistent data flow between services.
                            <br/>
                            <br/>
                            The project was developed using Agile Scrum practices and managed with Git for version control. Deployment and 
                            continuous integration were handled through Render CI/CD, allowing for reliable updates and rapid iteration.
                        </p>
                </div>

                <div class="glass-card-project">
                    <a href='https://github.com/thompsonbhigh/Point-of-Sales-Software'>Point-of-Sales Software↗</a>
                        <p>
                            I worked on a team-based cashier point-of-sale system built with Java and JavaFX, designed to be adaptable for 
                            use in any restaurant environment. The application follows MVC architecture and connects to a PostgreSQL database 
                            hosted on AWS RDS using JDBC and DAO patterns.
                            <br/>
                            <br/>
                            I was primarily responsible for implementing the cashier ordering workflow, including real-time order creation, 
                            item modification, and pricing logic. The system supports simultaneous orders, persistent data storage, and robust 
                            error handling. Additional functionality included a manager interface for employee management, menu and inventory 
                            updates, price changes, and sales analytics through generated graphs.
                        </p>
                </div>
                <div class="glass-card-project">
                    <a href='https://github.com/thompsonhigh/lockN'>lockN↗</a>
                        <p>
                            LockN is a full-stack web application designed to streamline fitness tracking and motivation. Developed with Node.js 
                            and Express.js, it allows users to create accounts, set personalized goals, add exercises, and build workout plans. 
                            The platform emphasizes user engagement through task tracking and competitive leaderboards.
                            <br/>
                            <br/>
                            At its core, LockN leverages PostgreSQL for robust data management, utilizing libraries like pg-promise for efficient 
                            database interactions. Frontend rendering is handled by EJS templates, styled with custom CSS for an intuitive user 
                            experience. Key features include dynamic goal monitoring, exercise logging, and real-time leaderboard updates.
                            <br/>
                            <br/>
                            This project highlights my expertise in modern JavaScript development, from backend API design to frontend templating. 
                            It involved challenges like implementing scalable database queries and responsive UI components, resulting in a deployable 
                            application on Render.
                        </p>
                </div>
            </div>
        </main>
    )
    }

export default Projects