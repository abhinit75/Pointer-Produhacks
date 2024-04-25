import { SearchBox } from "./search-box";
import SearchResults from "./search-results";

export default Dashboard() {
  return (
    <div className="w-full">
      <SearchBox />
      <div className="w-full h-full p-4">
        <SearchResults />
      </div>
    </div>
  );
}
