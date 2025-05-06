import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function ContactSection({ onSubmit })
{
    return (
        <div className="py-2">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have a question, project idea, or just want to say hello? We'd love to hear from you.
                        Fill out the form and we'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                            <Mail size={20} className="mr-4 mt-1 text-black" />
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-gray-600">kanishkapasindu6@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone size={20} className="mr-4 mt-1 text-black" />
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p className="text-gray-600">+94 XXXXXXXXX</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin size={20} className="mr-4 mt-1 text-black" />
                            <div>
                                <h3 className="font-medium">Location</h3>
                                <p className="text-gray-600">Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold mb-2">Feedback</h3>
                        <p className="text-gray-600 mb-4">
                            We value your feedback and are constantly striving to improve our services.
                            Let us know how we're doing or how we can better serve your needs.
                        </p>
                        <Button variant="outline">Leave Feedback</Button>
                    </div>
                </div>

                <div>
                    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your email" />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Subject of your message" />
                            </div>

                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message" rows={5} />
                            </div>

                            <div>
                                <Label htmlFor="service">Service you're interested in</Label>
                                <select
                                    id="service"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    <option value="">Select service</option>
                                    <option value="software">Software Development</option>
                                    <option value="portfolio">Custom Portfolio</option>
                                    <option value="assignment">Technical Assignment</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-black"
                                />
                                <Label htmlFor="consent" className="mb-0">
                                    I consent to being contacted regarding my inquiry
                                </Label>
                            </div>

                            <Button type="submit" className="w-full">Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}