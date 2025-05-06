import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"




export default function ProjectDetailSection({ project, onBack })
{
    const {
        id,
        title,
        description,
        image,
        category,
        technologies,
        keyFeatures,
        projectDetails
    } = project;

    return (
        <div className="py-2">
            <div className="mb-6">
                <Button variant="outline" onClick={onBack} className="flex items-center">
                    <ArrowRight className="mr-2 transform rotate-180" size={16} />
                    Back to Projects
                </Button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="aspect-video">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge>{category}</Badge>
                        <span className="text-gray-500">Project ID: {id}</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-8">{description}</p>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="border rounded-lg p-4">
                                <h3 className="font-medium text-gray-900">Client</h3>
                                <p className="text-gray-600">{projectDetails.clientName}</p>
                            </div>
                            <div className="border rounded-lg p-4">
                                <h3 className="font-medium text-gray-900">Duration</h3>
                                <p className="text-gray-600">{projectDetails.duration}</p>
                            </div>
                            <div className="border rounded-lg p-4">
                                <h3 className="font-medium text-gray-900">Team Size</h3>
                                <p className="text-gray-600">{projectDetails.teamSize} Developers</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className=" text-gray-900 mb-2 font-semibold">Challenge :-</h3>
                            <p className="text-gray-600">{projectDetails.challenge}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Solution :-</h3>
                            <p className="text-gray-600">{projectDetails.solution}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Outcome :-</h3>
                            <p className="text-gray-600">{projectDetails.outcome}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                        <ul className="space-y-2">
                            {keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <ChevronRight size={18} className="mr-2 mt-1 text-black flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Alert className="lg:w-[50%] md:w-[75%] w-[100%]">
                        <AlertTitle>Interested in a similar solution?</AlertTitle>
                        <AlertDescription>
                            We can build a customized version of this project tailored to your specific business needs.
                        </AlertDescription>
                        <Button className="w-[140px]">Contact Us</Button>
                    </Alert>
                </div>
            </div>
        </div>
    )
}