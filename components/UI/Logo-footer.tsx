const LogoFooter = () => {
    return (
        <section className="flex flex-col gap-[1rem] w-[297.63px] mx-auto">

            <div className="flex font-sans mt-[10px] justify-start order-1 md:order-2 mx-auto md:mx-0">
                <a href="#" className="pr-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path fill-rule="evenodd" d="M2.853 5.719c1.023 0 1.853-.832 1.853-1.86S3.876 2 2.853 2 1 2.832 1 3.859s.83 1.86 1.853 1.86zM1 19h3.706V7.313H1V19zm17.998-6.531c-.002-1.087-.16-2.148-.697-3.116-.459-.828-1.131-1.421-2.026-1.751-.759-.281-1.544-.346-2.342-.242-.82.107-1.539.434-2.115 1.036-.127.132-.241.271-.359.415l-.282.333V7.548H7.353v.029V19h3.824v-6.346c0-.281.011-.569.088-.832.232-.783 1.129-1.439 2.047-1.5.887-.059 1.714.352 2.013 1.189.135.379.171.771.2 1.167V19h1.413 2.056H19v-6.336l-.002-.152h0v-.043z"
                            fill="#707e9b">
                        </path>
                    </svg>
                </a>

                <a href="#" className="pr-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path fill-rule="evenodd" d="M14.618 6.948l-.213 2.699h-2.873V19H7.931V9.647H6V6.948h1.931V5.15c0-.808.023-2.027.621-2.795C9.185 1.545 10.051 1 11.533 1 13.971 1 15 1.34 15 1.34l-.487 2.753s-.79-.229-1.555-.229c-.741 0-1.426.259-1.426.991v2.093h3.086z"
                            fill="#707e9b">
                        </path>
                    </svg>
                </a>

                <a href="#" className="pr-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path d="M18.298 4.124C17.649 3.326 16.449 3 14.158 3H5.842c-2.343 0-3.563.347-4.211 1.196C1 5.025 1 6.246 1 7.935v3.22c0 3.273.749 4.935 4.842 4.935h8.316c1.987 0 3.088-.287 3.8-.992.73-.722 1.042-1.902 1.042-3.943v-3.22c0-1.782-.049-3.01-.702-3.812zm-5.742 5.961L8.78 12.152a.56.56 0 0 1-.57-.019c-.174-.11-.28-.308-.28-.52V7.492c0-.212.106-.409.279-.52a.56.56 0 0 1 .569-.02l3.776 2.054c.192.104.313.312.313.539s-.12.435-.312.54z"
                            fill="#707e9b">
                        </path>
                    </svg>
                </a>

                <a href="#" className="pr-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path d="M14.44 3.82s.51.5 0 0A4.28 4.28 0 0 1 13.38 1h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.61 2.61 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V7.66C5.02 7.2 2 9.88 2 13.3 2 16.63 4.76 19 7.69 19c3.14 0 5.69-2.55 5.69-5.7V7.01a7.35 7.35 0 0 0 4.3 1.38V5.3s-1.88.09-3.24-1.48z"
                            fill="#707e9b">
                        </path>
                    </svg>
                </a>

                <a href="#" className="pr-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                        <path fill-rule="evenodd" d="M13.375 1h-6.75C3.519 1 1 3.519 1 6.625v6.75C1 16.481 3.519 19 6.625 19h6.75C16.481 19 19 16.481 19 13.375v-6.75C19 3.519 16.481 1 13.375 1zM10 5.235c-2.631 0-4.765 2.133-4.765 4.765S7.369 14.765 10 14.765s4.765-2.133 4.765-4.765S12.631 5.235 10 5.235zm0 7.743c-1.641 0-2.978-1.336-2.978-2.978A2.98 2.98 0 0 1 10 7.022 2.98 2.98 0 0 1 12.978 10c0 1.641-1.336 2.978-2.978 2.978zm5.559-8.009A1.06 1.06 0 0 1 14.5 6.028a1.06 1.06 0 0 1-1.059-1.059A1.06 1.06 0 0 1 14.5 3.91a1.06 1.06 0 0 1 1.059 1.059z"
                            fill="#707e9b">
                        </path>
                    </svg>
                </a>
            </div>

            <div className="flex flex-row md:flex-col gap-[10px] justify-center mb-[5px] items-center md:items-start font-sans order-2 md:order-1">
                <div>
                    <img src="images/rextie.svg" alt="" className="w-[90px] h-[30px]" />
                </div>
                <div className="w-[1px] h-[30px] bg-[#d0d6e3] block md:hidden"></div>

                <div className="font-sans">
                    <p className="mb-[6px] text-[12px] text-stratos-info">Rextie S.A.C.</p>
                    <p className="mb-[6px] text-[12px] font-bold text-stratos-info">RUC 20601030013</p>
                </div>
            </div>

        </section>

    );
}

export default LogoFooter;