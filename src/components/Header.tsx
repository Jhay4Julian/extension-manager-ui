import LogoImage from '../assets/images/logo.svg';
import sunIcon from '../assets/images/icon-sun.svg';


export default function Header() {
    return (
        <div className="bg-[#1C2333] shadow-lg p-2 rounded-lg mx-auto max-w-6xl">
            <span className='flex items-center justify-between'>
                <img src={LogoImage} alt="" className='h-8'/>
                <button className='p-2 bg-gray-700 rounded-lg cursor-pointer'>
                    <img src={sunIcon} alt="Sun Icon" className='w-4 h-4' />
                </button>
            </span>
        </div>
    );
}