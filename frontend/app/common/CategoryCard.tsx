import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="w-full h-[300px] rounded-2xl bg-theme-shadeblu">
      <div className="w-full h-[80%]">
        {/* the extra div wrapping is because of the overflow property that should affect only images */}
        <div className="w-full h-full relative overflow-hidden rounded-[1rem_1rem_0_0]">
          <Image
            fill
            sizes="100vw"
            objectFit="cover"
            src={"/images/pexels-pixabay-45201.jpg"}
            alt="category image"
          />
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">Some Category</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
96;
