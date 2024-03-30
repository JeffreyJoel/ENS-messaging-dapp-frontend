import { ethers } from "ethers";
import ensAbi from "./ensAbi.json";
import chatAbi from "./chatAbi.json";
import {
  createSmartAccountClient,
  BiconomySmartAccountV2,
} from "@biconomy/account";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "./providers";

const bundlerUrl= "https://bundler.biconomy.io/api/v2/80001/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"
const paymasterApiKey = "paymasterApiKey";

// const { walletProvider } = useWeb3ModalProvider();

//     const readWriteProvider = getProvider(walletProvider);
//     const signer =  readWriteProvider.getSigner();

export const getENSContract = (providerOrSigner: any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_ENS_ADDRESS || "",
    ensAbi,
    providerOrSigner
  );

export const getChatContract = (providerOrSigner: any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_CHAT_ADDRESS || "",
    chatAbi,
    providerOrSigner
  );
// export const  biconomySmartAccount =  createSmartAccountClient({
//   signer,
//   bundlerUrl,
//   biconomyPaymasterApiKey: paymasterApiKey,
// });
// setAddress(await biconomySmartAccount.getAccountAddress());
// setSmartAccount(biconomySmartAccount);
