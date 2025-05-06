import
{
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import wtsapp from '../assets/WhatsAppButtonGreenMedium.png'

import
{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ChevronRight } from "lucide-react"


export default function ServiceSection()
{
    return (
        <div className="py-2">
            <h1 className="text-3xl font-bold mb-8">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        title: "Software Development",
                        description: "End-to-end development of custom software applications tailored to your business requirements.",
                        features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
                    },
                    {
                        title: "Technical Assignments",
                        description: "Expert assistance with complex technical projects and specialized assignments.",
                        features: ["Algorithm Implementation", "System Architecture", "Performance Optimization", "Technical Documentation"]
                    },
                    {
                        title: "Custom Portfolios",
                        description: "Showcase your work with beautifully designed and functional portfolio websites.",
                        features: ["Responsive Design", "Interactive Galleries", "Content Management", "SEO Optimization"]
                    }
                ].map((service, index) => (
                    <Card key={index} className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription className="mt-2">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <h4 className="font-medium mb-2">What we offer:</h4>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <ChevronRight size={16} className="mr-2 text-black" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="w-full">Learn More</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Learn More About packages</DialogTitle>
                                        <DialogDescription>
                                            Contact us using WhatsApp to know about full details of packages
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <a href="https://wa.me/+94715644565" target="_blank"> <img src={wtsapp} alt="wts app" className="mt-2 lg:w-[75%] mx-auto h-auto md:w-[75%] w-[1005]" /></a>
                                    </div>

                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Development Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        {
                            step: "1",
                            title: "Discovery",
                            description: "We work with you to understand your business goals and requirements."
                        },
                        {
                            step: "2",
                            title: "Planning",
                            description: "We create a detailed roadmap and technical specification for your project."
                        },
                        {
                            step: "3",
                            title: "Development",
                            description: "Our team builds your solution using agile methodologies and best practices."
                        },
                        {
                            step: "4",
                            title: "Delivery & Support",
                            description: "We deploy your solution and provide ongoing maintenance and support."
                        }
                    ].map((process, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4">
                            <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                                {process.step}
                            </div>
                            <h3 className="font-semibold mb-2">{process.title}</h3>
                            <p className="text-gray-600 text-sm">{process.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}