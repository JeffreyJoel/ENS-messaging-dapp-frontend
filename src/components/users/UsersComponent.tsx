"use client";

import useGetUsers from "@/hooks/useGetAllUsers";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function UsersComponent() {
  const { loading, data } = useGetUsers();
  const router = useRouter();
  return (
    <>
      {/* <Dialog >
      <DialogTrigger asChild> */}
      <div className="mt-10">
        {/* <h2 className="text-2xl">Oops! You have no messages</h2> */}
        <p className="text-gray-300 text-center text-2xl mt-4">
          Search for available users to begin or continue chatting
        </p>
        <div className="flex w-full max-w-lg items-center mt-7 mx-auto space-x-2">
          <Input type="text" placeholder="Search users" />
          <Button type="submit">Search</Button>
        </div>
      </div>
      {/* </DialogTrigger> */}

      <div className=" py-4 mt-5 m overflow-auto h-[425px] no-scrollbar">
        {data.map((users: any, usersIndex) => (
          <ul className="max-w-md mt-5  divide-y divide-solid" key={usersIndex}>
            {/* {users &&
            users && users.map((user: any, userIndex: number) => ( */}
            <li
              className="pb-3 sm:pb-4 cursor-pointer"
              onClick={() => {
                router.push(`/chat/${users[0]}`);
              }}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image
                    priority
                    src={`https://${users[1]}`}
                    alt="Neil image"
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {users[0]}
                  </p>
                  <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {users[2]}
                  </p>
                  {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@flowbite.com
                    </p> */}
                </div>
                {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> */}
              </div>
            </li>

            {/* ))} */}
          </ul>
        ))}
      </div>

      {/* </Dialog> */}
    </>
  );
}
