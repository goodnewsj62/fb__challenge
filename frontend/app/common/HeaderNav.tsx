"use client";
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

const HeaderNav = () => {
  return (
    <div>
      <div>
        <div>
          <FaRegUser />
        </div>
        <div>
          <div>Welcome</div>
          <strong>Register/Signup</strong>
        </div>
      </div>

      <div>
        <div>
          <GrCart />
        </div>
        <div>
          <span>15</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
