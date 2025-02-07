import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch, useSelector } from "react-redux";
const Viewpaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];


  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          disabled
          placeholder="Enter Your Title here"
          value={paste.title}
          // onChange={(e) => setTitle(e.target.value)}
        />

      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={paste.content}
          disabled
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}

        >
          rows={20}
        </textarea>
      </div>
    </div>
  );
}

export default Viewpaste