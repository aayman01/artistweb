import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main heading */}
      <h1 className="text-8xl font-semibold tracking-tight mb-8">
        <span className="text-black">Crafting </span>
        <span className="text-[#4338ca]">Digital</span>
        <br />
        <span className="text-black">Experiences</span>
      </h1>
      
      {/* Stats and description row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        {/* Awards stat */}
        <div className="flex items-center gap-3">
          <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-medium">
            15
          </div>
          <span className="text-gray-600 text-lg">Website Awards</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-800 text-xl md:text-2xl max-w-2xl">
          We build engaging websites, brands & innovative e-commerce solutions.
        </p>
        
        {/* CTA Button */}
        <Button
          asChild
          className="bg-[#4338ca] hover:bg-[#3730a3] text-white rounded-full px-8 py-6 text-lg"
        >
          <Link href="/case-studies">
            Case Studies
          </Link>
        </Button>
      </div>
    </section>
  )
}
