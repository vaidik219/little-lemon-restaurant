export default function Reserve({ ref }) {
    return (
        <>
            <div className="mx-auto px-4 py-10 w-full" ref={ref
            }>
                <h1 className="text-5xl font-bold text-center mb-10">
                    Reserve a Table
                </h1>
                <div className="flex justify-center">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <fieldset className="fieldset text-2xl text-black">
                                    <label className="label">Name</label>
                                    <div className="join join-vertical lg:join-horizontal">
                                        <input type="text" className="input" placeholder="First" required />
                                        <input type="text" className="input" placeholder="Last" required />
                                    </div>

                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="me@example.com" required />

                                    <label className="label">Phone Number</label>
                                    <label className="input">
                                        <span className="label">+1</span>
                                        <input type="tel" className="input" placeholder="(xxx)-xxx-xxxx" required />
                                    </label>

                                    <label className="label">Date & Time</label>
                                    <input type="datetime-local" className="input" required />

                                    <label className="label">Number of People</label>
                                    <input type="number" className="input" max="20" min="1" required />

                                    <button className="btn btn-primary mt-4 btn-lg text-3xl text-white" type="submit">
                                        Submit Request
                                    </button>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}