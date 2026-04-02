

function FindCardsPage(){

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Header */}
                <div className="border h-14 w-full flex justify-between bg-white">

                    {/* Logo */}
                    <div className="border h-full flex justify-start items-center">
                        <div className="border flex justify-center items-center">One Piece Card Game</div>
                    </div>

                    {/* Menu */}
                    <div className="border h-full flex justify-end items-center">
                        <div className="border h-full flex justify-center items-center text-4xl">=</div>
                    </div>

                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-2">

                    {/* Card List Title */}
                    <div className="border h-36 flex justify-center items-center text-4xl">Card List</div>

                    {/* Filter Search */}
                    <div className="max-w-6xl px-4 bg-white shadow-md">
                        <div className="h-full grid grid-rows-5 gap-0">
                            {/* Search */}
                            <div className="h-16 flex justify-center items-center">
                                <div className="border-b w-full pb-1 flex justify-between items-center">
                                    <div className="text-sm text-gray-400 font-semibold tracking-wide">Search ...</div>
                                    <div className="flex justify-center items-center"><i className='bx bx-search text-xl text-zinc-800'></i></div>
                                </div>
                            </div>

                            {/* Pack Set Name */}
                            <div className="h-16 border border-black flex justify-between">
                                <div className="border">
                                    Booster Pack
                                    - Adventure on Kami's Island
                                    [OP15-EB04]<br />
                                </div>
                                <div className="border w-8 flex justify-center items-center shrink-0"><i className='bx bxs-down-arrow'></i></div>
                            </div>


                            {/* Add More Button */}
                            <div className="border border-red-600 flex items-center">
                                <div className="h-2/3 w-full bg-blue-300 rounded-3xl"></div>
                            </div>


                            <div className="border-b border-red-600"></div>
                            <div className="border-b border-red-600"></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FindCardsPage;