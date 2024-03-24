import React from "react";
import { FileCog } from "lucide-react";

const sources = [
  {
    name: "GitHub",
    url: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "Notion",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png",
  },
  {
    name: "Drive",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png",
  },
  {
    name: "Slack",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
  },
];

interface SourceProps {
  name: string;
  url?: string;
  source: string;
}

const Source = ({ name, url, source }: SourceProps) => {
  const sourceIcon = sources.find((s) => s.name.toLowerCase() === source)?.url;

  return (
    <a
      href={url}
      className="rounded-lg w-full hover:bg-gray-100 cursor-pointer transition-all p-4 py-6 border border-gray-200"
    >
      <div className="flex gap-2 font-semibold">
        <img src={sourceIcon} className="w-6 h-6" alt="icon" />
        <h2 className="text-blue-600 underline">{name}</h2>
      </div>
    </a>
  );
};

export default Source;
