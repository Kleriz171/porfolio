import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () =>{
    return (
    <section id="about" className="py-24 px-4">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Junior Full-Stack Developer</h3>
                    <p className="text-muted-foreground">
                        I run Webris, a small freelance web studio, where I've shipped production sites and apps
                        for real clients — from bilingual restaurant sites to a car-rental platform with a
                        concurrency-safe Postgres booking system and an owner admin panel.
                    </p>
                    <p className="text-muted-foreground">
                        Outside client work I build personal full-stack projects (MERN, Socket.io, WebRTC) and
                        compete in hackathons — currently looking for my first junior developer role.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/Kleris_Biba_CV_1.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">UI / UX Design</h4>
                                <p className="text-muted-foreground">
                                    Crafting clean, intuitive, and user-friendly interfaces that make applications easy and enjoyable to use.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Continuous Learning</h4>
                                <p className="text-muted-foreground">
                                    Always exploring new technologies, frameworks, and best practices to stay ahead in the fast-moving world of web development.
                                </p>
                            </div>                        
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
    )
}

