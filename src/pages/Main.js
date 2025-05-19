import Dishes from "../components/Dishes";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Reserve from "../components/Reserve";

export default function Main({ ref }) {
    return (
        <>
            <Hero />
            <Dishes />
            <Testimonials />
            <Reserve ref={ref} />
        </>
    )
}