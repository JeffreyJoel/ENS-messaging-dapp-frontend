"use client";

import { useState, useRef } from "react";
import useCreateENS from "@/hooks/useHandleEns";

export default function Register() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const createENS = useCreateENS(
    name,
    `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`
  );

  // const inputFile = useRef(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const uploadFile = async (fileToUpload: File) => {
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
      <div className="p-0 md:p-6 pb-4 bg-background md:border md:shadow-md rounded-2xl w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Create ENS</h2>
        </div>
        <div className="mt-3 flex flex-col gap-4">
          <label className="text-lg font-semibold">
            Type in your desired ENS to use this platform.
          </label>
          <div className=" mt-3 p-3 rounded-lg flex items-center border h-12">
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

          <button
            disabled={uploading}
            onClick={() => inputFile.current?.click()}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          <button onClick={createENS}>Create</button>
          {/* </form> */}
        </div>
        {/* </Form> */}
      </div>
    </div>
  );
}
