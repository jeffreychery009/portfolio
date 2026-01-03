import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="mt-40 w-full items-center justify-center pt-8 pb-8 text-center">
        <h1 className="mb-5 text-2xl font-bold">Coming Soon</h1>
        <Button asChild>
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </>
  );
};

export default page;
