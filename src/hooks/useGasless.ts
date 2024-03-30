// import { useCallback, useEffect, useState } from "react";
// import { getENSContract } from "../constants/contracts";
// import { getProvider, readOnlyProvider } from "../constants/providers";

// import {
//   createSmartAccountClient,
//   BiconomySmartAccountV2,
// } from "@biconomy/account";

// import { useWeb3ModalProvider } from "@web3modal/ethers/react";

// const useGasless = () => {
//   const [address, setAddress] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [smartAccount, setSmartAccount] =
//     useState<BiconomySmartAccountV2 | null>(null);
//   const [provider, setProvider] = useState(null);
//   const { walletProvider } = useWeb3ModalProvider();

//   const bundlerUrl = process.env.NEXT_PUPLIC_BUNDLER_URL;
//   const paymasterApiKey = process.env.NEXT_PUPLIC_PAYMASTER_API_KEY;
//   const readWriteProvider = getProvider(walletProvider);

//   return useCallback(async () => {

//     const { ethereum } = window;
//     try {
//       setLoading(true);
//       const signer = await readWriteProvider.getSigner();
//       // const signer = provider.getSigner();
//       let biconomySmartAccount = await createSmartAccountClient({
//         signer,
//         bundlerUrl: bundlerUrl || "",
//         biconomyPaymasterApiKey: paymasterApiKey || "",
//       });
//       setAddress(await biconomySmartAccount.getAccountAddress());
//       setSmartAccount(biconomySmartAccount);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [bundlerUrl, paymasterApiKey, readWriteProvider]);
// };

// export default useGasless;
