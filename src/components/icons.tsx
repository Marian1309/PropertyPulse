const ICONS = {
  bell: (): JSX.Element => {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  mobileMenu: (): JSX.Element => {
    return (
      <svg
        aria-hidden="true"
        className="block h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default ICONS;
