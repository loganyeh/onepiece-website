// header Data type for breakpoint LG @ Laptops
type HeaderDM = {
    icon: string;
    text: string;
    dropdownArrow: boolean;
}

function HeaderFindCardsPage(){
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
        </>
    )
}

export default HeaderFindCardsPage;