"use client";

import { useAccount, useBalance, useChainId } from "wagmi";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function WalletCard() {
  const { address, isConnected } = useAccount();

  const chainId = useChainId();

  const { data: balance } = useBalance({
    address,
  });

  if (!isConnected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Wallet</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">
            Connect your wallet to continue.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">Address</p>

          <p className="font-mono text-sm break-all">{address}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Network</p>

            <p className="font-semibold">Sepolia</p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Chain ID</p>

            <p className="font-semibold">{chainId}</p>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">ETH Balance</p>

          <p className="text-2xl font-bold">
            {balance?.formatted ? Number(balance.formatted).toFixed(4) : "0"}{" "}
            {balance?.symbol}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
