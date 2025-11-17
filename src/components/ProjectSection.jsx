const projects = [
    {
        id: 1,
        title: "Workout Buddy",
        description: "A full-stack fitness tracking and workout planning web application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to create an account, log in, and manage personalized workout routines through a clean and responsive interface.",
        image: "/projects/WorkoutBuddy",
        tags: ["React", "Node.js", "MongoDB", "CSS", "Javascript", "Fetch API" ,"Express" , ],
        githubURL: 'https://github.com/Kleriz171/fitnes-app-MERN',
        demoURL: "https://fitnes-app-mern-kqs5ilmcx-kleriz171s-projects.vercel.app/login" 
    },
    {
        id:2,
        description: "A blog web app built using node.js",
        image: "/projects/Project_2",
        tags:[ "Node.js", "MongoDB", "CSS", "Javascript", "Fetch API" ,"Express", ],
        githubURL:"https://github.com/Kleriz171/Node-crash-course",
        demoURL:"#"
    }
]
export const ProjectsSection = () =>{
    return(
        <section id="projects" className="py-24 px-4"></section>
    )
}