import Button from "./components/button";

export default function Home() {
  return (
    <main className=" bg-gradient-to-r from-slate-900 to-slate-700 h-screen flex flex-col items-center justify-center ">
      <h1 className="text-white mb-5">Hello, My Name is Saw Soe Htut Win.</h1>
      <div className="flex gap-4">
        <Button href="/page-one">Go to Page One</Button>
        <Button href="/page-two">Go to Page Two</Button>
      </div>
    </main>
  );
}
