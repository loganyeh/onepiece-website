import { useState, useEffect } from "react";
import { fetchCards } from "../../API/apiFindCardsPage";
import type { CardImage } from "../../API/apiFindCardsPage";

function CardsGrid(){
    const [loading, setLoading] = useState(true);
    const [cardsData, setCardsData] = useState<CardImage[]>([]);

    useEffect(() => {
        async function getCards(){
            // setLoading(true);
            
            // WORKING API 
            // DISABLE to not make requests every render
            // const data = await fetchCards();
            // setCardsData(data);
            
            // setLoading(false);
        }

        getCards();
    }, []);

    return(
        <>
            {/* Cards Grid */}
            <div className="mt-4 md:mt-8 lg:mt-6 grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                {/* {loading 
                ? 
                    (Array.from({length: 20}).map((_, index) => {
                        return <div key={index} className={`border aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md`}></div>
                    })) 
                :
                    (cardsData.slice(0, 1).map((card, index) => {
                        return <div key={index} className={`aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md bg-cover bg-center`} style={{ backgroundImage: loading ? `url(${card.card_image})` : `bg-blue-300` }}></div>
                    }))
                } */}

                {cardsData.slice(0, 1).map((card, index) => {
                    return <div key={index} className={`aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md bg-cover bg-center`} style={{ backgroundImage: loading ? `url(${card.card_image})` : `bg-blue-300` }}></div>
                })}
                

                
            </div>
        </>
    )
}

export default CardsGrid;