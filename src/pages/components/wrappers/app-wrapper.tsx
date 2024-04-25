import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LifeBuoy,
  Search,
  Settings2,
  SquareUser,
  Share,
  History,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "sonner";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const router = useRouter();
  const slug = router.pathname.split("/")[1];

  return (
    <div className="grid h-screen w-full pl-[53px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Link href="/">
            <Button variant="outline" size="icon" aria-label="Home">
              <img src="/logo.png" className="size-6" />
            </Button>
          </Link>
        </div>
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`"rounded-lg ${slug === "" ? "bg-muted" : ""}`}
                  aria-label="Search"
                >
                  <Search className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Search
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/history">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-lg ${
                    slug === "history" ? "bg-muted" : ""
                  }`}
                  aria-label="History"
                >
                  <History className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              History
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/integrations">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Integrations"
                >
                  <Settings2 className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://ryanharaki.notion.site/Pointer-Documentation-f3a4b7e2609642129ba602533e006352?pvs=4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account"
              >
                <SquareUser className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="fixed top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 w-[calc(100%-53px)]">
          <h1 className="text-xl font-semibold text-violet">Pointer</h1>
          <Button
            onClick={(e) => {
              if ((e.target as HTMLElement)?.hasAttribute('auth')) {
                toast("Your search URL has been copied to clipboard!");
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            variant="outline"
            size="sm"
            className={`ml-auto gap-1.5 text-sm ${slug != "" ? "hidden" : ""}`}
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 mt-16">
          {/* main area thing */}
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppWrapper;
