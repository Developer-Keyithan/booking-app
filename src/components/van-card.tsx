import { Calendar, Settings, Star, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Van {
    id: string;
    name: string;
    model: string;
    pricePerDay: number;
    capacity: number;
    images: string[];
    features: string[];
}

const VanCard = ({ van }: { van: Van }) => {
    return (
        <div key={van.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden min-h-[75vh]">
            <img
                src={van.images[0]}
                alt={van.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <div className='h-full'>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{van.name}</h2>
                            <p className="text-gray-600 mb-2">{van.model}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-blue-600">${van.pricePerDay}</p>
                            <p className="text-gray-600">per day</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span>{van.capacity} Seats</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            <span>Automatic</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span>2024 Model</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-blue-600" />
                            <span>4.9/5 Rating</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Features:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {van.features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full p-4">
                <Link
                    href={`/booking/${van.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Book Now
                </Link>
            </div>
        </div>
    )
}

export default VanCard