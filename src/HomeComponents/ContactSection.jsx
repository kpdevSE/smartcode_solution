import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button"
import wtsapp from '../assets/WhatsAppButtonGreenMedium.png'
import { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

const calculateRatingSummary = (reviews) =>
{
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total / reviews.length;

    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review =>
    {
        const roundedRating = Math.floor(review.rating);
        ratingCounts[roundedRating] += 1;
    });

    return {
        average: average.toFixed(1),
        totalReviews: reviews.length,
        ratingCounts: ratingCounts
    };
};

// Render star ratings
const RatingStars = ({ rating }) =>
{
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" size={20} />
            ))}
            {hasHalfStar && <StarHalf className="text-yellow-500 fill-yellow-500" size={20} />}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <Star key={`empty-${i}`} className="text-yellow-500" size={20} />
            ))}
        </div>
    );
};

export default function ContactSection({ onSubmit })
{

    const reviewsData = [
        {
            id: 1,
            name: "Manik Bandara",
            avatar: "/api/placeholder/40/40",
            rating: 5,
            date: "April 15, 2025",
            service: "Software Development",
            comment: "I had the pleasure of using the web application and I must say, it exceeded my expectations. The interface is clean, responsive, and very user-friendly. Everything works smoothly. It’s clear a lot of thought went into both design and functionality. Great job. Highly recommend!"
        },
        {
            id: 2,
            name: "Udana Pramod",
            avatar: "/api/placeholder/40/40",
            rating: 4.5,
            date: "March 28, 2025",
            service: "Software Development",
            comment: "I recently had the opportunity to use the web application, and I was thoroughly impressed by its quality and performance. The user interface is exceptionally well-designed—clean, intuitive, and highly responsive. Navigation is seamless, and all functionalities operate smoothly, reflecting a high level of technical precision and thoughtful planning. It is evident that considerable effort has been invested in both the aesthetic and functional aspects of the application. The attention to detail and user experience is commendable. I am confident in recommending this application to others seeking a professional, efficient, and user-friendly digital solution."
        },
        {
            id: 3,
            name: "Kanishka Pasindu ",
            avatar: "/api/placeholder/40/40",
            rating: 5,
            date: "March 10, 2025",
            service: "Custom Portfolio",
            comment: "I recently got my custom portfolio website built, and I couldn't be happier with the result! It's sleek, professional, and built using modern technologies like React, Tailwind CSS, and Next.js. The performance is top-notch, and the UI is clean and responsive across all devices. Thank you for bringing my vision to life! "
        },
        {
            id: 4,
            name: "Pansilu Rathnayake",
            avatar: "/api/placeholder/40/40",
            rating: 4,
            date: "February 22, 2025",
            service: "Software Development",
            comment: "I had the pleasure of using the custom portfolio website, and I must say, it exceeded all my expectations. The design is modern, clean, and fully responsive. Navigation is seamless, and the user interface is incredibly intuitive. Everything works flawlessly, and it's clear that great attention was paid to both aesthetics and functionality. Truly a professional-grade website. Highly recommend"
        },
        {
            id: 4,
            name: "Amasha Jayalath",
            avatar: "/api/placeholder/40/40",
            rating: 4,
            date: "February 22, 2025",
            service: "Software Development",
            comment: "The travel website is a comprehensive and user-friendly platform that provides everything you need to plan a perfect trip. From booking hotels to finding local attractions, transportation, and travel insurance, it offers a one-stop solution for travelers. The intuitive interface makes it easy to compare prices, read reviews, and customize itineraries based on personal preferences. Real-time updates on weather, travel advisories, and currency exchange rates add extra value. Whether you're planning a family vacation, business trip, or solo adventure, this website simplifies the process and ensures a smooth and enjoyable travel experience."
        },

    ];

    const [filter, setFilter] = useState('all');
    const ratingSummary = calculateRatingSummary(reviewsData);

    // Filter reviews based on selection
    const filteredReviews = filter === 'all'
        ? reviewsData
        : reviewsData.filter(review => review.service === filter);
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
                                <p className="text-gray-600">+94 715644565</p>
                                <a href="https://wa.me/+94715644565" target="_blank"> <img src={wtsapp} alt="wts app" className="mt-2 lg:w-[50%] h-auto md:w-[50%] w-[50%]" /></a>
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
                <div className="bg-white p-6 rounded-lg border border-gray-200 h-[700px] overflow-auto">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

                    {/* Rating Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex flex-col items-center mb-4 md:mb-0">
                                <div className="text-4xl font-bold">{ratingSummary.average}</div>
                                <RatingStars rating={parseFloat(ratingSummary.average)} />
                                <div className="text-gray-500 mt-1">Based on {ratingSummary.totalReviews} reviews</div>
                            </div>

                            <div className="w-full md:w-1/2">
                                {[5, 4, 3, 2, 1].map(num =>
                                {
                                    const count = ratingSummary.ratingCounts[num];
                                    const percentage = (count / ratingSummary.totalReviews) * 100;

                                    return (
                                        <div key={num} className="flex items-center mb-1">
                                            <div className="w-8 text-gray-600">{num}</div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                                                <div
                                                    className="bg-yellow-500 h-2 rounded-full"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                            <div className="w-8 text-gray-600 text-right">{count}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Filter Options */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            >
                                All Reviews
                            </button>
                            <button
                                onClick={() => setFilter('Software Development')}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'Software Development' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            >
                                Software Development
                            </button>
                            <button
                                onClick={() => setFilter('Custom Portfolio')}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'Custom Portfolio' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            >
                                Custom Portfolio
                            </button>
                            <button
                                onClick={() => setFilter('Technical Assignment')}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'Technical Assignment' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            >
                                Technical Assignment
                            </button>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="space-y-6">
                        {filteredReviews.map(review => (
                            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                                <div className="flex items-center mb-2">

                                    <div>
                                        <h3 className="font-medium">{review.name}</h3>
                                        {/* <div className="text-gray-500 text-sm">{review.date}</div> */}
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <RatingStars rating={review.rating} />
                                    <span className="ml-2 text-sm text-gray-600">{review.service}</span>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}