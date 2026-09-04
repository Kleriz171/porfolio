import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Triada Estetic Center",
        description: "Bilingual showcase site for a Tirana beauty salon with a 12k+ Instagram following, built to turn that audience into WhatsApp bookings. Editorial-luxe design across hair, makeup, nails and esthetics pages, statically rendered with full technical SEO — live on its own domain.",
        image: "/projects/triada.jpg",
        tags: ["Next.js", "TypeScript", "next-intl", "Tailwind", "SEO", "Vercel"],
        githubURL: "https://github.com/Kleriz171/triada-saloon-web",
        demoURL: "https://triadaestetic.com"
    },
    {
        id: 2,
        title: "Webris — Agency Site",
        description: "The site behind the client work: a dark, motion-led Albanian-language site for my own web studio, covering services, process, pricing and a live project showcase. Next.js 16 monorepo with a shared UI package, Framer Motion transitions and Lenis smooth scroll.",
        image: "/projects/webris.jpg",
        tags: ["Next.js 16", "TypeScript", "Framer Motion", "Lenis", "Tailwind", "Monorepo"],
        githubURL: "https://github.com/Kleriz171",
        demoURL: "https://webris-web.vercel.app"
    },
    {
        id: 3,
        title: "V.E Rental Car",
        description: "Bilingual car-rental platform for a Tirana operator with a concurrency-safe booking system — a Postgres exclusion constraint guarantees no double-booking even under simultaneous requests. Includes a full owner admin panel: fleet CRUD with photo uploads, a booking queue, and a drag-to-blackout calendar.",
        image: "/projects/ve-rental.jpg",
        tags: ["Next.js", "TypeScript", "Postgres", "Drizzle ORM", "Tailwind", "Vercel"],
        githubURL: "https://github.com/Kleriz171",
        demoURL: "https://ve-rental.com"
    },
    {
        id: 4,
        title: "Haxhiaj's House",
        description: "Italian-Albanian grill restaurant site with a cinematic dark design and direct WhatsApp / Wolt delivery integration. Real menu sourced from the client's own listing, dish photography upscaled from low-resolution phone shots to presentable quality.",
        image: "/projects/haxhiaj-house.jpg",
        tags: ["Next.js", "next-intl", "Tailwind", "Vercel"],
        githubURL: "https://github.com/Kleriz171/Haxhiaj-s-house-website",
        demoURL: "https://haxhiajs-house-web.vercel.app"
    },
    {
        id: 5,
        title: "Boka Traditional Restaurant",
        description: "Bilingual restaurant site built end-to-end in two days — full 98-item menu transcribed from a printed poster, a low-res logo rebuilt into a clean emblem, and a \"candlelit supper-house\" visual redesign with Google-reviews social proof.",
        image: "/projects/boka.jpg",
        tags: ["Next.js", "next-intl", "Tailwind", "SEO"],
        githubURL: "https://github.com/Kleriz171/Boka-Traditional-Restaurant-web",
        demoURL: "#"
    },
    {
        id: 6,
        title: "BarberBook",
        description: "Bilingual barber-shop booking app with a real Postgres backend and a password-gated owner dashboard. Built with a partial unique index to prevent double-booked slots, plus a fully offline local dev mode with no cloud dependency.",
        image: "/projects/barberbook.jpg",
        tags: ["Next.js", "Postgres", "Drizzle ORM", "Zod", "Vitest"],
        githubURL: "https://github.com/Kleriz171/barberbook",
        demoURL: "https://barberbook-rho.vercel.app"
    },
    {
        id: 7,
        title: "Vitalis — Emergency Coordination Platform",
        description: "Real-time platform coordinating medical emergencies, blood and medicine logistics, and teleconsultations. A TypeScript monorepo with a desktop operator portal, a mobile PWA, and an Expo React Native app sharing one Socket.io + MongoDB API.",
        image: "/projects/vitalis.jpg",
        tags: ["React", "TypeScript", "Socket.io", "MongoDB", "WebRTC", "Mapbox"],
        githubURL: "https://github.com/Kleriz171/Vitalis",
        demoURL: "#"
    },
    {
        id: 8,
        title: "Workout Buddy",
        description: "A full-stack fitness tracking and workout planning web application built using the MERN stack (MongoDB, Express, React, Node.js). Users create an account, log in, and manage personalized workout routines through a clean, responsive interface.",
        image: "/projects/workout-buddy.jpg",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        githubURL: "https://github.com/Kleriz171/fitnes-app-MERN",
        demoURL: "https://fitnes-app-mern-kqs5ilmcx-kleriz171s-projects.vercel.app/login"
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
                    Real client work delivered end-to-end under Webris, alongside personal full-stack builds — React, Next.js, Node.js, and Postgres.
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
