

function CardListTitle(){

    return(
        <>
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
        </>
    )
}

export default CardListTitle;