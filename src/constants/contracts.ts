import { ethers } from "ethers";
import Abi from "./ensAbi.json";

export const getENSContract = (providerOrSigner:any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_ENS_ADDRESS || "",
    Abi,
    providerOrSigner
  );

  export const getChatContract = (providerOrSigner:any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_ENS_ADDRESS || "",
    Abi,
    providerOrSigner
  );