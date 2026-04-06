import { useState, useEffect } from "react";
import { fetchCards } from "../../API/apiFindCardsPage";
import type { CardImage } from "../../API/apiFindCardsPage";

function CardsGrid(){
    const [loading, setLoading] = useState(true);
    const [cardsData, setCardsData] = useState<CardImage[]>([]);

    useEffect(() => {
        async function getCards(){
            setLoading(true);
            
            // API IS WORKING √√√√
            // const data = await fetchCards();
            // setCardsData(data);
            
            setLoading(false);
        }

        getCards();
    }, []);

    return(
        <>
            {/* Cards Grid */}
            <div className="mt-4 md:mt-8 lg:mt-6 grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                {loading
                ?
                (Array.from({length: 20}).map((_, index) => {
                    return <div key={index} className={`aspect-[2/3] md:aspect-[3/4] bg-black rounded-md flex justify-center items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2`}>
                        {index === 0 && (<i className={`bx bx-loader-alt text-white text-4xl animate-spin`}></i>)}
                    </div>
                })) 
                :
                (cardsData.length === 0 
                    ? (Array.from({length: 20}).map((_, index) => {
                        return <div key={index} className={`aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md flex justify-center items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2`}></div>
                    }))
                    :(cardsData.slice(0, 1).map((card, index) => {
                        return <div key={index} className={`border border-gray-50 aspect-[2/3] md:aspect-[3/4] flex justify-center items-center rounded-md bg-cover bg-center cursor-pointer transition-transform duration-300 hover:-translate-y-2`} style={{ backgroundImage: loading ? `` : `url(${card.card_image})` }}></div>
                    })))
                }
            </div>
        </>
    )
}

export default CardsGrid;