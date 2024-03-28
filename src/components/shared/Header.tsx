export default function Header() {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Planet
        </span>

        <div className=""></div>
        <w3m-button />
      </div>
    </nav>
  );
}
