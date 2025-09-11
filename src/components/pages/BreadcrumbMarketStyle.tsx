export default function BreadcrumbMarketSVG() {
  return (
    <nav className="mt-8 max-w-[1500px] mx-auto px-8">
      <ul className="flex items-center gap-2 text-sm font-medium text-[#003459]">
        <li>
          <a href="/" className="hover:underline">Home</a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#99A2A5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </li>

        <li>
          <a href="/dog" className="hover:underline">Dog</a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-[#99A2A5]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </li>

        <li className="text-[#003459] font-semibold">Small Dog</li>
      </ul>
    </nav>
  );
}
