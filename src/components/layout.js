export default function Layout({ children }) {
  return (
    <>
      <header className="w-screen h-20 drop-shadow-md bg-white">
        <nav></nav>
      </header>
      <main>{children}</main>
      <footer className="bg-white">
        <h1 className="text-black">TESTE2</h1>
      </footer>
    </>
  );
}
