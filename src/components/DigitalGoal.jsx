const DigitalGoal = () => {
  return (
    <section className="px-8">
      <div className="flex items-end justify-between gap-6">
        <div className="w-1/2 space-y-10">
          <h2 className="text-5xl font-semibold leading-[70px] pb-14">
            Let our experienced team elevate your digital goals
          </h2>

          <div className="flex items-start gap-x-16">
            <div>
              <p className="text-4xl font-semibold mb-3">250</p>
              <p className="text-2xl">Five-Star Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-semibold mb-3">10</p>
              <p className="text-2xl">In-House Experts</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end w-1/2">
        <div></div>
            
          <p className="text-xl">
            We have successfully completed over 300+ projects from a variety of
            industries. In our team, designers work alongside developers and
            digital strategists, we believe this is our winning recipe for
            creating digital products that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalGoal;
