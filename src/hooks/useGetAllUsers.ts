

import { useEffect, useState } from "react";
import { getENSContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetUsers = () => {
  const [users, setUsers] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const contract = getENSContract(readOnlyProvider);
    contract
      .getAllUsers()
      .then((res) => {
        setUsers({
          loading: false,
          data: res,
        });
      })
      .catch((err) => {
        console.error("error fetching proposals: ", err);
        setUsers((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return users;
};

export default useGetUsers;
