import Navbar from "../../components/Navbar/Navbar";

export default function LayoutDefault({ children }) {
  return (
    <main className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 h-screen">{children}</div>
    </main>
  );
}
