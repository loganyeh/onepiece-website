
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
                        <div className="font-medium text-sm xl:text-2xl 2xl:text-4xl">ONE PIECE</div> 
                        <div className="font-light text-[8px] xl:text-xs 2xl:text-lg">CARD GAME</div> 
                    </div> 

                    {/* Dropdowns NAV */}
                    <div className="flex gap-2.5 xl:gap-4 2xl:gap-8">
                        {headerNavData.map((data, index) => {
                            return <div key={index} className="flex gap-1 xl:gap-2 2xl:gap-4 items-center shrink-0">
                                        <div className={`${index === 0 || index === 2 ? "border 2xl:h-8 2xl:w-8" : ""} flex justify-center items-center rounded-full`}><i className={`${data.icon} xl:text-xl 2xl:text-3xl`} ></i></div>
                                        <div className="text-[9px] xl:text-xs 2xl:text-lg font-medium 2xl:font-semibold">{data.text}</div>
                                        {data.dropdownArrow ? (<i className='bx bxs-down-arrow text-[8px] 2xl:text-xs' ></i>) : ""}
                                    </div>
                        })}
                    </div>

                    {/* Search Bar */}
                    <form className="px-2 xl:px-3.5 2xl:px-5 py-0.5 xl:py-1 2xl:py-1.5 flex items-center bg-gray-200 rounded-2xl">
                        <input type="text" placeholder="Search for cards" className="w-20 xl:w-32 2xl:w-40 text-[9px] xl:text-xs 2xl:text-base font-medium" />
                        <i className='bx bx-search text-xs 2xl:text-xl' ></i>
                    </form>

                    {/* Language Settings */}
                    <div className="flex gap-1 items-center">
                        <i className='bx bx-world text-xs xl:text-xl' ></i>
                        <div className="font-normal text-[8px] xl:text-xs">English</div>
                        <div className="text-[7px] xl:text-[10px]">- NA/EU/OC/LATAM/ME</div>
                        <i className='bx bxs-down-arrow text-[6px] xl:text-[8px]' ></i>
                    </div>

                    <div className="flex gap-2 xl:gap-3">
                        <i className='bx bxl-youtube xl:text-2xl' ></i>
                        <i className='bx bxl-twitter xl:text-2xl' ></i>
                    </div>


                </div> 











                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-3">

                    {/* Card List Title */}
                    <div className="h-36 flex flex-col justify-center items-center">
                        <div className="text-4xl font-bold tracking-tighter">CARD LIST</div>
                        <i className='bx bx-anchor text-2xl'></i>
                    </div>

                    {/* Filter Search */}
                    <div className="max-w-6xl px-4 py-5 bg-white shadow-md">
                        <div className="flex flex-col gap-5">

                            {/* Search */}
                            <div className="border-b w-full pb-1 flex justify-between items-center">
                                <div className="text-sm text-gray-400 font-semibold tracking-wide">Search ...</div>
                                <div className="flex justify-center items-center"><i className='bx bx-search text-xl text-zinc-800'></i></div>
                            </div>

                            {/* Pack Set Name */}
                            <div className="border-b pb-2 flex justify-between">
                                <div className="flex-1 text-sm font-semibold">
                                    BOOSTER PACK<br />
                                    - ADVENTURE ON KAMI'S ISLAND<br />
                                    [OP15-EB04]
                                </div>
                                <div className="w-5 flex justify-center items-center shrink-0"><i className='bx bxs-down-arrow'></i></div>
                            </div>

                            {/* Add More Button */}
                            <div className="relative h-10 w-full bg-black flex justify-center items-center text-white rounded-3xl">
                                <div className="font-semibold">Add more</div>
                                <div className="absolute right-4 flex items-center"><i className='bx bx-plus text-xl' ></i></div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-center gap-1">
                                <div className="border-2 h-5 w-5"></div>
                                <div className="text-[13px] font-semibold tracking-tight">Hide reprint cards</div>
                            </div>

                            {/* Search Button */}
                            <div className="relative py-2 bg-yellow-700 flex justify-center items-center text-white rounded-3xl">
                                <div className="font-semibold">Search</div>
                                <div className="absolute right-4 flex items-center"><i className='bx bx-search text-xl' ></i></div>
                            </div>

                        </div>
                    </div>

                    {/* Search Results Arrows */}
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex gap-1.5">
                            <div className="border flex items-center px-2 gap-1 bg-white text-xs font-bold rounded-xl "><span className="font-light text-[11px]">X</span> Clear</div>
                            <div className="font-bold">196 Results</div>
                        </div>

                        <div className="h-8 flex justify-between items-center bg-white">
                            <button className="border-r w-12 flex justify-center items-center"><i className='bx bxs-left-arrow text-gray-400 text-sm' ></i></button>
                            <div className="w-12 flex justify-center items-center text-xs font-bold">1/11</div>
                            <button className="border-l w-12 flex justify-center items-center"><i className='bx bxs-right-arrow text-black text-sm' ></i></button>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {Array.from({length: 18}).map((_, index) => {
                            return <div key={index} className="border h-36 rounded-md"></div>
                        })}
                    </div>
                    
                    {/* Page Selector */}
                    <div className="relative h-10 mt-6 flex justify-center items-center bg-white shadow">
                        <button className="border-r border-gray-800 absolute left-3 h-4 w-8 flex justify-start items-center"><i className='bx bxs-left-arrow text-gray-400 text-sm' ></i></button>
                        <div className="text-xs font-semibold">1/11</div>
                        <button className="border-l border-gray-800 absolute right-3 h-4 w-8 flex justify-end items-center"><i className='bx bxs-right-arrow text-zinc-900 text-sm' ></i></button>
                    </div>

                    {/* Advertisement Placements */}
                    <div className="border-4 border-yellow-500 h-32 max-w-6xl p-4 mt-16 flex gap-5 bg-blue-950">
                        <div className="flex-1 bg-white flex justify-center items-center">Ad# 1</div>
                        <div className="flex-1 bg-white flex justify-center items-center">Ad# 2</div>
                    </div>

                    {/* Splash Art */}
                    <div className="border h-96 mt-16 -mx-3 flex justify-center items-center">Luffy Splash Art</div>

                </div>

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