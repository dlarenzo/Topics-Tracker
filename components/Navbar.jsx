import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-slate-800">
      <Link href={"/"} className="text-white font-bold">
        Topics Tracker
      </Link>
      <Link href={"/addTopic"} className="bg-white p-2">
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
