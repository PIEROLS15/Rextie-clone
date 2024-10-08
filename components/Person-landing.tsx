'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/Shared/Header';
import MainBanner from '@/components/Shared/Main-banner';

const PersonLanding: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Función para verificar el tamaño de la ventana
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Verificar el tamaño de la ventana cuando el componente se monta
        handleResize();

        // Agregar listener para redimensionar la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            style={{
                backgroundImage: isMobile ? 'none' : "url('/images/banner-person.webp')",
                backgroundColor: isMobile ? 'white' : 'transparent',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative', // Asegura que el z-index funcione correctamente
            }}
        >
            {/* Dale al header un z-index mayor */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <Header />
            </div>

            {/* Dale al banner un z-index menor */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <MainBanner />
            </div>
        </section>
    );
};

export default PersonLanding;
