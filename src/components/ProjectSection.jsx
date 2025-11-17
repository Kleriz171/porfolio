import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Workout Buddy",
        description: "A full-stack fitness tracking and workout planning web application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to create an account, log in, and manage personalized workout routines through a clean and responsive interface.",
        image: "/projects/WorkoutBuddy.png",
        tags: ["React", "Node.js", "MongoDB", "CSS", "Javascript", "Fetch API" ,"Express" , ],
        githubURL: 'https://github.com/Kleriz171/fitnes-app-MERN',
        demoURL: "https://fitnes-app-mern-kqs5ilmcx-kleriz171s-projects.vercel.app/login" 
    },
    {
        id:2,
        description: "A blog web app built using node.js",
        image: "/projects/Project_2.png",
        tags:[ "Node.js", "MongoDB", "CSS", "Javascript", "Fetch API" ,"Express", ],
        githubURL:"https://github.com/Kleriz171/Node-crash-course",
        demoURL:"#"
    }
]

export const ProjectsSection = () =>{

    return(
        <section id="projects" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center  text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I build responsive web apps with interactive features, leveraging React, Node.js, Express, and MongoDB to create seamless full-stack experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary font-medium">{tag}</span>
                                    ))}

                                </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoURL} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target=" "
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubURL}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target=" "
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                    target=" "
                    href="https://github.com/Kleriz171"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}