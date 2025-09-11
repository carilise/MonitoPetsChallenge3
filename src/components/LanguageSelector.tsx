import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const languages = [
  {
    code: "VDD",
    label: "Vietnamese",
    flag: "https://flagcdn.com/w40/vn.png",
  },
  {
    code: "ENG",
    label: "English",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    code: "FR",
    label: "Français",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    code: "ES",
    label: "Español",
    flag: "https://flagcdn.com/w40/es.png",
  },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const toggleMenu = () => setOpen(!open);
  const selectLanguage = (lang: typeof selected) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="">
      {/* Selector Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
      >
        <img
          src={selected.flag}
          alt={selected.code}
          className="w-5 h-5 rounded-full"
        />
        <span className="text-[#003459] font-medium">{selected.code}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#003459]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#003459]" />
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#003459] font-medium"
            >
              <img
                src={lang.flag}
                alt={lang.code}
                className="w-5 h-5 rounded-full"
              />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
