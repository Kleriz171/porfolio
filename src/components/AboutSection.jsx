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
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                    <p className="text-muted-foreground">
                        Dedicated to building real-world projects and improving my full-stack skills.
                    </p>
                    <p className="text-muted-foreground">
                        Actively seeking opportunities to grow as a developer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/Kleris_Biba.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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

