import { Button } from "@/components/ui/button"


export default function HeroSection() {
  
  return (
    <section className="min-h-[100vh] flex flex-col justify-center px-8 mt-16">
      {/* Main heading */}
      <div className="flex flex-col justify-left">
        <h1 className="text-8xl font-semibold tracking-tight">
          <span className="text-black">Crafting </span>
          <span className="bg-gradient-text bg-clip-text text-transparent animate-gradientMove">
            Digital
          </span>
          <br />
          <span className="text-black">Experiences</span>
        </h1>
      </div>
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center pt-24">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-medium text-white">
            500
          </div>
          <span className="text-xl text-muted-foreground">
            Satisfied Customers
          </span>
        </div>
        <div className="flex justify-center items-center gap-7 ">
          <div className="max-w-xl text-xl font-normal md:text-2xl">
            <p>We build engaging websites,</p>
            <p> brands & innovative e-</p>
            <p>commerce solutions.</p>
          </div>

          <Button className="relative bg-[#545cff] hover:bg-[#545cff] text-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[200px] h-[60px]">
            <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
              Case Studies
            </span>
            <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
              Case Studies
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
