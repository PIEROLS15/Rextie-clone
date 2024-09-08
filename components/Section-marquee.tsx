'use client';

const SectionMarquee = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slideAnimation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animation-slide {
          animation: slideAnimation 20s linear 1s infinite normal;
        }
      `}</style>

      <section className="bg-stratos-accent p-[10px] overflow-hidden whitespace-nowrap">
        <div className="inline-block animation-slide">
          <div className="flex items-center gap-[20px] text-[24px] text-white font-sans">
            <span className="block rounded-[50%] w-[15px] h-[15px] mb-[4px] ml-[80px] font-sans font-bold"></span>
            <span className="font-bold">Somos ganadores</span>
            <img src="/images/iabMIXX.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/VISA.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/SEEDSTARSWORLD.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/MINISTERIO2.jpg" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/STARTUP.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/ISO.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <span className="block rounded-[50%] w-[15px] h-[15px] mb-[4px] ml-[80px] font-sans font-bold"></span>
            <span className="font-bold">Somos asociados</span>
            <img src="/images/ADEX.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/ASEP.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/CCL.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/FINTECH PERU.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/SCALE UP.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/SNI.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <span className="block rounded-[50%] w-[15px] h-[15px] mb-[4px] ml-[80px] font-sans font-bold"></span>
            <span className="font-bold">Nuestros aliados estratégicos</span>
            <img src="/images/RPP.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/CITI.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
            <img src="/images/VISA.png" alt="rextie-logo" className="block h-[50px] max-w-full align-middle" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMarquee;
