

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
                        <div className="border flex justify-center items-center text-6xl">=</div>
                    </div>

                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-4">

                    {/* Card List Title */}
                    <div className="border h-32 flex justify-center items-center text-4xl">Card List</div>

                    {/* Filter Search */}
                    <div className="border border-red-600 h-80 w-full bg-white"></div>
                </div>

            </div>
        </>
    )
}

export default FindCardsPage;