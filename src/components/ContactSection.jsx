import { Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "../lib/utils"
import { useState } from "react"

export const ContactSection = () =>{


    const [isSubmitting, setIsSubmiting] = useState("flase")

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsSubmiting(true)
        setTimeout(() =>{
            setIsSubmiting(false)
        },1500)
    }

    return <section 
        id='contact'
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-3xl md:w-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary ">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center ">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email </h4>
                                    <a 
                                    href="mailto:bibakleris@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        bibakleris@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center ">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone </h4>
                                    <a 
                                    href="tel:+355694609873"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +355 69 460 9873
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center ">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location </h4>
                                    <a 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Tirana, Albania
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message

                            <form 
                            onSubmit={handleSubmit}
                            className="space-y-6">
                                <label className=" block text-sm font-medium mb-2"  htmlFor="name"> Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Kleris Biba"
                                />
                                <label className=" block text-sm font-medium mb-2"  htmlFor="email"> Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="xxx@gmail.com"
                                />
                                <label className=" block text-sm font-medium mb-2"  htmlFor="message"> Message</label>
                                <textarea
                                type="message" 
                                id="message" 
                                name="message" 
                                required 
                                className="w-full px-4 py-3 border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello I'd like to talk about ..."
                                />
                                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                    {isSubmitting ? "Sending...": "Send Message"}
                                    <Send size={16}/>
                                </button>
                            </form>
                        </h3>
                    </div>
                </div>
                
                

            </div>
    </section>
}