"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <h1 className="text-xl font-bold">
            Web3 Dashboard
          </h1>

          <p className="text-sm text-muted-foreground">
            Blockchain wallet tracker
          </p>
        </div>

        <ConnectButton />
      </div>
    </header>
  );
}