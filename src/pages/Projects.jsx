import React from 'react'

const Projects = () => {
    return (
        <main class='max-w-screen min-h-screen p-20 bg-[#493D9E]'>
        <br/>
        <br/>
        <br/>
        <a href='https://github.com/thompsonbhigh/Panda-Express-Web-App' class='text-4xl underline text-[#B2A5FF]'>Panda Express Web App</a>
            <p class='text-[#DAD2FF] pr-[50vh]'>
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
            <br/>
        <a href='https://github.com/thompsonbhigh/Point-of-Sales-Software' class='text-4xl underline text-[#B2A5FF]'>Point-of-Sales Software</a>
            <p class='text-[#DAD2FF] pr-[50vh]'>
                I worked on a team-based cashier point-of-sale system built with Java and JavaFX, designed to be adaptable for 
                use in any restaurant environment. The application follows MVC architecture and connects to a PostgreSQL database 
                hosted on AWS RDS using JDBC and DAO patterns.
                <br/>
                <br/>
                I was primarily responsible for implementing the cashier ordering workflow, including real-time order creation, 
                item modification, and pricing logic. The system supports simultaneous orders, persistent data storage, and robust 
                error handling. Additional functionality included a manager interface for employee management, menu and inventory 
                updates, price changes, and sales analytics through generated graphs.
                <br/>
                <br/>
                This project strengthened my experience in desktop application development, database design, and collaborative 
                software engineering.
            </p>
        </main>
    )
    }

export default Projects