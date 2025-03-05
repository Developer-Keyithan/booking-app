"use client"

const Counts = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-around items-center py-24">
                <div className="flex flex-col items-center">
                    <h1 className="text-[5rem] font-semibold text-blue-300">200+</h1>
                    <h2 className="text-2xl font-semibold text-blue-900">Bookings</h2>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[5rem] font-semibold text-blue-300">1000+</h1>
                    <h2 className="text-2xl font-semibold text-blue-900">Happy Customers</h2>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-[5rem] font-semibold text-blue-300">500+</h1>
                    <h2 className="text-2xl font-semibold text-blue-900">Rating & Reviews</h2>
                </div>
            </div>
        </div>
    )
}

export default Counts