import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-[700px] items-center justify-center px-8 pb-16 sm:mt-28">
      {children}
    </div>
  );
};

export default Layout;
