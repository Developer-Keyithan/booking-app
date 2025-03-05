"use client"

function DestinationCard({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

const PopularDestinations = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <DestinationCard
                        image="https://images.unsplash.com/photo-1578321272125-5e6d4c1339e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        title="Sigiriya"
                        description="Visit the ancient palace and fortress complex"
                    />
                    <DestinationCard
                        image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        title="Kandy"
                        description="Explore the cultural capital of Sri Lanka"
                    />
                    <DestinationCard
                        image="https://images.unsplash.com/photo-1586394552705-2637bc31a10f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        title="Galle"
                        description="Discover the historic coastal fort city"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopularDestinations