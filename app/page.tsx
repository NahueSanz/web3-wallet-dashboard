import { Navbar } from "./components/layout/navbar";
import { WalletCard } from "./components/wallet/wallet-card";
import { NetworkStats } from "./components/blockchain/network-stats";
import { Activity, Coins, Globe, Wallet } from "lucide-react";
import { TokenBalance } from "./components/wallet/token-balance";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function Home() {
  return (
    <main className="bg-muted/40">
      {" "}
      <Navbar />
      <section className="container mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-muted-foreground">
            Monitor your wallet activity and blockchain assets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Portfolio Value"
            value="$12,430"
            icon={<Wallet className="h-5 w-5" />}
          />

          <StatsCard
            title="Assets"
            value="4 Tokens"
            icon={<Coins className="h-5 w-5" />}
          />

          <StatsCard
            title="Transactions"
            value="128"
            icon={<Activity className="h-5 w-5" />}
          />

          <StatsCard
            title="Network"
            value="Ethereum"
            icon={<Globe className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <WalletCard />
            <NetworkStats />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <RecentTransactions />
            <TokenBalance />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatsCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>

        {icon}
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

function RecentTransactions() {
  const transactions = [
    {
      type: "Received ETH",
      amount: "+0.42 ETH",
    },
    {
      type: "Sent USDC",
      amount: "-120 USDC",
    },
    {
      type: "Swap",
      amount: "ETH → DAI",
    },
    {
      type: "NFT Mint",
      amount: "0.08 ETH",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <p className="font-medium">{tx.type}</p>

              <p className="text-sm text-muted-foreground">
                Blockchain activity
              </p>
            </div>

            <p className="font-medium">{tx.amount}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
