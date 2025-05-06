import
{
    Card,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react";
import Lahiru from '../assets/lahiru.jpg'
import Pasindu from '../assets/pasindu.jpeg'


export default function TeamSection()
{
    // Team Members
    const teamMembers = [
        {
            name: "Kanishka Pasindu Mudithananda",
            role: "CEO & Founder",
            position: "Fullstack Software Engineer,Web Developer",
            bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
            email: "kanishkapasindu6@gmail.com",
            image: Pasindu
        },
        {
            name: "Lahiru Lakshan Liyanage",
            role: "Co-Founder",
            position: "Frontend Developer,UI/UX Designer",
            bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
            email: "lahirufirst1@gmail.com",
            image: Lahiru
        }
    ];
    return (
        <div className="py-2">
            <h1 className="text-3xl font-bold mb-8">Our Team</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:col-span-2 p-6">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600 mb-4">{member.role}</p>
                                <h2 className="text-md font-semibold">{member.position}</h2>
                                <p className="text-gray-700 mb-4 mt-4">{member.bio}</p>
                                <div className="flex items-center">
                                    <Mail size={16} className="mr-2 text-gray-600" />
                                    <span className="text-gray-600">{member.email}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    We're always looking for talented individuals to join our growing team. If you're passionate about
                    technology and innovation, we'd love to hear from you.
                </p>
                <Button>Comming Soon</Button>
            </div>
        </div>
    )
}