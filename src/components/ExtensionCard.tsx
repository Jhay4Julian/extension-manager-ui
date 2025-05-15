
type ExtensionCardProps = {
    name: string;
    description: string;
    logo: string;
    isActive: boolean;
    onToggle?: () => void;
    onRemove?: () => void;
};

export default function ExtensionCard({ name, description, logo, isActive, onToggle, onRemove }: ExtensionCardProps) {
    return (
        <div className="bg-[#1C2333] mx-auto max-w-sm p-4 rounded-xl shadow-md border border-gray-700 flex flex-col justify-between items-left">
            <div className="flex items-start mb-4">
                <img src={logo} alt="" className="w-10 h-10 mt-1" />
                <div className="ml-3">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between ">
                <button 
                onClick={onRemove}
                className="text-gray-300 text-sm rounded-full border border-gray-700 px-3 py-1 mt-2 cursor-pointer hover:bg-red-400 hover:border hover:border-red-400 hover:text-black transition duration-300">
                    Remove
                </button>
                {/* Toggle */}
                <button
                    onClick={onToggle}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isActive ? "bg-red-400" : "bg-gray-400"
                        }`}
                >
                    <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isActive ? "translate-x-6" : "translate-x-0"
                            }`}
                    ></div>
                </button>
            </div>
        </div>
    );
}