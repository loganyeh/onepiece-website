import { useState, useEffect } from "react";
import { fetchCardSetID, fetchCards } from "../../API/apiFindCardsPage";
import type { CardImage } from "../../API/apiFindCardsPage";

type CardStatsCategories = {
    stat: string;
    value: string;
}

function CardInfoPreview(){
    // const [cardSetId, setCardSetIdData] = useState<CardImage[]>([]);
    const [isCardPreview, setIsCardPreview] = useState(true);
    const [cardData, setCardData] = useState<CardImage[]>([]);
    const cardInfoPreviewBaseStatsData: CardStatsCategories[] = [
        { stat: "Life", value: `${cardData[0]?.life || "4"}` },
        { stat: "Attribute", value: `${cardData[0]?.attribute || "Special"}` },
        { stat: "Power", value: `${cardData[0]?.card_power || "5000"}` },
        { stat: "Counter", value: `${cardData[0]?.counter_amount || "-"}` },
        { stat: "Color", value: `${cardData[0]?.card_color || "Red/Yellow"}` },
        { stat: "Block icon", value: `${"-"}` },
        { stat: "Type", value: `${cardData[0]?.card_type || "Egghead/Bonney Pirates"}` },
        { stat: "empty stat", value: "empty value" },
    ];
    const baseEffectData = `[Opponent's Turn] If you have 1 or less Life cards, this Leader gains +2000 power.
    [Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters −1000 power during this turn. Then, if you have 2 or more Life cards, you may add 1 card from the top of your Life cards to your hand.`;

    // api working and all its data is in the right place  √√√
     useEffect(() => {
        async function getCardSetID(){
            // const data: CardImage[] = await fetchCardSetID();
            // setCardData(data);
        }

        getCardSetID();
    }, [])

    return(
        <>
            {/* Card Preview */}
            <div className={`${isCardPreview ? `fixed` : `hidden`} top-0 p-3 md:px-4 flex justify-center items-center md:items-start lg:items-center inset-0 bg-amber-200/40 md:scroll-auto md:overflow-y-auto`}>

                {/* Exit X */}
                <i onClick={() => setIsCardPreview(false)} className={`bx bx-x 
                    fixed top-0 right-0
                    p-0.5 lg:p-2
                    text-white text-5xl md:text-8xl lg:text-3xl
                    bg-yellow-900 
                    cursor-pointer transition-colors duration-300 hover:bg-white/50 hover:text-yellow-900
                `} ></i>

                {/* Left and Right Arrow */}
                <i className='bx bxs-left-arrow fixed w-fit left-1 top-1/2 p-2 md:p-4 lg:p-3 text-white text-sm md:text-2xl bg-yellow-900 rounded-full' ></i>
                <i className='bx bxs-right-arrow fixed w-fit right-1 top-1/2 p-2 md:p-4 lg:p-3 text-white text-sm md:text-2xl bg-yellow-900 rounded-full' ></i>

                {/* Card Body Preview */}
                <div className="w-full max-w-5xl flex flex-col bg-white">

                    {/* Header */}
                    <div className="
                        md:flex md:flex-col md:gap-1 lg:gap-0
                        px-4 pt-5 pb-2.5 md:p-8 lg:py-4
                        text-white
                        bg-black 
                    ">
                        <div className="
                            flex lg:justify-center lg:items-center gap-3 md:gap-6 text-[10px] md:text-2xl lg:text-lg
                        ">
                            <div className="border-r pr-3 md:pr-6 font-bold">EB04-001</div>
                            <div className="border-r pr-3 md:pr-6 font-bold">L</div>
                            <div className="font-bold">LEADER</div>
                        </div>
                        <div className="
                            lg:text-center
                            font-bold text-lg md:text-4xl
                        ">
                            {cardData[0]?.card_name || "Jewlery Bonney"}
                        </div>

                    </div>

                    {/* Info BODY */}
                    <div className="
                        flex flex-col lg:items-center gap-4 md:gap-8 lg:grid lg:grid-cols-2
                        p-5 md:p-12 lg:p-8
                    ">
                        {/* Card Image */}
                        <div className="aspect-[3/4.25] md:aspect-3/4 bg-blue-300 bg-center bg-cover rounded-3xl" style={{ backgroundImage: `url(${cardData[0]?.card_image || "/images/fallbackCardPreview.png"})`}}></div>

                        {/* <div className="aspect-[3/4.25] md:aspect-3/4 bg-blue-300 bg-center bg-cover rounded-3xl" style={{ backgroundImage: `url(${`/images/fallbackCardPreview.png`})`}}></div> */}

                        {/* Card Info & Stats */}
                        <div className="hidden lg:flex flex-col gap-4">
                            <div className="lg:grid grid-cols-2 aspect-14/8">
                                {/* {Array.from({length: 8}).map((_, index) => {
                                    return <div key={index} className={`${index === 6 ? `border-b flex flex-col justify-center` : `grid grid-cols-2 border-b items-center`}`}>
                                        <div className={`${index === 7 ? `hidden` : ``} font-bold`}>Life</div>
                                        <div className={`${index === 7 ? `hidden` : ``} font-light`}>4</div>
                                    </div>
                                })} */}
                                {cardInfoPreviewBaseStatsData.map((base, index) => {
                                    return <div key={index} className={`${index === 6 ? `border-b flex flex-col justify-center` : `grid grid-cols-2 border-b items-center`}`}>
                                        <div className={`${index === 7 ? `hidden` : ``} font-bold`}>{base.stat}</div>
                                        <div className={`${index === 7 ? `hidden` : ``}`}>{base.value}</div>
                                    </div>
                                })}
                            </div>

                            <div>
                                <div className="font-bold">Effect</div>
                                <div className="font-light">{ cardData[0]?.card_text || baseEffectData}</div>
                            </div>

                            <div className="p-2 bg-gray-100 rounded">
                                <div className="font-bold">Card Set(s)</div>
                                <div className="font-light text-sm">{ cardData[0]?.set_name || "-ADVENTURE ON KAMI'S ISLAND- [OP15-EB04]"}</div>
                            </div>

                        </div>

                        {/* Text View Button for Mobile to MD */}
                        <div className="flex lg:hidden justify-center">
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

            </div>
        </>
    )
}

export default CardInfoPreview;