import { useState, useEffect } from 'react';

// Registration opens now and closes exactly at this time
const CLOSING_TIME = new Date('2026-03-10T18:44:51+05:30').getTime();

export const useRegistrationStatus = () => {
    const [isOpen, setIsOpen] = useState(Date.now() < CLOSING_TIME);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpen(Date.now() < CLOSING_TIME);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return isOpen;
};
