import { SEPOLIA_ID } from "../connection";
import { getENSContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
    Number(chainId) === SEPOLIA_ID;

export const getReadWriteBallotContract = async (provider) => {
    const readWriteProvider = getProvider(provider);

    const signer = await readWriteProvider.getSigner();

    return getENSContract(signer);
};
