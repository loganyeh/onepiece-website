
// types
type FooterData = {
    icon: string;
    text: string;
    plusSign: boolean;
}
// header Data type for breakpoint LG @ Laptops
type HeaderDM = {
    icon: string;
    text: string;
    dropdownArrow: boolean;
}

function FindCardsPage(){
    const footerInfo: FooterData[] = [
        {icon: `bx bx-question-mark`, text: "FOR BEGINNERS", plusSign: true},
        {icon: `bx bxs-book-alt`, text: "RULES", plusSign: true},
        {icon: `bx bx-question-mark`, text: "FAQ", plusSign: false},
        {icon: `bx bx-news`, text: "NEWS", plusSign: false},
        {icon: `bx bxs-package`, text: "PRODUCTS", plusSign: true},
        {icon: `bx bxs-ship`, text: "EVENTS", plusSign: false},
        {icon: `bx bx-file-find`, text: "CARDS", plusSign: true},
        {icon: `bx bx-shopping-bag`, text: "SHOP", plusSign: true},
    ]

    const headerNavData: HeaderDM[] = [
        {icon: `bx bx-question-mark`, text: "FOR BEGINNERS", dropdownArrow: true},
        {icon: `bx bxs-book-alt`, text: "RULES", dropdownArrow: true},
        {icon: `bx bx-question-mark`, text: "FAQ", dropdownArrow: false},
        {icon: `bx bx-news`, text: "NEWS", dropdownArrow: false},
        {icon: `bx bxs-package`, text: "PRODUCTS", dropdownArrow: true},
        {icon: `bx bxs-ship`, text: "EVENTS", dropdownArrow: false},
        {icon: `bx bx-file-find`, text: "CARDS", dropdownArrow: true},
        {icon: `bx bx-shopping-bag`, text: "SHOP", dropdownArrow: true},
    ]
    
    // Varaibles for Search Filter Section @ Breakpoint LG
    const colorFilterData = ["ALL", "Red", "Green", "Blue", "Purple", "Black", "Yellow", "Multicolor"];
    const cardTypeFilterData = ["ALL", "Leader", "Chracter", "Stage", "Event"];
    const illustationTypeFilterData = ["ALL", "Comic", "Animation", "Original Illustrations", "Other"];
    const blockIconFilterData = ["ALL", "1", "2", "3", "4"];

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Mobile and Tablet Header */} 
                <div className="px-3 py-2 md:p-6 lg:hidden flex justify-between items-center bg-white"> 
                    {/* Logo */} 
                    <div className="flex flex-col items-center"> 
                        <div className="font-medium text-2xl md:text-6xl">ONE PIECE</div> 
                        <div className="font-light text-sm md:text-2xl md:tracking-wider">CARD GAME</div> 
                    </div> 
                    {/* Menu */} 
                    <i className='bx bx-menu text-4xl md:text-7xl' ></i>
                </div> 

                {/* Laptop Header */} 
                <div className="hidden p-2 xl:px-4 lg:flex gap-3 xl:gap-4 2xl:justify-around items-center bg-white"> 
                {/* <div className="hidden p-2 xl:px-4 lg:flex justify-between items-center bg-white">  */}

                    {/* Logo */} 
                    <div className="flex flex-col items-center shrink-0"> 
                        <div className="font-medium text-sm xl:text-2xl 2xl:text-3xl">ONE PIECE</div> 
                        <div className="font-light text-[8px] xl:text-xs 2xl:text-base">CARD GAME</div> 
                    </div> 

                    {/* Dropdowns NAV */}
                    <div className="flex gap-2.5 xl:gap-4">
                        {headerNavData.map((data, index) => {
                            return <div key={index} className="flex gap-1 xl:gap-2 2xl:gap-3 items-center shrink-0">
                                        <div className={`${index === 0 || index === 2 ? "border 2xl:h-6 2xl:w-6" : ""} flex justify-center items-center rounded-full`}><i className={`${data.icon} xl:text-xl 2xl:text-2xl`} ></i></div>
                                        <div className="text-[9px] xl:text-xs 2xl:text-sm font-medium">{data.text}</div>
                                        {data.dropdownArrow ? (<i className='bx bxs-down-arrow text-[8px] 2xl:text-[10px]' ></i>) : ""}
                                    </div>
                        })}
                    </div>

                    {/* Search Bar */}
                    <form className="px-2 xl:px-3.5 2xl:px-4 py-0.5 xl:py-1 2xl:py-1.5 flex items-center bg-gray-200 rounded-2xl">
                        <input type="text" placeholder="Search for cards" className="w-20 xl:w-32 2xl:w-40 text-[9px] xl:text-xs 2xl:text-sm font-medium" />
                        <i className='bx bx-search text-xs 2xl:text-base' ></i>
                    </form>

                    {/* Language Settings */}
                    <div className="flex gap-1 items-center">
                        <i className='bx bx-world text-xs xl:text-xl 2xl:text-2xl' ></i>
                        <div className="font-normal text-[8px] xl:text-xs 2xl:text-base">English</div>
                        <div className="text-[7px] xl:text-[10px] 2xl:text-xs">- NA/EU/OC/LATAM/ME</div>
                        <i className='bx bxs-down-arrow text-[6px] xl:text-[8px] 2xl:text-[10px]' ></i>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-2 xl:gap-3 2xl:gap-5">
                        <i className='bx bxl-youtube xl:text-2xl 2xl:text-4xl' ></i>
                        <i className='bx bxl-twitter xl:text-2xl 2xl:text-4xl' ></i>
                    </div>


                </div> 

                {/* Home -> Card List @ Breakpoint XL */}
                <div className="hidden px-6 xl:flex mt-8 2xl:mt-4 items-center gap-3 text-amber-500 font-medium text-sm">
                    <div>HOME</div> 
                    <i className='bx bxs-right-arrow text-xs' ></i>
                    <div>CARD LIST</div>
                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-3 lg:px-0 xl:px-14">

                    {/* CARD LIST TITLE */}
                    <div className="py-10 md:py-16 lg:pt-10 xl:pt-10 lg:pb-12 text-center">
                        {/* Home -> Card List @ Breakpoint LG */}
                        <div className="hidden px-6 lg:flex xl:hidden items-center gap-3 text-amber-500 font-medium text-sm">
                            <div>HOME</div> 
                            <i className='bx bxs-right-arrow text-xs' ></i>
                            <div>CARD LIST</div>
                        </div>
                        {/* TITLE */}
                        <div className="text-[32px] md:text-7xl lg:text-5xl lg:mt-8 xl:mt-0 font-bold tracking-wide md:tracking-tighter leading-tight">CARD LIST</div>
                        <i className='bx bx-anchor text-3xl md:text-5xl lg:text-3xl'></i>
                    </div>

                    {/* Filter Search */}
                    <div className="max-w-6xl px-4 md:px-8 py-5 md:py-14 lg:pt-10 lg:pb-5 bg-white shadow-md">

                        {/* Filter Search Up to Tablet MD */}
                        <div className="lg:hidden flex flex-col gap-5 md:gap-10">

                            {/* Search */}
                            <div className="border-b pb-1 md:pb-3 flex justify-between items-center">
                                <div className="text-sm md:text-3xl text-gray-300 font-semibold tracking-wide">Search ...</div>
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
                                    <div className="text-sm text-gray-300 font-semibold tracking-wide">Search ...</div>
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
                                <div className="relative w-full max-w-sm px-4 py-2.5 bg-olive-500 flex justify-center items-center text-white rounded-full">
                                    <div className="font-semibold text-sm tracking-tighter">SEARCH</div>
                                    <i className='absolute right-4 bx bx-search text-xl' ></i>
                                </div>
                            </div>

                        </div>


                    </div>

                    {/* Search Results Arrows */}
                    <div className="mt-5 md:mt-10 lg:mt-6 flex justify-between items-center">
                        <div className="flex gap-1.5 md:gap-4 lg:gap-3">
                            <div className="border flex items-center px-2.5 md:px-4 lg:px-2.5 py-0.5 md:py-1 lg:py-1.5 gap-1 md:gap-2 lg:gap-1.5 bg-white text-xs md:text-2xl lg:text-xs font-bold md:font-semibold rounded-xl md:rounded-full"><span className="font-light md:font-medium text-[11px] md:text-lg lg:text-[11px]">X</span> Clear</div>
                            <div className="flex items-center font-bold text-center text-sm md:text-3xl lg:text-xl">196 Results</div>
                        </div>

                        {/* page nav HIDDEN at breakpoint lg */}
                        <div className="py-2 md:py-4 flex lg:hidden justify-between items-center bg-white">
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

                    {/* Cards Grid */}
                    <div className="mt-4 md:mt-8 lg:mt-6 grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                        {Array.from({length: 20}).map((_, index) => {
                            return <div key={index} className={`border aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md`}></div>
                        })}
                    </div>
                    
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

                    {/* Advertisement Placements */}
                    <div className="mt-16 md:mt-32 lg:mt-12 xl:mt-20 flex justify-center">
                        <div className="border-4 md:border-8 lg:border-3 xl:border-5 2xl:border-6 border-yellow-500 w-full max-w-3xl lg:max-w-sm xl:max-w-lg p-3 md:p-6 lg:p-3 xl:p-4 flex gap-4 md:gap-8 lg:gap-4 xl:gap-5 bg-blue-950">
                            <div className="flex-1 py-10 md:py-20 lg:py-10 xl:py-14 bg-white flex justify-center items-center">Ad# 1</div>
                            <div className="flex-1 py-10 md:py-20 lg:py-10 xl:py-14 bg-white flex justify-center items-center">Ad# 2</div>
                        </div>
                    </div>

                </div>

                {/* Splash Art */}
                <div className="border h-96 mt-16 flex justify-center items-center">Luffy Splash Art</div>

                {/* Footer */}
                <div className="border h-auto m-w-6xl p-4 bg-blue-950 text-white">

                    {/* Social Media */}
                    <div className="w-55 flex justify-around items-center">
                        <i className='bx bxl-facebook-circle text-5xl' />
                        <i className='bx bxl-twitter text-5xl' />
                        <i className='bx bxl-youtube text-5xl' />
                    </div>

                    {/* Language */}
                    <div className="h-10 w-[296px] mt-4 px-4 py-1 bg-gray-900 rounded-3xl flex justify-between items-center">
                        <i className='bx bx-world text-3xl' ></i>
                        <div className="font-normal">English</div>
                        <div className="text-xs tracking-wider">- NA/EU/OC/LATAM/ME</div>
                        <i className='bx bxs-down-arrow text-lg' ></i>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-4"> 
                        {footerInfo.map((data, index) => {
                            return <div key={index} className={`${index === 7 ? "" : "border-b-2 border-blue-600"} h-12 mt-1 flex justify-between items-center`}>
                                        <div className="flex items-start gap-3">
                                            <div className={`${index === 0 || index === 2 ? `border` : ``} h-5 w-5 flex justify-center items-center rounded-full`}><i className={`bx ${data.icon} text-xl`} ></i></div>
                                            <div className="text-sm">{data.text}</div>
                                        </div>
                                        {data.plusSign 
                                            ? 
                                            <div className="h-5 w-5 flex justify-center items-center bg-gray-900 rounded-full"><i className='bx bx-plus text-xl' ></i></div>
                                            : 
                                            ""
                                        }
                                    </div>
                        })}
                    </div>
                    
                    {/* Fint Print */}
                    <div className="h-6 mt-4 flex justify-start gap-4">
                        <div className="text-[10px]">FOR INQUIRES</div>
                        <div className="text-[10px]">COOKIE POLICY</div>
                    </div>

                    {/* Logo */}
                    <div className="mt-6">
                        <div className="text-4xl font-medium">ONE PIECE</div>
                        <div className="ml-12 text-lg font-extralight">Card Game</div>
                    </div>

                    {/* Copyright */}
                    <div className="text-[10px] mt-6 leading-loose">
                        <div>
                            ©Eiichiro Oda/Shueisha<br /> 
                            ©Eiichiro Oda/Shueisha, Toei Animation
                        </div>

                        <div className="mt-6 leading-loose">
                            All images, text and data on this website may not be reproduced<br />
                            without permission.<br />
                            Please note that the images used on this website may differ from<br /> 
                            the actual product as it is still under development.<br />
                            *Apple, and the Apple logo are trademarks of Apple Inc. in North<br /> 
                            America or the local region. App Store is Apple Inc.’s service mark.<br />
                            *Google Play and the Google Play logo are trademarks or<br /> 
                            registered trademarks of Google LLC.
                        </div>
                    </div>

                    {/* Trademarks */}
                    <div className="h-10 mt-6 flex gap-2">
                        <i className='bx bxl-imdb text-4xl'></i>
                        <i className='bx bxl-microsoft text-4xl'></i>
                        <i className='bx bxl-adobe text-4xl'></i>
                        <i className='bx bxl-slack text-4xl'></i>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FindCardsPage;