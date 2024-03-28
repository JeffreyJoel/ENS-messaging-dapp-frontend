"use client";

import Register from "@/components/register/RegisterComponent";
import Header from "@/components/shared/Header";
import Image from "next/image";
import useGetUser from "@/hooks/useGetUser";
import UsersComponent from "@/components/users/UsersComponent";

export default function Home() {
  const { user } = useGetUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div>{user.length < 1 ? <Register /> : <UsersComponent />}</div>
    </main>
  );
}
