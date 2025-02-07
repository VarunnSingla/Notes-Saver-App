import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
   const [searchTerm, setSerachTerm] = useState('')
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes
    (searchTerm.toLowerCase())
  );
  console.log(pastes);


  const handleDelete(pasteId) {

    dispatch(removeFromPastes
    (pasteId));
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
                       Edit
                    </button>
                    <button>
                       View
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                       Delete
                    </button>

                    <button>
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
