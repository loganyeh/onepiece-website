
type FilterSearchProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function FilterSearch({ search, setSearch }: FilterSearchProps){
    // Varaibles for Search Filter Section @ Breakpoint LG
    const colorFilterData = ["ALL", "Red", "Green", "Blue", "Purple", "Black", "Yellow", "Multicolor"];
    const cardTypeFilterData = ["ALL", "Leader", "Chracter", "Stage", "Event"];
    const illustationTypeFilterData = ["ALL", "Comic", "Animation", "Original Illustrations", "Other"];
    const blockIconFilterData = ["ALL", "1", "2", "3", "4"];

    return(
        <>
            {/* Filter Search */}
            <div className="max-w-6xl px-4 md:px-8 py-5 md:py-14 lg:pt-10 lg:pb-5 bg-white shadow-md">

                {/* Filter Search Up to Tablet MD */}
                <div className="lg:hidden flex flex-col gap-5 md:gap-10">

                    {/* Search */}
                    <div className="border-b pb-1 md:pb-3 flex justify-between items-center">
                        {/* <div className="text-sm md:text-3xl text-gray-300 font-semibold tracking-wide">Search ...</div> */}
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="text-sm md:text-3xl font-semibold tracking-wide"/>
                        <i className='bx bx-search text-xl md:text-3xl text-zinc-800'></i>
                    </div>

                    {/* Pack Set Name */}
                    <div className="border-b pb-2 md:pb-4 flex justify-between items-center">
                        <div className="flex-1 text-zinc-800 text-sm md:text-3xl font-semibold">
                            BOOSTER PACK<br />
                            - ADVENTURE ON KAMI'S ISLAND<br />
                            [OP15-EB04]
                        </div>
                        <i className='bx bxs-down-arrow w-6 md:text-lg shrink-0'></i>
                    </div>

                    {/* Add More Button */}
                    <div className="px-3 md:px-5 py-2.5 md:py-5 flex items-center bg-black text-white rounded-3xl md:rounded-full"> 
                        <div className="flex-1"></div>
                        <div className="font-semibold text-sm md:text-3xl">Add more</div>                   
                        <div className="flex-1 flex justify-end">
                            <i className='bx bx-plus text-2xl md:text-4xl' ></i>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="border-2 h-5 w-5 md:h-8 md:w-8"></div>
                        <div className="text-[13px] md:text-2xl font-semibold tracking-tight">Hide reprint cards</div>
                    </div>

                    {/* Search Button */}
                    <div className="px-3 md:px-5 py-2.5 md:py-5 bg-olive-500 flex justify-center items-center text-white rounded-3xl md:rounded-full">
                        <div className="flex-1"></div>
                        <div className="font-semibold text-sm md:text-3xl tracking-tighter">SEARCH</div>
                        <div className="flex-1 flex justify-end">
                            <i className='bx bx-search text-xl md:text-4xl' ></i>
                        </div>
                    </div>

                </div>

                {/* Filter Search Up to Laptop LG */}
                <div className="hidden lg:flex flex-col gap-5">

                    {/* Search and Packs */}
                    <div className="flex gap-8">
                        {/* Search */}
                        <div className="border-b pb-1 flex-1 flex justify-between items-center">
                            {/* <input className="text-sm text-gray-300 font-semibold tracking-wide">Search ...</input> */}
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="text-sm font-semibold tracking-wide"/>
                            <i className='bx bx-search text-xl text-zinc-800'></i>
                        </div>

                        {/* Pack Set Name */}
                        <div className="border-b pb-1 flex-1 flex justify-between items-center">
                            <div className="flex-1 text-zinc-800 text-sm font-semibold">
                                BOOSTER PACK - ADVENTURE ON KAMI'S ISLAND [OP15-EB04]
                            </div>
                            <i className='bx bxs-down-arrow w-6 text-center text-sm shrink-0'></i>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex-1 flex justify-between">
                        <div className="">
                            <div className="text-sm font-semibold">- Color</div>
                            <div className="flex gap-2 font-semibold">
                                {colorFilterData.map((color, index) => {
                                    return <div key={index} className={`${index === 0 ? "" : `border-2` } px-3 py-0.5 flex ${index === 0 ? `bg-black text-white` : `` } text-xs`}>{color}</div>
                                })}
                            </div>
                        </div>

                        <div className="">
                            <div className="text-sm font-semibold">- Card Type</div>
                            <div className="flex gap-2 font-semibold">
                                {cardTypeFilterData.map((cardType, index) => {
                                    return <div key={index} className={`${index === 0 ? "" : `border-2` } px-3.5 py-0.5 ${index === 0 ? `bg-black text-white` : `` } text-xs`}>{cardType}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Filters */}
                    <div className="flex justify-between">
                        <div className="">
                            <div className="text-sm font-semibold">- Illustration Type</div>
                            <div className="flex gap-2 font-semibold">
                                {illustationTypeFilterData.map((illustration, index) => {
                                    return <div key={index} className={`${index === 0 ? "" : `border-2` } px-5.5 py-0.5 ${index === 0 ? `bg-black text-white` : `` } text-xs`}>{illustration}</div>
                                })}
                            </div>
                        </div>

                        <div className="">
                            <div className="text-sm font-semibold">- Block Icon</div>
                            <div className="flex gap-2.5 font-semibold">
                                {blockIconFilterData.map((num, index) => {
                                    return <div key={index} className={`${index === 0 ? "" : `border-2` } px-[26px] py-0.5 ${index === 0 ? `bg-black text-white` : `` } text-xs`}>{num}</div>
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                        <div className="border-2 h-5 w-5"></div>
                        <div className="text-sm font-semibold tracking-tight">Hide reprint cards</div>
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm px-4 py-2.5 bg-olive-500 flex justify-center items-center text-white rounded-full">
                            <div className="flex-1"></div>
                            <div className="font-semibold text-sm tracking-tighter">SEARCH</div>
                            <div className="flex-1 flex justify-end items-center">
                                <i className='bx bx-search text-xl' ></i>
                            </div>
                        </div>
                    </div>

                </div>


                </div>
        
        </>
    )
}

export default FilterSearch;