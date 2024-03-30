import { useEffect, useState } from "react";
import { getChatContract, getENSContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useGetMessages = (receiver: string) => {
  const { chainId, address } = useWeb3ModalAccount();

  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    const contract = getChatContract(readOnlyProvider);
    const ensContract = getENSContract(readOnlyProvider);
    const sender = ensContract.getNameByAddress(address).then((senderName) => {
      console.log(senderName);
      
      contract
        .getMessages(senderName, receiver)
        .then((res) => {
          const receivedMessages = res.map((message:any) => ({
            sender: message.sender,
            message: message.content,
            receiver: message.recipient,
          }));
        
          setMessages({
            loading: false,
            data: receivedMessages,
          });
        })
        .catch((err) => {
          console.error("error fetching proposals: ", err);
          setMessages((prev) => ({ ...prev, loading: false }));
        });
    });
  }, [address, receiver]);

  return messages;
};

export default useGetMessages;
