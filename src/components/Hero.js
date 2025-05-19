import bg from "../assets/restaurantchef.jpg"

export default function Hero({ scroll }) {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">Little Lemon Chicago</h1>
                        <p className="mb-5 text-3xl">
                            We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.
                        </p>
                        <a className="btn btn-active btn-accent btn-xl ylo" onClick={scroll}>Reserve a Table</a>
                    </div>
                </div>
            </div>
        </>
    )
}