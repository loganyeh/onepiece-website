

function AdBox(){
    
    return(
        <>
            {/* Advertisement Placements */}
            <div className="mt-16 md:mt-32 lg:mt-12 xl:mt-20 flex justify-center">
                <div className="border-4 md:border-8 lg:border-3 xl:border-5 2xl:border-6 border-yellow-500 w-full max-w-3xl lg:max-w-sm xl:max-w-lg p-3 md:p-6 lg:p-3 xl:p-4 flex gap-4 md:gap-8 lg:gap-4 xl:gap-5 bg-blue-950">
                    <div className="flex-1 py-10 md:py-20 lg:py-10 xl:py-14 bg-white flex justify-center items-center">Ad# 1</div>
                    <div className="flex-1 py-10 md:py-20 lg:py-10 xl:py-14 bg-white flex justify-center items-center">Ad# 2</div>
                </div>
            </div>
        </>
    )
}

export default AdBox;