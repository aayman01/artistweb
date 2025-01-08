import Image from "next/image";

const Card = ({ card }) => {
  const { image, title, tags, latest } = card;
  return (
    <div className="bg-gray-100 rounded-3xl overflow-hidden relative border-2 border-transparent hover:border-[#545cff] transition-all duration-500 w-[500px] h-[412px]">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        width={510}
        height={412}
        placeholder="blur"
        blurDataURL={image}
      />
      {card.latest && (
        <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Latest
        </span>
      )}
      <div className="p-4 absolute bottom-1">
        <h3 className="text-2xl ml-2 text-white font-bold">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 border bg-transparent rounded-full text-xl text-white border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
