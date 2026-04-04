

function BottomPageSelector(){

    return(
        <>
            {/* Page Selector for Mobile up to Tablet */}
            <div className="lg:hidden mt-6 px-3 md:px-5 md:mt-12 py-2 md:py-4 flex justify-between items-center bg-white shadow">
                <button className="border-r border-gray-800 pr-5 md:pr-8 flex justify-start"><i className='bx bxs-left-arrow text-gray-400 text-sm md:text-3xl' ></i></button>
                <div className="text-sm md:text-3xl font-semibold tracking-tight md:tracking-tighter">1/11</div>
                <button className="border-l border-gray-800 pl-5 md:pl-8 flex justify-end"><i className='bx bxs-right-arrow text-zinc-900 text-sm md:text-3xl' ></i></button>
            </div>

            {/* Page Selector for Laptop upto 4K */} 
            <div className="hidden mt-6 lg:flex justify-between gap-5">
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
        </>
    )
}

export default BottomPageSelector;