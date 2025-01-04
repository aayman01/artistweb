import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">ArtistsWeb</div>
       
      </div>
    </header>
  );
};

export default Header;
