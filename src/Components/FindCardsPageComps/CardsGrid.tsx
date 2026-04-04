

function CardsGrid(){

    return(
        <>
            {/* Cards Grid */}
            <div className="mt-4 md:mt-8 lg:mt-6 grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                {Array.from({length: 20}).map((_, index) => {
                    return <div key={index} className={`border aspect-[2/3] md:aspect-[3/4] bg-blue-300 rounded-md`}></div>
                })}
            </div>
        </>
    )
}

export default CardsGrid;