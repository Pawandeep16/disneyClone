import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./themeTogler";
import SearchInput from "./searchInput";
import GenreDropDown from "./genreDropDown";

function Header() {
  return (
    <header
      className="fixed w-full z-20 top-0 flex items-center justify-between p-5 
     "
    >
      <Link href="/" className="mr-10">
        <Image
          width={120}
          height={100}
          className=" cursor-pointer invert dark:invert-0"
          src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png"
          alt="Disney logo"
        />
      </Link>

      <div className="flex space-x-2">
        {/* Genre DropDown menu */}
        <GenreDropDown />
        {/* Search input Filed */}
        <SearchInput />
        {/* Dark Mode Toggler */}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
