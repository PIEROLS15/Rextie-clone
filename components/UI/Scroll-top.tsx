'use client'
const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section>
            <div className="max-w-[1300px] m-auto relative px-[20px]">
                <hr className="w-full h-[3px] bg-stratos-accent my-[20px]" />
                <button
                    onClick={scrollToTop}
                    className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] px-[11px] bg-stratos-accent cursor-pointer h-[48px]"
                >
                    <img src="images/v-up.svg" alt="Scroll to top" />
                </button>
            </div>
        </section>
    );
};

export default ScrollTop;
