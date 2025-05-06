import
{
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function HomeSection()
{
    return (
        <div className="py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Building <span className="text-black">Innovative</span> Software Solutions
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        We specialize in custom software development, creating tailored solutions
                        to help businesses thrive in the digital landscape.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="flex items-center">
                            Our Services <ArrowRight className="ml-2" size={16} />
                        </Button>
                        <Button variant="outline" className="flex items-center">
                            View Projects <ArrowRight className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                    <img
                        src="/api/placeholder/600/400"
                        alt="Software Development"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Software Development",
                            description: "Custom software solutions tailored to your business needs and goals."
                        },
                        {
                            title: "Custom Portfolios",
                            description: "Showcase your work with beautifully designed and functional portfolios."
                        },
                        {
                            title: "Technical Assignments",
                            description: "Expert assistance with complex technical projects and assignments."
                        }
                    ].map((service, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription className="mt-2">{service.description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="ghost" className="text-sm flex items-center p-0">
                                    Learn more <ChevronRight size={16} className="ml-1" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}