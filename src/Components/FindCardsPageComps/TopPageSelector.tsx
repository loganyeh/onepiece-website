

function TopPageSelector(){

    return(
        <>
            {/* Cards Header - Pages Arrows */}
            <div className="mt-5 md:mt-10 lg:mt-6 flex justify-between items-center">
                <div className="flex gap-1.5 md:gap-4 lg:gap-3">
                    <div className="border flex items-center px-2.5 md:px-4 lg:px-2.5 py-0.5 md:py-1 lg:py-1.5 gap-1 md:gap-2 lg:gap-1.5 bg-white text-xs md:text-2xl lg:text-xs font-bold md:font-semibold rounded-xl md:rounded-full"><span className="font-light md:font-medium text-[11px] md:text-lg lg:text-[11px]">X</span> Clear</div>
                    <div className="flex items-center font-bold text-center text-sm md:text-3xl lg:text-xl">196 Results</div>
                </div>

                {/* page nav HIDDEN at breakpoint lg */}
                <div className="py-2 md:py-4 flex lg:hidden justify-between items-center bg-white shadow-sm">
                    <button className="border-r px-4 md:px-8 flex justify-center items-center"><i className='bx bxs-left-arrow text-gray-400 text-sm md:text-2xl' ></i></button>
                    <div className="px-4 md:px-10 flex justify-center items-center text-xs md:text-2xl font-bold md:font-semibold">1/11</div>
                    <button className="border-l px-4 md:px-8 flex justify-center items-center"><i className='bx bxs-right-arrow text-black text-sm md:text-2xl' ></i></button>
                </div>

                {/* FLEX nav bar for breakpoint LG */}
                <div className="hidden lg:flex gap-5">
                    {/* PREV */}
                    <div className="px-8 py-1 flex justify-center items-center bg-gray-300 text-gray-400 text-sm font-semibold tracking-tighter">PREV</div>
                    {/* PAGE NUMBERS */}
                    <div className="flex gap-1.5 text-sm font-semibold">
                        {Array.from({length: 10}).map((_, index, array) => {
                            return <div key={index} className={`${index === array.length - 2 ? `flex items-end` : `${index < 4 || index === array.length - 1 ? `border-2 px-3 py-1 flex items-center bg-white font-extrabold` : `hidden`}`}`}>{index === array.length - 2 ? "..." : index + 1}</div>
                        })}
                    </div>
                    {/* NEXT */}
                    <div className="border-2 px-8 py-1 bg-white text-sm font-semibold tracking-tighter">NEXT</div>
                </div>

            </div>
        </>
    )
}

export default TopPageSelector;