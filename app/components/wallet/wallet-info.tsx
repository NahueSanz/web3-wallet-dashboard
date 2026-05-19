"use client";

import { useAccount, useBalance, useChainId } from "wagmi";

export function WalletInfo() {
  const { address, isConnected } = useAccount();

  const chainId = useChainId();

  const { data: balance } = useBalance({
    address,
  });

  if (!isConnected) {
    return (
      <div className="text-center text-muted-foreground">
        Wallet not connected
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-xl border p-6 w-full max-w-md">
      <div>
        <p className="text-sm text-muted-foreground">
          Address
        </p>

        <p className="font-mono break-all">
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
    </div>
  );
}