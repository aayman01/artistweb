import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 py-16 md:px-6 lg:px-8">
      <div className="">
        {/* Main Footer Content */}
        <div className="flex items-center justify-between gap-4 mb-16">
          {/* Left Section */}
          <div className="">
            <h2 className="text-4xl font-semibold leading-[49px] mb-8">
              We love crafting unforgettable digital experiences, brands and
              websites with people like you.
            </h2>
            <div className="space-y-4">
              <h3 className="text-md font-normal">Get in touch</h3>
              <p className="text-2xl font-medium">+44 207 112 82 85</p>
              <p className="text-2xl font-medium">contact@artistsweb.com</p>
              <p className="text-2xl font-medium">
                Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center mb-16 h-20">
              <div className="bg-black text-[#ecf1f4] rounded-3xl px-10 py-4 flex justify-between items-center w-[430px]">
                <span className="text-lg">Follow us</span>
                <div className="flex justify-center items-center gap-2 text-left">
                  <Link
                    href="https://instagram.com"
                    className="w-[43px] h-[43px] flex items-center justify-center hover:border-2 hover:border-[#545cff] rounded-full transition-all ease-in-out duration-100"
                  >
                    <Instagram size={27} />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    className="w-[43px] h-[43px] flex items-center justify-center hover:border-2 hover:border-[#545cff] rounded-full transition-all ease-in-out duration-100"
                  >
                    <Facebook size={27} />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="w-[43px] h-[43px] flex items-center justify-center hover:border-2 hover:border-[#545cff] rounded-full transition-all ease-in-out duration-100"
                  >
                    <Twitter size={27} />
                  </Link>
                  <Link
                    href="https://www.awwwards.com"
                    className="w-[43px] h-[43px] flex items-center justify-center hover:border-2 hover:border-[#545cff] rounded-full transition-all ease-in-out duration-100"
                  >
                    <span className="text-[24px]">W</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#ecf1f4] rounded-3xl p-8 w-[430px] text-center space-y-4">
              <h3 className="text-3xl font-semibold mb-2">Let's get started</h3>
              <p className="text-lg text-gray-600 pb-7">
                We'd love to hear about your project.
              </p>
              <Button className="relative bg-[#545cff] hover:bg-[#545cff] text-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-full h-[60px]">
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                  Get in touch
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                  Get in touch
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-gray-500">
            © 2025 Artistweb Ltd · All rights reserved.
          </p>

          <div className="flex flex-wrap gap-8">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
