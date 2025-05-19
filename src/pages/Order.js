export default function Order() {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Coming Soon...</h1>
                        <p className="py-6">
                            <span className="loading loading-dots loading-xl"></span>
                        </p>
                        <a className="btn btn-primary text-white text-xl" href="/reserve">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                            Reserve a Table for now
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}