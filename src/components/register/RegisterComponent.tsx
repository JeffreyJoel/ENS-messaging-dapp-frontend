"use client";

import { useState, useRef } from "react";
import useCreateENS from "@/hooks/useHandleEns";
import { ArrowBigRightIcon, LucideArrowRightFromLine } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Register() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imgURL, setImgURL] = useState<string | undefined>(undefined);
  const router = useRouter();

  const createENS = useCreateENS(
    name,
    `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`
  );

  // const inputFile = useRef(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const uploadFile = async (fileToUpload: File) => {
    // const blob = new Blob([fileToUpload], { type: "image/jpeg" });
    // const blobURL = URL.createObjectURL(blob);

    // setImgURL(blobURL);
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData.IpfsHash);

      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  return (
    <div className="w-full flex items-center justify-center mt-20">
      <div>
        {/* <button
          type="button"
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
        onClick={()=>{
          router.push("/users");
        }}
        >
          View users
        </button> */}

        <div className="p-0 md:p-6 pb-4 bg-background md:border md:shadow-md rounded-2xl w-full max-w-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold">
              Create your moniker
            </h2>
          </div>
          <div className="mt-3 flex flex-col gap-4">
            <label className="text-lg font-semibold">
              Type in your desired username to use this platform.
            </label>
            <div className=" mt-2 p-3 rounded-lg flex items-center border h-12">
              <input
                type="text"
                placeholder="0x"
                className="border-none ring-offset-0 outline-none bg-transparent w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <input
              type="file"
              id="file"
              ref={inputFile}
              onChange={handleChange}
              style={{ display: "none" }}
            />
              <label
                className="w-full mx-auto flex flex-col items-center px-4 py-6  border-white text-blue rounded-xl shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white"
                onClick={() => inputFile.current?.click()}
              >
                <span className="mt-2 text-base leading-normal text-white">
                  {cid !== "" && !uploading ? "Uploaded" : (uploading ? "Uploading..." : "Upload your profile image")}
                </span>
              </label>

            <button
              onClick={createENS}
              className=" bg-white hover:bg-blue-800 hover:text-white focus:ring-4 dark:focus:ring-blue-800 py-3 text-gray-900 font-semibold rounded-lg"
            >
              Create
            </button>
            {/* </form> */}
          </div>
          {/* </Form> */}
        </div>
      </div>
    </div>
  );
}
