const Hero = () => {
    return (
        <section className="relative h-screen w-full pt-[120px]">
            {/* Background image / video */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center h-full px-6 lg:px-[150px] text-white">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Experience African Tea
                </h1>
            </div>
        </section>
    )
}

export default Hero
