import Header from "@/components/shared/Header";
import UsersComponent from "@/components/users/UsersComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <div>
        <UsersComponent/>
      </div>
    </main>
  );
}
