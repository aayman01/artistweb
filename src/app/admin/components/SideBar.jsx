"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-[#545cff] text-white">
      <div className="p-4 text-2xl font-bold text-center mb-3 mt-5">
        Artist Website
      </div>
      <nav className="mt-6">
        <ul>
          <li className="flex px-4 py-2 font-medium text-xl hover:bg-white/5 text-white">
            <Link href="/admin/add-work">Add Work</Link>
          </li>
          <li className="px-4 py-2 font-medium text-xl hover:bg-white/5 text-white">
            <Link href="/admin/add-review">Add Review</Link>
          </li>
          <li className="px-4 py-2 font-medium text-xl hover:bg-white/5 text-white">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
