import bruchetta from "../assets/bruchetta.svg"
import greek_salad from "../assets/greek-salad.jpg"
import lemon_dessert from "../assets/lemon-dessert.jpg"

export default function Menu() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-5xl font-bold text-center mb-10">
                    Menu
                </h1>


                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src={bruchetta} alt="Bruchetta" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Bruchetta
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$12.50</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Italian</div>
                                <div className="badge badge-outline">Appetizer</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src={greek_salad} alt="Greek_Salad" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Greek Salad
                            </h2>
                            <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$6.00</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Feta Cheese</div>
                                <div className="badge badge-outline">Olive Oil</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://plus.unsplash.com/premium_photo-1714942934723-118f2b4dd6dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Lemon Dessert
                                <div className="badge badge-secondary">BESTSELLER</div>
                            </h2>
                            <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$8.50</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Low Fat</div>
                                <div className="badge badge-outline">Whipped Cream</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img
                                src="https://images.unsplash.com/photo-1603133872497-f29809b750bf?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Hummus
                            </h2>
                            <p>Creamy dip made from blended chickpeas, tahini, lemon juice, and garlic. Served with pita or veggies.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$5.99</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Chick Peas</div>
                                <div className="badge badge-outline">Dip</div>
                                <div className="badge badge-outline">Vegan</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1649402178076-766f9a48af97?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Falafel
                            </h2>
                            <p>Deep-fried balls made from ground chickpeas, herbs, and spices. Crunchy outside, soft inside.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$6.50</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Crispy</div>
                                <div className="badge badge-outline">Protein Rich</div>
                                <div className="badge badge-outline">Street Food</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1697546307745-c05002aa1c1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Shakshuka
                            </h2>
                            <p>Poached eggs in a spicy tomato and pepper sauce, often served with crusty bread.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$9.75</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Eggs</div>
                                <div className="badge badge-outline">Spicy</div>
                                <div className="badge badge-outline">Brunch</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://plus.unsplash.com/premium_photo-1667545476089-a233da1e89ca?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Dolma
                            </h2>
                            <p>Grape leaves stuffed with rice, pine nuts, and herbs. Served cold or warm.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$7.25</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Stuffed</div>
                                <div className="badge badge-outline">Vine Leaves</div>
                                <div className="badge badge-outline">Aromatic</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1647714013867-f62bc1cc2039?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Tabbouleh
                            </h2>
                            <p>Fresh salad made with bulgur, parsley, mint, tomatoes, and lemon juice.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$6.00</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fresh</div>
                                <div className="badge badge-outline">Bulgur</div>
                                <div className="badge badge-outline">Zesty</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-72 md:w-72 shadow-sm">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1726514734441-dde9eabd9208?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Lemon_dessert"
                                className="w-full" />
                        </figure>
                        <div className="card-body text-lg">
                            <h2 className="card-title">
                                Moussaka
                            </h2>
                            <p>Layered dish with eggplant, ground meat, and béchamel sauce. Baked until golden.</p>
                            <p className="text-[#ed9972] font-[1000] text-xl">$12.99</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Egg Plant</div>
                                <div className="badge badge-outline">Casserole</div>
                                <div className="badge badge-outline">Greek</div>
                            </div>
                            <div className="mt-6">
                                <button className="text-lg text-white btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
                                    Add to basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}