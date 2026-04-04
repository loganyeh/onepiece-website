type FooterData = {
    icon: string;
    text: string;
    plusSign: boolean;
}

function Footer(){
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
            {/* Footer */}
            <div className="m-w-6xl p-4 md:p-10 lg:p-4 flex flex-col gap-4 md:gap-8 lg:gap-0 lg:grid lg:grid-cols-12 bg-blue-950 text-white">

                {/* Social Media */}
                <div className="flex gap-4 md:gap-16 lg:gap-4 lg:col-start-11 lg:col-span-2 text-5xl md:text-8xl lg:text-3xl">
                    <i className='bx bxl-facebook-circle' />
                    <i className='bx bxl-twitter' />
                    <i className='bx bxl-youtube' />
                </div>

                {/* Language */}
                <div className="w-fit px-4 py-1 flex items-center gap-1.5 bg-gray-900 rounded-3xl
                md:px-8 md:py-3.5 md:gap-5 md:rounded-full
                lg:h-8 lg:mt-8 lg:px-3 lg:py-1 lg:gap-1.5 lg:col-start-10 lg:col-span-4 lg:row-start-3 lg:items-start">
                    <i className='bx bx-world text-3xl md:text-5xl lg:text-xl' ></i>
                    <div className="font-light md:text-3xl lg:text-sm">English</div>
                    <div className="text-xs md:text-2xl lg:text-[10px] tracking-wider">- NA/EU/OC/LATAM/ME</div>
                    <i className='bx bxs-down-arrow text-lg md:text-2xl lg:text-[10px]' ></i>
                </div>

                {/* Extra Info */}
                <div className="flex gap-1 md:gap-2 lg:gap-0 flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:col-start-6 lg:col-span-8"> 
                    {footerInfo.map((data, index) => {
                        // return <div key={index} className={`${index === 7 ? "" : "border-b-2 border-blue-600"} h-12 mt-1 flex justify-between items-center`}>
                        return <div key={index} className={`${index === 7 ? "" : "border-b-2 md:border-b-4 lg:border-0 border-blue-600"} py-3 md:py-6 flex justify-between lg:justify-start items-center`}>
                                    <div className="flex gap-3 md:gap-8 lg:gap-3">
                                        <div className={`${index === 0 || index === 2 ? `border` : ``} h-5 w-5 md:p-5 lg:p-0 flex justify-center items-center rounded-full`}><i className={`bx ${data.icon} text-xl md:text-5xl lg:text-xl`} ></i></div>
                                        <div className="text-sm md:text-3xl lg:text-sm">{data.text}</div>
                                    </div>
                                    {data.plusSign && (
                                        <i className='bx bx-plus p-0.5 md:p-2 bg-gray-900 lg:bg-blue-950 text-xl md:text-4xl lg:text-blue-950 rounded-full' ></i>)
                                    }
                                </div>
                    })}
                </div>

                {/* Fint Print */}
                <div className="flex gap-6 md:gap-10 lg:gap-6 lg:col-start-10 lg:col-span-3 lg:row-start-3 text-[10px] md:text-xl lg:text-[10px] lg:font-light">
                    <div>FOR INQUIRES</div>
                    <div>COOKIE POLICY</div>
                </div>

                {/* Logo */}
                <div className="mt-4 md:mt-8 lg:mt-0 flex flex-col items-center lg:row-start-2 lg:col-start-1 lg:col-span-5">
                    <div className="flex flex-col justify-start items-center">
                        <div className="text-4xl md:text-7xl lg:text-6xl font-medium">ONE PIECE</div>
                        <div className="text-lg md:text-4xl lg:text-3xl font-extralight md:font-thin md:tracking-widest">Card Game</div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-2 md:mt-4 lg:mt-0 flex flex-col lg:col-start-1 lg:col-span-4 gap-5 md:gap-10 lg:gap-4 md:font-light md:tracking-wide lg:tracking-normal text-[10px] md:text-xl lg:text-[8px] leading-loose">
                    <div>
                        ©Eiichiro Oda/Shueisha<br /> 
                        ©Eiichiro Oda/Shueisha, Toei Animation
                    </div>

                    <div className="leading-loose">
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
                <div className="mt-3 md:mt-6 lg:mt-20 flex gap-3 lg:col-start-10 lg:col-span-3 lg:row-start-3 text-4xl md:text-7xl lg:text-4xl">
                    <i className='bx bxl-imdb'></i>
                    <i className='bx bxl-microsoft'></i>
                    <i className='bx bxl-adobe'></i>
                    <i className='bx bxl-slack'></i>
                </div>

            </div>
        </>
    )
}

export default Footer;