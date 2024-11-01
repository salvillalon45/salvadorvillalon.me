import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./(home)/HomePage";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="homePageMain">
        <HomePage />
      </main>
    </HydrateClient>
  );
}
