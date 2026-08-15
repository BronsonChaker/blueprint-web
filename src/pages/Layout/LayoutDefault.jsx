import Navbar from "../../components/Navbar/Navbar";

export default function LayoutDefault( {children}) {
  return (
    <main className="flex">
      <Navbar />
      <div className="flex-1">{children}</div>
    </main>
  )
}
