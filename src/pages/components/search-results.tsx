import React from "react";
import ReactMarkdown from "react-markdown";
import Source from "./results/source";
import { useTextStore } from "@/state/stream";
import { useSearchStatusStore } from "@/state/search";
import remarkGfm from "remark-gfm";

export default function SearchResults = () => {
  const text = useTextStore((state) => state.text);
  const isSearching = useSearchStatusStore((state) => state.isResultsLoading);

  return (
    <div className="flex flex-col">
      {/* LLM generation */}

      {isSearching && text === "" && (
        <iframe
          className="w-24 h-24"
          src="https://lottie.host/embed/d3023374-a425-441d-b2a8-24cea7b1eea4/5JsUpcRoyM.json"
        />
      )}
      {(text !== "" || isSearching) && (
        <div className="rounded-md border border-gray-200 bg-purple-100 p-4 w-full">
          <div className="flex gap-2 items-center font-medium mb-2">
            <img src="./ai.svg" alt="AI Assistant" />
            <h2>AI Reponse</h2>
          </div>
          {/* actual response */}
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose ">
            {text}
          </ReactMarkdown>
        </div>
      )}

      {/* Search results */}
      {text !== "" && (
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="font-semibold">Sources</h2>
          <Source
            name="Clerk-Nextjs-Typescript-Starter"
            url="https://github.com/RyanHaraki/Clerk-Nextjs-Typescript-Starter/tree/main"
            source="github"
          />
          <Source
            name="Pointer Internal Documentation"
            url="https://ryanharaki.notion.site/Pointer-Documentation-f3a4b7e2609642129ba602533e006352?pvs=4"
            source="notion"
          />
        </div>
      )}

      {text == "" && (
        <div className="w-full flex items-center justify-center">
          <h1 className="font-bold">Search for something!</h1>
        </div>
      )}
    </div>
  );
};
