import React, { useEffect, useState } from 'react';
import './Scroll.css';

const ScrollToTopButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY >= 10; // تعديل هنا إذا كنت تريد تغيير عتبة التمرير
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='scroll-to-top'>
            {isScrolled && (
                <button className="scroll-button" onClick={scrollToTop}>
                    <span className="material-symbols-outlined scroll-up">arrow_upward</span>
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
