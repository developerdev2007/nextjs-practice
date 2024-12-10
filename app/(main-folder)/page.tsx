import { auth } from "@/auth";
import Header from "../components/Header/Header";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto w-full max-w-screen-2xl  bg-sky-50 dark:bg-slate-900 dark:text-white text-base">
      <Header session={session} title="Welcome" />
      <button className="flex flex-col items-end">Signin</button>
    </div>
  );
}
