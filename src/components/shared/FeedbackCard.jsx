import Image from "next/image";

const FeedbackCard = ({ review }) => {
  return (
    <div className="w-full rounded-3xl border border-white/20 p-10 bg-none">
      <div className="space-y-14">
        <p className="text-2xl font-medium leading-[40px] text-white">
          "{review?.feedback}"
        </p>

        <div className="flex items-center gap-6">
          <div>
            <Image
              src={review?.company_logo}
              alt="logo"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between w-full items-center gap-3">
            <span className="text-[#71777E] text-xl">{review?.client_name}</span>
            <span className="text-[#545CFF] text-xl">{review?.company_name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
