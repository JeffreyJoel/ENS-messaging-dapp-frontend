'use client'

import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";

export default function Header() {
  const { user } = useGetUser();
  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Planet
        </span>

        <div className="flex items-center">
        <w3m-button />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white rounded-[50%]">
          {user.length > 0 && (
            <Image
              priority
              src={`https://${user[1]}`}
              alt="Neil image"
              width={100}
              height={100}
              className="w-16 h-16 rounded-[50%]"
            />
          )}
        </span>
        </div>
        
      
      </div>
    </nav>
  );
}
