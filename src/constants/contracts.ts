import { ethers } from "ethers";
import ensAbi from "./ensAbi.json";
import chatAbi from "./chatAbi.json";

export const getENSContract = (providerOrSigner:any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_ENS_ADDRESS || "",
    ensAbi,
    providerOrSigner
  );

  export const getChatContract = (providerOrSigner:any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_CHAT_ADDRESS || "",
    chatAbi,
    providerOrSigner
  );