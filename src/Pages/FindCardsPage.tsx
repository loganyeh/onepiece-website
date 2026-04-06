import Header from "../Components/FindCardsPageComps/Header";
import CardListTitle from "../Components/FindCardsPageComps/CardListTitle";
import FilterSearch from "../Components/FindCardsPageComps/FilterSearch";
import TopPageSelector from "../Components/FindCardsPageComps/TopPageSelector";
import CardsGrid from "../Components/FindCardsPageComps/CardsGrid";
import BottomPageSelector from "../Components/FindCardsPageComps/BottomPageSelector";
import AdBox from "../Components/FindCardsPageComps/AdBox";
import Footer from "../Components/FindCardsPageComps/ShellFindCardsPage/Footer";
import SplashArt from "../Components/FindCardsPageComps/SplashArt";

// testing api
import { fetchCardSetID } from "../API/apiFindCardsPage";
import type { CardSetID } from "../API/apiFindCardsPage";
import { useState, useEffect } from "react";

function FindCardsPage(){
    const [cardSetId, setCardSetIdData] = useState<CardSetID[]>([]);

    // disable api request for now
    // ** working was able to get the data
    // useEffect(() => {
    //     async function getCardSetID(){
    //         const data: CardSetID[] = await fetchCardSetID();
    //         setCardSetIdData(data);
    //     }

    //     getCardSetID();
    // }, [])

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Header */}
                <Header />

                {/* Home -> Card List @ Breakpoint XL */}
                <div className="hidden px-6 xl:flex mt-8 2xl:mt-4 items-center gap-3 text-amber-500 font-medium text-sm">
                    <div>HOME</div> 
                    <i className='bx bxs-right-arrow text-xs' ></i>
                    <div>CARD LIST</div>
                </div>

                {/* Card Preview */}
                <div className="fixed top-0 p-3 md:px-4 flex justify-center items-center md:items-start inset-0 bg-amber-200/40 md:scroll-auto md:overflow-y-auto">
                {/* <div className="fixed border-2 border-red-600 inset-0 bg-amber-200/40"> */}

                    {/* Exit X */}
                    <i className='bx bx-x p-0.5 fixed top-0 right-0 bg-yellow-900 text-white text-5xl md:text-8xl' ></i>

                    {/* Card Body Preview */}
                    <div className="w-full max-w-5xl flex flex-col gap-5 md:gap-10 bg-white">

                        <div className="px-4 pt-5 pb-2.5 md:p-8 md:flex md:flex-col md:gap-1 bg-black text-white">
                            <div className="flex gap-3 md:gap-6">
                                <div className="border-r pr-3 md:pr-6 font-bold text-[10px] md:text-2xl">EB04-001</div>
                                <div className="border-r pr-3 md:pr-6 font-bold text-[10px] md:text-2xl">L</div>
                                <div className="font-bold text-[10px] md:text-2xl">LEADER</div>
                            </div>
                            <div className="font-bold text-lg md:text-4xl">Jewlery Bonney</div>
                        </div>

                        <div className="mx-6 md:mx-12 flex-1 aspect-[3/4.25] md:aspect-3/4 bg-blue-300 rounded-2xl" style={{ backgroundImage: `url(${""})`}}></div>

                        {/* Left and Right Arrow */}
                        <i className='bx bxs-left-arrow fixed w-fit left-1 top-1/2 p-2 md:p-4 text-white text-sm md:text-2xl bg-yellow-900 rounded-full' ></i>
                        <i className='bx bxs-right-arrow fixed w-fit right-1 top-1/2 p-2 md:p-4 text-white text-sm md:text-2xl bg-yellow-900 rounded-full' ></i>

                        <div className="mb-5 flex justify-center">
                            <div className="w-full max-w-xs md:max-w-xl mx-8 md:mx-0 px-2 py-2 md:py-4 flex bg-yellow-900 text-white rounded-full">
                                <div className="flex-1 "></div>
                                <div className="flex items-center text-sm md:text-2xl font-semibold tracking-tighter">TEXT VIEW</div>
                                <div className="flex-1 flex justify-end items-center">
                                    <i className='bx bx-file md:px-2 text-2xl md:text-5xl' ></i>
                                </div>
                            </div>
                        </div>


                    </div>

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