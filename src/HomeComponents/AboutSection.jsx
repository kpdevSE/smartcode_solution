import
{
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CompanyHistory from '../assets/history.jpg'

export default function AboutSection()
{
    return (
        <div className="py-2">
            <h1 className="text-3xl font-bold mb-8">About Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded by Kanishka Pasindu Mudithananda and Lahiru Lakshan Liyanage, Zentrix was born
                        from a passion for creating exceptional software solutions that make a difference.
                    </p>
                    <p className="text-gray-600 mb-4">
                        With our combined expertise in software engineering and development, we've built a
                        reputation for delivering high-quality, tailored solutions that address our clients'
                        unique challenges and opportunities.
                    </p>
                    <p className="text-gray-600">
                        Today, we continue to innovate and push boundaries, helping businesses of all sizes
                        leverage technology to achieve their goals and stay ahead in a competitive landscape.
                    </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                    <img
                        src={CompanyHistory}
                        alt="Company History"
                        className="w-full lg:h-[400px] md:h-auto h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
                <div className="bg-gray-50 border-l-4 border-black p-6">
                    <p className="text-gray-700 italic">
                        "To empower businesses through innovative software solutions, delivering exceptional
                        value and enabling our clients to thrive in an ever-evolving digital world."
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Innovation",
                        description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions."
                    },
                    {
                        title: "Quality",
                        description: "We maintain the highest standards in code quality, performance, and user experience."
                    },
                    {
                        title: "Partnership",
                        description: "We build lasting relationships with our clients, becoming trusted technology advisors."
                    }
                ].map((value, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{value.title}</CardTitle>
                            <CardDescription className="mt-2">{value.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}