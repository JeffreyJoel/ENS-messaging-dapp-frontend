import Register from "@/components/register/RegisterComponent";
import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <div>
        <Register/>
      </div>
    </main>
  );
}
