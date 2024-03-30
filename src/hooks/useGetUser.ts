import { useEffect, useState } from "react";
import { getENSContract } from "../constants/contracts";
import { readOnlyProvider, } from "../constants/providers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";


const useGetUser = () => {
    const { chainId, address } = useWeb3ModalAccount();
  const [user, setUser] = useState({
    loading: true,
    user: [],
  });

  useEffect(() => {
    const contract = getENSContract(readOnlyProvider);
    contract
      .getUserInfo(address)
      .then((res) => {
        setUser({
          loading: false,
          user: res,
        });
      })
      .catch((err) => {
        console.error("error fetching user: ", err);
        setUser((prev) => ({ ...prev, loading: false }));
      });
  }, [address]);

//   console.log(user);
  

  return user;
};

export default useGetUser;