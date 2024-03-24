import { useHistory } from "@/state/history";

export default function Dashboard() {
  const history = useHistory((state) => state.history);

  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold">History</h1>
      <div className="mt-4 flex flex-col">
        {history.map(
          (item) =>
            item.response && (
              <div className="p-4 mx-4 my-2 rounded-lg cursor-pointer transition-all py-6 border border-gray-200">
                <h2 className="text-md font-semibold">{item.query}</h2>
                <p>{item.response}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
