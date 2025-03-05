"use client"

import { Calendar, MapPin, Route, Shield } from "lucide-react";

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="text-center p-6 rounded-lg bg-white shadow-sm">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}


const Features = () => {
    return (
        <div id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<MapPin className="w-8 h-8 text-blue-600" />}
                        title="Strategic Location"
                        description="Based in Vavuniya for easy access to all of Sri Lanka's attractions"
                    />
                    <FeatureCard
                        icon={<Calendar className="w-8 h-8 text-blue-600" />}
                        title="Flexible Booking"
                        description="Choose from various duration options to suit your travel needs"
                    />
                    <FeatureCard
                        icon={<Route className="w-8 h-8 text-blue-600" />}
                        title="Live Tracking"
                        description="Track your van's location in real-time for peace of mind"
                    />
                    <FeatureCard
                        icon={<Shield className="w-8 h-8 text-blue-600" />}
                        title="Secure Booking"
                        description="Safe and secure online booking system with advance payment"
                    />
                </div>
            </div>
        </div>
    )
}

export default Features