import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
   const [searchTerm, setSerachTerm] = useState('')
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allPastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);


  function handleDelete (pasteId) {

    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
      className="p-2 rounded-2xl min-w-[600px] mt-5"
      type="search" 
      placeholder="search here"
      value={searchTerm}
      onChange={(e) => setSerachTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-4">
        {
          filteredData.length >0 &&
          filteredData.map( 
            (paste) => {
            return (
            // eslint-disable-next-line react/jsx-key
            <div className="border">
              <div>
              {paste.title}
                </div>

                <div>
                  {paste.content}
                  </div> 

                  <div className="flex flex-row place-content-evenly">

                    <button>
                      <a href={`/?pasteId=${paste?._id}`}>
                      Edit
                      </a>
                       
                    </button>
                    <button>
                      <a href={`/pastes/${paste?._id}`}> 
                      View
                      </a>
                       
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                       Delete
                    </button>

                    <button onClick={()=> {
                      navigator.clipboard.writeText(paste.content)
                      toast.success("Your Content is copied !")
                    }}>
                       Copy
                    </button>

                    <button>
                       Share
                    </button>

                    <div>
                      {paste.createdAt}
                      </div>
                    </div>
              </div>
              

          )
        })
        }


      </div>
    </div>
  )
};

export default Paste;
