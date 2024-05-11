import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/helpers";
import image1 from "@/public/images/test-bunny.jpg";
import image2 from "@/public/images/test-cat.jpg";
import image3 from "@/public/images/test-dog.jpg";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";

const ProductCard = () => {
  const randomVal = Math.trunc(Math.random() * 3);
  return (
    <div className="h-full">
      <div className="h-[60%] relative">
        <div className="absolute right-2 top-2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full">
          <FaRegHeart className="fill-primary" />
        </div>
        <div className="w-full h-full rounded-t-xl bg-theme-shadeblu overflow-hidden relative">
          <Image
            alt={`product`}
            fill
            sizes="100vw"
            src={[image1, image2, image3][randomVal]}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="grid gap-1 p-1">
        <h4 className="[-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:2] overflow-hidden text-ellipsis whitespace-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga!
        </h4>
        <div className="flex items-center gap-4">
          <strong className="text-xl">{formatCurrency(300000)}</strong>
          <span className="text-fade-text text-xs line-through">
            {" "}
            {formatCurrency(800000)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm text-fade-text">
            <span>
              <FaStar className="fill-theme-orange" />
            </span>
            <span>4.6 (123 reviews)</span>
          </div>

          <div className="text-sm">
            <span>Qt:</span>
            <span>14</span>
          </div>
        </div>
        <div className="pt-2 flex justify-between items-center">
          <Button size={"lg"} className="w-[80%]">
            Add to cart
          </Button>
          <Button variant={"outline"} className="border-2 border-primary">
            <IoMdAlarm className="fill-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
