import { Navbar } from "./components/layout/navbar";
import { WalletCard } from "./components/wallet/wallet-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-muted/40">
      <Navbar />

      <section className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <WalletCard />
        </div>
      </section>
    </main>
  );
}