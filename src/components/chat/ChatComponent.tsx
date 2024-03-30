"use client";

import useGetMessages from "@/hooks/useGetChats";
import useSendMessage from "@/hooks/useSendMessage";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import useGetUser from "@/hooks/useGetUser";
import { redirect } from "next/navigation";


export default function ChatComponents({ id }: { id: string }) {
  const { loading, data } = useGetMessages(id);
  const { user } = useGetUser();

  
  console.log(data);
  // console.log(id);
  const [message, setMessage] = useState<string>("");

  const sendMessage = useSendMessage(message, id);

  if (user[0] === id){
    redirect("/users")
  }

  return (
    <div className="dark w-[70%]  mx-auto shadow-lg rounded-lg ">
      <div className="flex flex-row justify-between ">
        <div className="w-full px-5 flex flex-col justify-between relative h-[80vh]">
          <div className="flex flex-col mt-5 w-full h-[600px] no-scrollbar overflow-y-auto">
            {data.map((message: any, index: number) =>
            
              message.receiver && message.receiver === id ? (
                <div className="flex justify-start mb-4" key={index}>
                 
             
                  <div className="block ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  <small className="block">
                    {message.sender}
                  </small>
                    {message.message}
                  </div>

                </div>
              ) : (
                <div className="flex justify-end mb-4" key={index + 1}>
                  <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  <small className="block">
                    {message.sender}
                  </small>
                    {message.message}
                  </div>
             
                </div>
              )
            )}
      
          </div>
          <div className="py-5 bottom-[0px]">
            <div className=" mt-2 p-3 rounded-lg flex items-center border h-12">
              <input
                type="text"
                placeholder="0x"
                className="border-none ring-offset-0 outline-none bg-transparent w-full"
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* <Send /> */}
              <SendHorizontal onClick={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
