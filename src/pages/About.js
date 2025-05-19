import restaurantJPG from "../assets/restaurant.jpg"

export default function About() {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={restaurantJPG}
                        className="max-w-sm rounded-lg shadow-2xl object-cover"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-2xl">
                            Little Lemon is a family-owned Mediterranean restaurant located on Maldove Street in Chicago, Illinois. Founded in 1987 by brothers Yannis and Elias Papadakis, our mission has always been to bring the warmth and flavor of traditional Mediterranean cooking to the heart of the city.
                            We serve classic recipes with a modern twist, using fresh, locally sourced ingredients and time-honored techniques passed down through generations. From our grilled meats and fresh seafood to vibrant vegetarian dishes and handmade dips, every plate is crafted with care and authenticity.
                            Little Lemon is more than just a place to eat—it's a welcoming space to gather, connect, and celebrate the joy of good food. Whether you're here for a quick lunch or a special dinner, we’re proud to share a slice of the Mediterranean with you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}