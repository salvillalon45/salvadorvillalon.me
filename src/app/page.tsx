import { HydrateClient } from "~/trpc/server";
import HomePage from "./(home)/HomePage";

export default function Home() {
  return (
    <HydrateClient>
      <main className="home-page-main">
        <HomePage />
      </main>
    </HydrateClient>
  );
}
