

function FindCardsPage(){

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Header */}
                <div className="border h-14 w-full flex justify-between bg-white">

                    {/* Logo */}
                    <div className="border h-full flex justify-start items-center">
                        <div className="border flex justify-center items-center font-bold text-2xl">
                            One Piece <br />
                            Card Game
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="border h-full flex justify-end items-center">
                        <div className="border h-full flex justify-center items-center text-4xl">=</div>
                    </div>

                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-2">

                    {/* Card List Title */}
                    <div className="h-36 flex justify-center items-center text-4xl font-bold tracking-tighter">CARD LIST</div>

                    {/* Filter Search */}
                    <div className="max-w-6xl px-4 bg-white shadow-md">
                        <div className="h-full grid grid-rows-[1fr_1fr_1fr_auto_1fr] gap-2">
                            {/* Search */}
                            <div className="h-16 flex justify-center items-center">
                                <div className="border-b w-full pb-1 flex justify-between items-center">
                                    <div className="text-sm text-gray-400 font-semibold tracking-wide">Search ...</div>
                                    <div className="flex justify-center items-center"><i className='bx bx-search text-xl text-zinc-800'></i></div>
                                </div>
                            </div>

                            {/* Pack Set Name */}
                            <div className="h-16 border-b border-black flex justify-between">
                                <div className="font-medium">
                                    Booster Pack
                                    - Adventure on Kami's Island
                                    [OP15-EB04]<br />
                                </div>
                                <div className="w-8 flex justify-center items-center shrink-0"><i className='bx bxs-down-arrow'></i></div>
                            </div>


                            {/* Add More Button */}
                            <div className="flex items-center">
                                <div className="relative h-2/3 w-full bg-black flex justify-center items-center rounded-3xl">
                                    <div className="font-semibold text-white">Add more</div>
                                    <div className="absolute right-4 h-full flex justify-center items-center"><i className='bx bx-plus text-xl text-white' ></i></div>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="h-8 flex items-center">
                                <div className="border-2 h-5 w-5"></div>
                                <div className="text-sm font-medium ml-1">Hide reprint cards</div>
                            </div>


                            {/* Search Button */}
                            <div className="flex items-center">
                                <div className="relative h-2/3 w-full bg-yellow-700 flex justify-center items-center rounded-3xl">
                                    <div className="font-semibold text-white">Add more</div>
                                    <div className="absolute right-4 h-full flex justify-center items-center"><i className='bx bx-search text-xl text-white' ></i></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FindCardsPage;