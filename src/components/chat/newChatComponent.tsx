"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import useGetMessages from "@/hooks/useGetChats";
import useGetUser from "@/hooks/useGetUser";

export default function ChatComponent({ id }: { id: string }) {
    const { loading, data } = useGetMessages(id);
    const { user } = useGetUser();

    console.log(data);
    

  return (
    <div className="flex flex-col h-screen">
      <div className="border-b flex items-center p-4">
        <Button className="mr-4" size="icon" variant="ghost">
          <ChevronLeftIcon className="w-6 h-6" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="flex-1 min-w-0 mr-4">
          <h1 className="font-semibold text-lg">Chats</h1>
        </div>
        <Button className="rounded-full mr-2" size="icon" variant="ghost">
          <img
            alt="Avatar"
            className="rounded-full border"
            height="32"
            src="/placeholder.svg"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
      <div className="flex-1 flex border-t">
        <div className="hidden md:flex flex-col w-[400px] border-r">
          <div className="p-4 flex items-center space-x-4">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="48"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Online now</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* <div className="p-4 grid gap-4">
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Alice</h3>
                  <p className="text-sm truncate">Hey, how's it going? 😊 Let's catch up soon!</p>
                </div>
                <p className="text-sm">2:14 PM</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4 bg-gray-100" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Bob</h3>
                  <p className="text-sm truncate">Can you send me the report by EOD? Thanks!</p>
                </div>
                <p className="text-sm">1:20 PM</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Charlie</h3>
                  <p className="text-sm truncate">Ready for the weekend trip? I've got the snacks! 🍿</p>
                </div>
                <p className="text-sm">Yesterday</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">David</h3>
                  <p className="text-sm truncate">Meeting at 3 PM. Don't forget! 📅</p>
                </div>
                <p className="text-sm">Monday</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Ella</h3>
                  <p className="text-sm truncate">New coffee place near the office! ☕</p>
                </div>
                <p className="text-sm">2 days ago</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Frank</h3>
                  <p className="text-sm truncate">Can't make it to the party. You guys have fun! 🎉</p>
                </div>
                <p className="text-sm">2 days ago</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Grace</h3>
                  <p className="text-sm truncate">Just finished redecorating my room! What do you think? 🎨</p>
                </div>
                <p className="text-sm">3 days ago</p>
              </Link>
              <Link className="flex items-center gap-4 rounded-lg p-4" href="#">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="56"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "56/56",
                    objectFit: "cover",
                  }}
                  width="56"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">Heather</h3>
                  <p className="text-sm truncate">Excited about the concert tonight! Let's meet up early. 🎵</p>
                </div>
                <p className="text-sm">Last week</p>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="border-b flex items-center p-4">
            <div className="flex-1 min-w-0 mr-4">
              <h1 className="font-semibold text-lg">Alice</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
            </div>
            <Button className="rounded-full" size="icon" variant="ghost">
              <VideoIcon className="w-5 h-5" />
              <span className="sr-only">Video call</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <PhoneIcon className="w-5 h-5" />
              <span className="sr-only">Audio call</span>
            </Button>
          </div>
          <div className="flex-1 flex flex-col justify-end p-4">
            <div className="grid gap-2 h-[600px] no-scrollbar overflow-y-auto">
              {/* <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Hey, how's it going? 😊 Let's catch up soon!
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Can you send me the report by EOD? Thanks!
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Ready for the weekend trip? I've got the snacks! 🍿
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Meeting at 3 PM. Don't forget! 📅
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  New coffee place near the office! ☕
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Can't make it to the party. You guys have fun! 🎉
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Just finished redecorating my room! What do you think? 🎨
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="bg-gray-100 rounded-lg p-4 text-sm line-clamp-1 dark:bg-gray-800">
                  Excited about the concert tonight! Let's meet up early. 🎵
                </div>
              </div> */}
            </div>
            <div className="mt-4">
              <form className="flex gap-4">
                <Button className="flex-1" variant="outline">
                  <PaperclipIcon className="w-4 h-4 mr-2" />
                  Attach
                </Button>
                <Input className="flex-1" placeholder="Type a message..." type="text" />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function PaperclipIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function VideoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
