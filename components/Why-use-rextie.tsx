import ButtonSecondary from "./UI/ButtonSecondary";

const WhyUseRextie = () => {
    return (
        <section className="flex max-w-[1100px] py-[60px] mx-auto">
            <div className="flex w-1/2 justify-center">
                <div className="flex flex-col content-center items-baseline max-w-[570px] h-full max-h-[500px] rounded-[8px] p-5">
                    <div className="overflow-hidden rounded-[8px]">
                        <table className="w-full">
                            <tbody>
                                <tr style={{ backgroundColor: '#0032ff' }}>
                                    <td className="p-[10px] w-[240px]">
                                        <div className="flex">
                                            <img src="/images/rextie-white.svg" alt="rextie-logo" className="block align-middle h-[25px] mt-[6px] max-w-full" />
                                        </div>
                                    </td>
                                    <td className="p-[10px] text-center">
                                        <div className="text-white text-xs font-sans">
                                            Compra
                                        </div>
                                        <strong className="text-white text-sm font-sans">S/ 3,7795</strong>
                                    </td>
                                    <td className="p-[10px] text-center">
                                        <div className="text-white text-xs font-sans">
                                            Venta
                                        </div>
                                        <strong className="text-white text-sm font-sans">S/ 3,8065</strong>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#f7f8fb' }}>
                                    <td className="p-[10px]">
                                        <div className="flex">
                                            <img src="/images/sunat.svg" alt="rextie-logo" className="block align-middle h-[25px] mt-[6px] max-w-full" />
                                        </div>
                                    </td>
                                    <td className="p-[10px] text-center">
                                        <div>
                                            <strong className="text-xs font-sans text-stratos-fuente">S/ 3,7795</strong>
                                        </div>
                                    </td>
                                    <td className="p-[10px] text-center">
                                        <div>
                                            <strong className="text-xs font-sans text-stratos-fuente">S/ 3,7795</strong>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#f7f8fb' }}>
                                    <td className="p-[10px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/images/bank-svgrepo-com.svg"
                                                alt="rextie-logo"
                                                className="block align-middle h-[26px] w-[20px] fill-current text-stratos-fuente max-w-full"
                                            />
                                            <span className="text-xs font-sans text-stratos-fuente">Bancos*</span>
                                        </div>
                                    </td>

                                    <td className="p-[10px] text-center">
                                        <div>
                                            <strong className="text-xs font-sans text-stratos-fuente">S/ 3,7795</strong>
                                        </div>
                                    </td>
                                    <td className="p-[10px] text-center">
                                        <div>
                                            <strong className="text-xs font-sans text-stratos-fuente">S/ 3,7795</strong>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <small className="font-sans text-[10px]">*Precios referenciales</small>
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 items-center content-center gap-[20px]">
                <div className="mr-[25px]">
                    <p className="flex justify-start items-end gap-[10px] text-stratos-accent text-[16px] font-sans font-bold">
                        <span style={{ backgroundColor: '#00c8ff', borderRadius: '50%' }} className="block w-[15px] h-[15px] mb-1"></span>REXTIE BUSINESS
                    </p>
                    <h2 className="pr-5 my-[5px] text-[34px]  text-stratos-accent font-sans font-bold">Tenemos un tipo de cambio exclusivo</h2>

                    <p className="pr-[60px] my-[14px] text-[14px] font-sans "> Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online. </p>
                    <ButtonSecondary label="Conocer más" alternate={true} className="" />
                </div>
            </div>
        </section>
    );
}

export default WhyUseRextie;
