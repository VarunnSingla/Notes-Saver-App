import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(""); //value is for content in input area
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now.toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    }
    //create
    else {
      dispatch(addToPastes(paste));
  }

  //after creation or updation we need to clear

  setTitle("");
  setValue("");
  setSearchParams({});
}

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter Your Title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste} className = "p-2 rounded-2xl mt-2">{pasteId ? "Update My Paste" : "Create My paste"}</button>
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={value}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
        >
          rows={20}
        </textarea>
      </div>
    </div>
  );
};

export default Home;
