import React from 'react';
import { Calendar, Users, Settings, Star } from 'lucide-react';
import Link from 'next/link';
import VanCard from '@/components/van-card';

const vans = [
    {
        id: '1',
        name: 'Luxury Van 1',
        model: 'Toyota HiAce VIP',
        capacity: 8,
        pricePerDay: 150,
        features: ['Air Conditioning', 'Leather Seats', 'WiFi', 'Entertainment System'],
        images: [
            'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        ],
        available: true,
    },
    {
        id: '2',
        name: 'Luxury Van 2',
        model: 'Mercedes-Benz Sprinter',
        capacity: 10,
        pricePerDay: 200,
        features: ['Air Conditioning', 'Leather Seats', 'WiFi', 'Mini Fridge', 'Entertainment System'],
        images: [
            'https://images.unsplash.com/photo-1545171709-595640d74d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        ],
        available: true,
    },
];

function Vans() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Our Premium Vans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vans.map((van) => (
                    <VanCard key={van.id} van={van} />
                ))}
            </div>
        </div>
    );
}

export default Vans;