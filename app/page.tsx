import Link from "next/link";

const Home = () => {
  return (
    <>
      <nav>
        <h1>Menu</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">React Hooks</h1>
        <div className="flex flex-col gap-3 my-7">
          <Link href={"/useContext"}>
            <h3 className="text-xl">useContext ✅</h3>
          </Link>
          <Link href={"/useCallback"}>
            <h3 className="text-xl">useCallback ✅</h3>
          </Link>
          <Link href={"/useMemo"}>
            <h3 className="text-xl">useMemo ✅</h3>
          </Link>
          <Link href={"/useReducer"}>
            <h3 className="text-xl">useReducer ✅</h3>
          </Link>
          <Link href={"/custom-hooks"}>
            <h3 className="text-xl">Custom Hooks ✅</h3>
          </Link>
        </div>
      </main>
      <footer>
        <h1>Test 1</h1>
        <h2>Test 2</h2>
        <h3>Test 3</h3>
      </footer>
    </>
  );
};
export default Home;
