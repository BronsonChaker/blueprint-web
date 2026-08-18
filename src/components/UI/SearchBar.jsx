export default function SearchBar({placeholder, query, setQuery}) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-150 border-2 border-border text-xs rounded-xl px-2.5 py-2 outline-none"

      ></input>
    </div>
  );
}
