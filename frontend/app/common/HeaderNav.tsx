"use client";
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

//TODO:  if all components here requires interaction convert to client side component

const HeaderNav = () => {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <FaRegUser size={30} />
        </div>
        <div className="text-sm">
          <div>Welcome</div>
          <strong>Register/Signup</strong>

          {/* if user is authenticated then first name/short identifier is shown  */}

          {/* TODO:  for un authenticated users add hover popup buttons[login,  register] | links: [orders,  wishlist, coupons, settings ] */}
          {/* TODO:  for  authenticated users add hover popup buttons[image, full name or email , sign-out button] | links: [orders,  wishlist, coupons, settings ] */}
        </div>
      </div>

      <div className="flex gap-2 items-center cursor-pointer">
        <div>
          <GrCart size={30} />
        </div>
        <div className="text-sm flex flex-col">
          <span className="block text-xs font-bold p-[0.1rem] px-2 rounded-xl bg-theme-orange">
            15
          </span>
          <span className="font-bold">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
