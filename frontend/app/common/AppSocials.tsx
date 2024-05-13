import { NAV_CONSTANT } from "@/constants/appConstants";
import facebook from "@/public/svg/facebook.svg";
import instagram from "@/public/svg/insta.svg";
import tikTok from "@/public/svg/tik_tok.svg";
import twitter from "@/public/svg/twitter.svg";
import Image from "next/image";

const SOCIAL_DATA = [
  {
    link: NAV_CONSTANT.FACEBOOK_URL,
    alt: "facebook icon",
    src: facebook,
  },
  {
    link: NAV_CONSTANT.INSTAGRAM_URL,
    alt: "instagram icon",
    src: instagram,
  },
  {
    link: NAV_CONSTANT.X_URL,
    alt: "x icon",
    src: twitter,
  },
  {
    link: NAV_CONSTANT.TIKTOK_URL,
    alt: "tik tok icon",
    src: tikTok,
  },
];

type props = {
  className?: string;
  transparentBg?: boolean;
};
const AppSocials: React.FC<props> = ({ className, transparentBg }) => {
  return (
    <div className={`flex items-center gap-x-4 ${className}`}>
      {SOCIAL_DATA.map(({ link, alt, src }) => {
        return (
          <div
            key={alt + link}
            className={`rounded-md p-4 ${
              transparentBg ? "backdrop-blur-lg bg-[#ffffff63] " : ""
            }`}
          >
            <a href={link} referrerPolicy="no-referrer" target="_blank">
              <Image src={src} alt={alt} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AppSocials;
