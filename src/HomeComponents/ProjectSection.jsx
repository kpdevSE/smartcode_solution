import
{
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";



export default function ProjectSection({ projects, selectedCategory, setSelectedCategory, onProjectClick })
{


    const categories = ["All", "Software Development", "Custom Portfolio", "Technical Assignments"];

    return (
        <div className="py-2">
            <h1 className="text-3xl font-bold mb-8">Our Projects</h1>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === category
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <Card key={project.id} className="overflow-hidden">
                        <div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                                <Badge>{project.category}</Badge>
                            </div>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="mt-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button
                                onClick={() => onProjectClick(project)}
                                className="w-full flex items-center justify-center"
                            >
                                View Details <ArrowRight className="ml-2" size={16} />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}