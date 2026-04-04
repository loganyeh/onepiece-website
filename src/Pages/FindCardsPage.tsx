import HeaderFindCardsPage from "../Components/FindCardsPageComps/HeaderFindCardsPage";
import CardListTitle from "../Components/FindCardsPageComps/CardListTitle";
import FilterSearch from "../Components/FindCardsPageComps/FilterSearch";
import TopPageSelector from "../Components/FindCardsPageComps/TopPageSelector";
import CardsGrid from "../Components/FindCardsPageComps/CardsGrid";
import BottomPageSelector from "../Components/FindCardsPageComps/BottomPageSelector";
import AdBox from "../Components/FindCardsPageComps/AdBox";
import Footer from "../Components/FindCardsPageComps/ShellFindCardsPage/Footer";
import SplashArt from "../Components/FindCardsPageComps/SplashArt";

// import { useState, useEffect } from "react";
// import { fetchCards } from "../API/apiFindCardsPage";

function FindCardsPage(){
    // const [cardsData, setCardsData] = useState();

    // useEffect(() => {
    //     async function getCards(){
    //         const data = await fetchCards();
    //         setCardsData(data);
    //     }

    //     getCards();
    // }, []);

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Header */}
                <HeaderFindCardsPage />

                {/* Home -> Card List @ Breakpoint XL */}
                <div className="hidden px-6 xl:flex mt-8 2xl:mt-4 items-center gap-3 text-amber-500 font-medium text-sm">
                    <div>HOME</div> 
                    <i className='bx bxs-right-arrow text-xs' ></i>
                    <div>CARD LIST</div>
                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-3 lg:px-0 xl:px-14">

                    <CardListTitle />

                    {/* Filter Search */}
                    <FilterSearch />

                    {/* Cards Header - Pages Arrows */}
                    <TopPageSelector />

                    {/* Cards Grid */}
                    <CardsGrid />
                    
                    {/* Bottom Page Selector */}
                    <BottomPageSelector />

                    {/* Advertisement Placements */}
                    <AdBox />

                </div>

                {/* Splash Art */}
                <SplashArt />

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default FindCardsPage;