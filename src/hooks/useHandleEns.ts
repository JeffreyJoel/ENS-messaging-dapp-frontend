import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getENSContract } from "../constants/contracts";
import { useRouter } from "next/navigation";

const useCreateENS = (name: string, imageUrl: string) => {
  const { chainId, address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const router = useRouter();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getENSContract(signer);

    try {
      const transaction = await contract.createENS(name, imageUrl);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);
      if (receipt.status === 1) {
        router.push("/users");
      } else {
        console.error("Transaction failed");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to Transfer");
    }
  }, [chainId, walletProvider, imageUrl, name]);
};

export default useCreateENS;
