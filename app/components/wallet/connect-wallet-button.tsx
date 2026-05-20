"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWalletButton() {
  const { isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        Disconnect
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        connect({
          connector: connectors[0],
        })
      }
      className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-neutral-800"
    >
      Connect Wallet
    </button>
  );
}
