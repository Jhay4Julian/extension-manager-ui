import { useState } from "react";

type ExtensionCardProps = {
    name: string;
    description: string;
    logo: string;
    isActive?: boolean;
};

export default function ExtensionCard({ name, description, logo }: ExtensionCardProps) {
    const [active, setActive] = useState(false);

    return (
        <div className="bg-[#1C2333] mx-auto max-w-sm p-4 rounded-xl shadow-md border-1 border-gray-500 flex flex-col items-left m-4 p-5">
            <div className="flex items-start mb-4">
                <img src={logo} alt="" className="w-10 h-10" />
                <div className="ml-2">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button className="text-gray-300 text-sm rounded-full border-1 border-gray-500 px-2 py-1 mt-2 cursor-pointer hover:bg-gray-500 transition duration-300">
                    Remove
                </button>
                {/* Toggle */}
                <button
                    onClick={() => setActive(!active)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${active ? "bg-red-400" : "bg-gray-400"
                        }`}
                >
                    <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${active ? "translate-x-6" : "translate-x-0"
                            }`}
                    ></div>
                </button>
            </div>
        </div>
    );
}