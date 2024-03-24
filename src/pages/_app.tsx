import "@/styles/globals.css";
import "@/styles/dot-elastic.css";
import type { AppProps } from "next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppWrapper from "./components/wrappers/app-wrapper";
import { Toaster } from "@/components/ui/sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <AppWrapper>
        <Component {...pageProps} />
        <Toaster />
      </AppWrapper>
    </TooltipProvider>
  );
}
