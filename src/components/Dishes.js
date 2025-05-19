import bruchetta from "../assets/bruchetta.svg"
import greek_salad from "../assets/greek-salad.jpg"
import lemon_dessert from "../assets/lemon-dessert.jpg"

export default function Dishes() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-5xl font-bold text-center mb-10">
                    This week's specials:
                    <a className="btn btn-link text-4xl" href="/menu">Menu</a>
                </h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="card bg-base-100 w-full md:w-100 shadow-sm">
                        <figure>
                            <img src={bruchetta} alt="Bruchetta" />
                        </figure>
                        <div className="card-body text-xl">
                            <h2 className="card-title">
                                Bruchetta
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                            <p className="text-[#ed9972] font-[1000] text-4xl">$12.50</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Italian</div>
                                <div className="badge badge-outline">Appetizer</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-xl text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full md:w-100 shadow-sm">
                        <figure>
                            <img src={greek_salad} alt="Greek_Salad" />
                        </figure>
                        <div className="card-body text-xl">
                            <h2 className="card-title">
                                Greek Salad
                            </h2>
                            <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
                            <p className="text-[#ed9972] font-[1000] text-4xl">$6</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Feta Cheese</div>
                                <div className="badge badge-outline">Olive Oil</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-xl text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full md:w-100 shadow-sm">
                        <figure>
                            <img src={lemon_dessert} alt="Lemon_dessert" className="w-full" />
                        </figure>
                        <div className="card-body text-xl">
                            <h2 className="card-title">
                                Lemon Dessert
                                <div className="badge badge-secondary">BESTSELLER</div>
                            </h2>
                            <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
                            <p className="text-[#ed9972] font-[1000] text-4xl">$8.50</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Low Fat</div>
                                <div className="badge badge-outline">Whipped Cream</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-xl text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
