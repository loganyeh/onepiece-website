
// types
type FooterData = {
    icon: string;
    text: string;
    plusSign: boolean;
}

function FindCardsPage(){
    // type FooterInfo = {
    //     info: FooterData[];
    // };
    // const FooterInfo = {
    //     info: FooterData[];
    // };
    // LOOK UP WHY I DID THE TOP

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

    return(
        <>
            <div className="min-h-screen bg-gray-50">

                {/* Header */} 
                <div className="border relative h-14 flex items-center bg-white"> 
                    {/* Logo */} 
                    <div className="absolute left-3"> 
                        <div className="font-medium text-2xl">ONE PIECE</div> 
                        <div className="ml-4 font-light text-sm">CARD GAME</div> 
                    </div> 
                    {/* Menu */} 
                    <div className="absolute right-4 text-4xl">=</div> 
                </div>
                {/* CHECK THIS MAKE SURE WHICH ONE IS BETTER /AFTER/ */}  

                {/* LEFT OFF HERE */}
                {/* Header */} 
                <div className="border h-14 w-full flex justify-between bg-white"> 
                    {/* Logo */} 
                    <div className="border h-full flex justify-start items-center"> 
                        <div className="font-bold text-2xl">ONE PIECE</div> 
                        <div className="font-bold text-2xl">CARD GAME</div> 
                    </div> 

                    {/* Menu */} 
                    <div className="border h-full flex justify-end items-center"> 
                        <div className="border h-full flex justify-center items-center text-4xl">=</div> 
                    </div> 
                </div>

                {/* Page Container */}
                <div className="min-h-screen max-w-6xl mx-auto px-3">

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

                    {/* Search Results Arrows */}
                    <div className="border h-14"></div>

                    {/* Cards Grid */}
                    <div className="h-[850px] grid grid-cols-3 gap-3">
                        {Array.from({length: 15}).map((_, index) => {
                            return <div key={index} className="border rounded-md"></div>
                        })}
                    </div>
                    
                    {/* Page Selector */}
                    <div className="relative h-10 mt-8 flex justify-center items-center bg-white rounded-md shadow">
                        <button className="border-r border-gray-800 absolute left-3 h-4 w-8 flex justify-start items-center"><i className='bx bxs-left-arrow text-gray-400 text-sm' ></i></button>
                        <div className="text-xs font-semibold">1/11</div>
                        <button className="border-l border-gray-800 absolute right-3 h-4 w-8 flex justify-end items-center"><i className='bx bxs-right-arrow text-zinc-900 text-sm' ></i></button>
                    </div>

                    {/* Image */}
                    <div className="border-4 border-yellow-500 h-32 mt-18 flex justify-around items-center bg-blue-950">
                        <div className="h-24 w-36 bg-white flex justify-center items-center">Ad#1</div>
                        <div className="h-24 w-36 bg-white flex justify-center items-center">Ad#2</div>
                    </div>

                    {/* Splash Art */}
                    <div className="border h-96 mt-16 flex justify-center items-center">Luffy Splash Art</div>

                    {/* Footer */}
                    <div className="border h-auto m-w-6xl p-4 bg-blue-950 text-white">
                    {/* <div className="border min-h-96 p-5"> */}

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
                                                <div className={`${index === 0 || index === 2 ? `border` : ``} h-6 w-6 flex justify-center rounded-full`}><i className={`bx ${data.icon} text-xl`} ></i></div>
                                                {/* <div className="h-6 w-6 flex justify-center items-center rounded-full"><i className={`bx ${data.icon} text-xl`} ></i></div> */}
                                                <div className="text-sm">{data.text}</div>
                                            </div>
                                            {data.plusSign 
                                                ? 
                                                <div className="h-6 w-6 flex justify-center items-center bg-gray-900 rounded-full"><i className='bx bx-plus text-xl' ></i></div>
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

            </div>
        </>
    )
}

export default FindCardsPage;