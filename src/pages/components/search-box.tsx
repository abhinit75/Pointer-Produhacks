import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTextStore } from "@/state/stream";
import { documents } from "@/lib/documents";
import cohere from "@/lib/cohere";
import { useState } from "react";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { useSearchStatusStore } from "@/state/search";
import { useHistory } from "@/state/history";

export function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const setHistory = useHistory((state) => state.addHistory);
  const setIsSearching = useSearchStatusStore(
    (state) => state.setIsResultsLoading
  );
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  const clearText = useTextStore((state) => state.clearText);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSearching(true);
    clearText();
    await streamResponse();
  };

  const streamResponse = async () => {
    const stream = await cohere.chatStream({
      model: "command",
      message:
        `Please respond to a question given the following outline: <Outline>${SYSTEM_PROMPT}</Outline> \n` +
        `\nUser question: <Question>${searchText}</Question>` +
        "\nPlease use backticks when showing code snippets. Please cite your sources inline as often as possible by providing as many links as you. \n\n Answer:",
      documents: documents,
      promptTruncation: "AUTO",
    });

    setIsSearching(false);

    for await (const chat of stream) {
      if (chat.eventType === "text-generation") {
        setText(chat.text);
      }
    }

    setHistory(searchText, text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden flex items-center justify-between rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
    >
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSubmit={handleSubmit}
        id="message"
        placeholder="Type your query here..."
        className="min-h-6 resize-none border-none focus-visible:ring-0"
      />
      <div className="flex items-center p-3">
        <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-violet">
          <Search className="size-3.5" />
          Search
        </Button>
      </div>
    </form>
  );
}
