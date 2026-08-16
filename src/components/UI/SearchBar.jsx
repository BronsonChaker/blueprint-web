export default function SearchBar({query, setQuery}) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by ID or Address"
        className="w-100 border-2 border-border text-xs rounded-xl px-2.5 py-1.5 outline-none"

      ></input>
    </div>
  );
}
