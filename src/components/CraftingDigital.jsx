const CraftingDigital = () => {
  return (
    <section
      className="w-full h-[80vh] flex items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('assets/crafting-bg.svg')`,
      }}
    >
      {/* Content */}
      <div className=" max-w-2xl mx-auto">
        <h1 className="text-7xl font-semibold leading-[90px]">
          Crafting digital <br />
          <span className=" pl-36 bg-[linear-gradient(45deg,#545cff,#1f2246_80%)] bg-clip-text text-transparent">
            experiences <br />
          </span>{" "}
          since 2004
        </h1>
      </div>
    </section>
  );
};

export default CraftingDigital;
