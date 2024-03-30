import ChatComponents from "@/components/chat/ChatComponent";
import Header from "@/components/shared/Header";

export default function Chat({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24  px-12">
      <Header/>
      <div className="w-full">
        <ChatComponents id={params.id}/>
      </div>
    </main>
  );
}
