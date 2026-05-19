"use client";

import { useAccount, useBalance, useChainId } from "wagmi";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
          <CardTitle>
            Wallet
          </CardTitle>
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
        <CardTitle>
          Wallet Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Address
          </p>

          <p className="font-mono break-all text-sm">
            {address}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Network
          </p>

          <p>{chainId}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Balance
          </p>

          <p>
            {balance?.formatted} {balance?.symbol}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}