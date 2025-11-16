import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
  // -----------------------
  // frontend
  // -----------------------
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "TailwindCSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Responsive Design", level: 80, category: "frontend" },
  { name: "UI/UX Basics", level: 90, category: "frontend" },
  { name: "Lucide React", level: 100, category: "frontend" },
  { name: "Fetch API / Axios", level: 90, category: "frontend" },
  { name: "React Hook Form", level: 80, category: "frontend" },
  { name: "React Router", level: 85, category: "frontend" },

  // -----------------------
  // backend
  // -----------------------
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 95, category: "backend" },
  { name: "REST API Development", level: 90, category: "backend" },
  { name: "Postman", level: 90, category: "backend" },

  // -----------------------
  // tools
  // -----------------------
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "npm / Node Basics", level: 95, category: "tools" },
  { name: "Chrome DevTools", level: 95, category: "tools" },
  { name: "ESLint / Prettier", level: 90, category: "tools" },
  { name: "GitHub Pages / Vercel Deployment", level: 85, category: "tools" },
  { name: "JSON / REST Standards", level: 95, category: "tools" }
];

const category = ["all", "frontend","backend","tools"]


export const SkillsSection = () =>{
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => skill.category === activeCategory || activeCategory === "all")
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    MY <span className="text-primary">skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {category.map((category, key)=>(
                        <button 
                        key={key} 
                        onClick={()=>setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory ===category ? "bg-primary text-2xl text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skilll,key)=>(
                    <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skilll.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out]" 
                            style={{width: skilll.level +"%"}}
                            />
                        </div>
                        <div className="text-right mt-1 ">
                            <span className="text-sm text-muted-foreground">
                                {skilll.level}%
                            </span>

                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )



}