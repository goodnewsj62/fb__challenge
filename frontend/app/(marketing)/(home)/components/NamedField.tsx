import Link from "next/link";
import { PropsWithChildren } from "react";

type props = {
  label: string;
  link?: string;
  className?: string;
  headerStyles?: Record<string, any>;
};

const NamedField: React.FC<props & PropsWithChildren> = ({
  label,
  className,
  headerStyles,
  children,
  link,
}) => {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg" style={headerStyles}>
          {label}
        </h2>
        {link && (
          <div>
            <Link href={link}>See More</Link>
          </div>
        )}
      </div>
      <div className="py-4">{children}</div>
    </section>
  );
};

export default NamedField;
