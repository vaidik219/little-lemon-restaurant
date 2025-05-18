export default function Reserve() {
    return (
        <>
            <div className="mx-auto px-4 py-10 w-full">
                <h1 className="text-5xl font-bold text-center mb-10">
                    Reserve a Table
                </h1>
                <div className="flex justify-center">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset text-2xl text-black">
                                <label className="label">Name</label>
                                <div className="join join-vertical lg:join-horizontal">
                                    <input type="text" className="input" placeholder="First" required />
                                    <input type="text" className="input" placeholder="Last" required />
                                </div>
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="me@example.com" />
                                <label className="label">Phone Number</label>
                                <label className="input">
                                    <span className="label">+91</span>
                                    <input type="tel" className="input" placeholder="(xxx)-xxx-xxxx" />
                                </label>
                                <label className="label">Date & Time</label>
                                <input type="datetime-local" className="input" />
                                <label className="label">Number of People</label>
                                <input type="number" className="input" max="20" min="1" />
                                <button className="btn btn-primary mt-4 btn-lg text-3xl text-white">Submit Request</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}