"use client";

import { useBlockNumber, useGasPrice } from "wagmi";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function NetworkStats() {
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  const { data: gasPrice } = useGasPrice();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Ethereum Network</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <div>
          <p className="text-sm text-muted-foreground">Latest Block</p>

          <p className="text-3xl font-bold">{blockNumber?.toString()}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Gas Price</p>

          <p className="text-3xl font-bold">
            {gasPrice ? (Number(gasPrice) / 1_000_000_000).toFixed(2) : "--"}{" "}
            GWEI
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
