import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackround } from "../components/StarBackround"
import { Navbar } from "../components/Navbar"

export const Home = () =>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackround />
            <Navbar/>
        </div>
    )
}
