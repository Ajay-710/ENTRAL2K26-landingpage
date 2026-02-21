import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Physics for trailing ring
    const cursorXSpring = useSpring(cursorX, { damping: 30, stiffness: 400 });
    const cursorYSpring = useSpring(cursorY, { damping: 30, stiffness: 400 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            // Check for interactive elements
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'input' ||
                target.tagName.toLowerCase() === 'textarea' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.closest('.group') !== null || // Common class for interactive cards
                (target.hasAttribute('role') && target.getAttribute('role') === 'button');

            setIsHovering(isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    const dotSize = 8;
    const ringSize = isHovering ? 48 : 32;

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
            {/* Inner Dot exactly on mouse */}
            <motion.div
                className="absolute top-0 left-0 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: dotSize,
                    height: dotSize,
                    opacity: isVisible ? 1 : 0
                }}
            />
            {/* Outer trailing Ring */}
            <motion.div
                className="absolute top-0 left-0 rounded-full border border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] flex items-center justify-center transition-colors duration-200"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: ringSize,
                    height: ringSize,
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: isHovering ? 'rgba(45, 212, 191, 0.15)' : 'rgba(0,0,0,0)',
                    borderColor: isHovering ? 'rgba(6, 182, 212, 1)' : 'rgba(45, 212, 191, 0.5)'
                }}
                animate={{
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
        </div>
    );
};

export default CustomCursor;
