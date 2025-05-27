import LogoImage from '../assets/images/logo.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';
import { useEffect, useState } from 'react';


export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="bg-white dark:bg-[#1C2333] shadow-lg p-2 rounded-lg mx-auto max-w-6xl transition-colors duration-300">
            <span className='flex items-center justify-between'>
                <img src={LogoImage} alt="" className='h-8' />
                <button
                    onClick={toggleTheme}
                    className='p-2 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-pointer'>
                    <img src={darkMode ? sunIcon : moonIcon} alt="Sun Icon" className='w-4 h-4' />
                </button>
            </span>
        </div>
    );
}