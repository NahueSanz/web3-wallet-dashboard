"use client";

import { formatUnits } from "viem";

import {
  useAccount,
  useReadContract,
} from "wagmi";

import { erc20Abi } from "@/app/lib/erc20Abi";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

const USDC_SEPOLIA =
  "0x1c7d4b196cb0c7b01d743fbc6116a902379c7238";

export function TokenBalance() {
  const { address } = useAccount();

  const { data: symbol } = useReadContract({
    address: USDC_SEPOLIA,
    abi: erc20Abi,
    functionName: "symbol",
  });

  const { data: decimals } = useReadContract({
    address: USDC_SEPOLIA,
    abi: erc20Abi,
    functionName: "decimals",
  });

  const { data: balance } = useReadContract({
    address: USDC_SEPOLIA,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  const formattedBalance =
    balance && decimals
      ? formatUnits(balance, decimals)
      : "0";

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          ERC20 Token Balance
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Sepolia Token
        </p>

        <p className="text-3xl font-bold">
          {Number(formattedBalance).toFixed(2)}{" "}
          {symbol}
        </p>
      </CardContent>
    </Card>
  );
}