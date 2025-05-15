import { useState } from "react";
import ExtensionCard from "./ExtensionCard";


export default function ExtensionList() {

  const [extensions, setExtensions] = useState([
    {
      id: 1,
      "logo": "./src/assets/images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
    },
    {
      id: 2,
      "logo": "./src/assets/images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
    },
    {
      id: 3,
      "logo": "./src/assets/images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
    },
    {
      id: 4,
      "logo": "./src/assets/images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
    },
    {
      id: 5,
      "logo": "./src/assets/images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
    },
    {
      id: 6,
      "logo": "./src/assets/images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
    },
    {
      id: 7,
      "logo": "./src/assets/images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
    },
    {
      id: 8,
      "logo": "./src/assets/images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
    },
    {
      id: 9,
      "logo": "./src/assets/images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
    },
    {
      id: 10,
      "logo": "./src/assets/images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
    },
    {
      id: 11,
      "logo": "./src/assets/images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
    },
    {
      id: 12,
      "logo": "./src/assets/images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
    }
  ]);

  const [filter, setFilter] = useState<"All" | "Active" | "Inactive">("All");

  const toggleExtension = (id: number) => {
    setExtensions(
      prev => prev.map(ext =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext));
  }

  const removeExtension = (id: number) => {
    setExtensions(prev => prev.filter(ext => ext.id !== id));
  };

  const filteredExtensions = extensions.filter(ext => {
    if (filter === "Active") return ext.isActive;
    if (filter === "Inactive") return !ext.isActive;
    return true;
  });

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-semibold">Extensions List</h2>
        <div className="flex gap-2">
          {["All", "Active", "Inactive"].map(option => (
            <button
              key={option}
              onClick={() => setFilter(option as any)}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${filter === option ? "bg-red-500 text-black" : "bg-gray-700 text-gray-300 hover:bg-gray-500"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredExtensions.map(ext => (
          <ExtensionCard
            key={ext.id}
            name={ext.name}
            description={ext.description}
            logo={ext.logo}
            isActive={ext.isActive}
            onToggle={() => toggleExtension(ext.id)}
            onRemove={() => removeExtension(ext.id)}
          />
        ))}
      </div>
    </section>
  );
}