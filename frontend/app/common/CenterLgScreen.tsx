const CenterLgScreen = ({
  className,
  children,
  ...props
}: Partial<
  Readonly<{ props: any; className: string; children: React.ReactNode }>
>) => {
  return (
    <div className={`lg:container lg:mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default CenterLgScreen;
