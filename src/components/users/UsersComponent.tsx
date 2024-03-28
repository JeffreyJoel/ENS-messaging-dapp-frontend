"use client";

import useGetUsers from "@/hooks/useGetAllUsers";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";

export default function UsersComponent() {
  const { loading, data } = useGetUsers();
  const { user } = useGetUser();
  console.log(data);
  console.log(user);

  return (
    <div>
    
      {data.map((users: any, usersIndex) => (
        <ul
          className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700"
          key={usersIndex}
        >
          {/* {users &&
            users && users.map((user: any, userIndex: number) => ( */}
          <li className="pb-3 sm:pb-4">
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
  );
}
