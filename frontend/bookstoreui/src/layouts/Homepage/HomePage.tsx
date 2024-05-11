import { Carousel } from "./Carousel"
import { ExploreTopBooks } from "./ExploreTopBooks"
import { Footer } from "./Footer"
import { Heros } from "./Heros"
import { LibraryServices } from "./LibraryServices"

export const HomePage=()=>
{
    return(
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices /> 
            <Footer/>
        </>
    )
}