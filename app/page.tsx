
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[100vh]">
      <div className="m-4 space-y-4 text-center">
      <h1 className="font-bold text-2xl">
        Welcome to My Code Editor!
      </h1>
      <p className="font-semibold text-lg">
        Build using next 14.2.4 and monaco-editor/react 4.6.0
      </p>
      </div>
      <Link 
          href={'/editor'}
          title="Proceed to Code Editor"
          className="px-4 py-2 mt-12 font-semibold border-2 border-gray-500 rounded-lg hover:bg-gray-200"
        >
          Proceed To Code Editor
      </Link>
    </main>
  );
}
