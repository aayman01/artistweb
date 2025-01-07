import Image from "next/image";

const FeedbackCard = ({
  feedback = "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
  name = "Steven Glibbery",
  companyName = "TGA Mobility",
  image = "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/nathan-s-250x250.jpg",
}) => {
  return (
    <div className="w-full rounded-3xl border border-white/20 p-10 bg-none">
      <div className="space-y-14">
        <p className="text-2xl font-medium leading-[40px] text-white">
          "{feedback}"
        </p>

        <div className="flex items-center gap-6">
          <div>
            <Image
              src={image}
              alt="logo"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between w-full items-center gap-3">
            <span className="text-[#71777E] text-xl">{name}</span>
            <span className="text-[#545CFF] text-xl">{companyName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
