// import IntegrationCard from "@/components/integration-card";

import { cn } from "@/lib/utils";
import IntegrationCard from "./components/integrations-card";

const connections = [
  {
    name: "Google Drive",
    description: "Search through your Google Drive files and folders.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
    connectUrl: "/connect/google-drive",
  },
  {
    name: "GitHub",
    description: "Search through your GitHub repositories and issues.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    connectUrl: "/connect/github",
  },
  {
    name: "Notion",
    description: "Search through your Notion pages and databases.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    connectUrl: "/connect/notion",
  },
  {
    name: "Slack",
    description: "Search through your Slack messages and channels.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    connectUrl: "/connect/slack",
  },
  {
    name: "Jira",
    description: "Search through your Jira issues and projects.",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png",
    connectUrl: "/connect/jira",
  },
];

export default function Integrations() {
  return (
    <div className={cn("pb-[200px] pt-4 md:pt-10")}>
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-lg border bg-background p-8">
          <h1 className="mb-2 text-lg font-semibold">
            Manage your connected apps
          </h1>
          <p className="mb-2 leading-normal text-muted-foreground">
            Use this page to manage your connected applications. Once connected,
            all memebers of your organization will be able to search through
            your data.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {connections.map((connection, index) => (
              <IntegrationCard
                key={index}
                name={connection.name}
                description={connection.description}
                icon={connection.icon}
                connectUrl={connection.connectUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
