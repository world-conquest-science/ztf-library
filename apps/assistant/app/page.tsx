import { SentIcon } from "hugeicons-react";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full bg-red-50 p-3">
      <div className="mt-auto bg-white flex rounded-lg relative overflow-hidden">
        <span
          className="textarea text-black cursor-text min-h-[120px] p-5 text-lg bg-white w-full h-full resize-none outline-none"
          role="textarea"
          data-placeholder="Ask me something about your spiritual needs"
          contentEditable={true}
        />
        <button className="absolute h-10 w-10 flex justify-center items-center right-3 bottom-3">
          <SentIcon strokeWidth={2} color="#111827" />
        </button>
      </div>
    </main>
  );
}
