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
                <div className="fixed inset-0 bg-amber-200/40">
                {/* <div className="fixed border-2 border-red-600 inset-0 bg-amber-200/40"> */}

                    {/* Exit X */}
                    {/* <div className="flex justify-end">
                        <i className='bx bx-x p-0.5 bg-yellow-900 text-white text-5xl' ></i>
                    </div> */}

                    {/* Card Preview/Info */}
                    <div className="border bg-white aspect-3/5">

                        {/* Card Name & Info */}
                        {/* <div className="px-4 pt-5 pb-2.5 bg-black text-white">
                            <div className="flex gap-3">
                                <div className="border-r pr-3 font-bold text-[10px]">EB04-001</div>
                                <div className="border-r pr-3 font-bold text-[10px]">L</div>
                                <div className="font-bold text-[10px]">LEADER</div>
                            </div>
                            <div className="font-bold text-lg">Jewlery Bonney</div>
                        </div> */}

                        {/* Card Image */}
                        <div className="flex items-center">
                            {/* <div className="border h-8 w-8 -ml-2 rounded-full"></div> */}
                            {/* <div className="h-[30px] w-[30px] -ml-2 flex justify-center items-center bg-yellow-900 rounded-full"><i className='bx bxs-left-arrow text-white' ></i></div> */}
                            {/* <div className="mt-6 mx-5 aspect-3/4 bg-blue-300 rounded-2xl" style={{ backgroundImage: `url(${""})`}}></div> */}
                            {/* <div className="flex-1 aspect-[3/4.25] bg-blue-300 rounded-2xl" style={{ backgroundImage: `url(${""})`}}></div> */}
                            {/* <div className="h-[30px] w-[30px] -mr-2 flex justify-center items-center bg-yellow-900 rounded-full"><i className='bx bxs-right-arrow text-white' ></i></div> */}
                        </div>

                        {/* <div className="border-2 border-red-600 mt-4 mx-12 px-2 py-2 flex bg-yellow-900 text-white rounded-full">
                            <div className="flex-1 "></div>
                            <div className="flex items-center text-sm font-semibold tracking-tighter">TEXT VIEW</div>
                            <div className="flex-1 flex justify-end items-center">
                                <i className='bx bx-file text-2xl' ></i>
                            </div>
                        </div> */}


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