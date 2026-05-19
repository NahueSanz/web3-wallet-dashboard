import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Web3 Wallet Dashboard",
  projectId: "demo-project-id",
  chains: [mainnet, sepolia],
});