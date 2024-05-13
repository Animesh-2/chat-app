import React from "react";
import { RxAvatar } from "react-icons/rx";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-black-200">John Doe</p>
            <span className="text-xl">😁</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;


// [STARTER CODE SNIPPET FOR THIS ]

// import React from "react";
// import { RxAvatar } from "react-icons/rx";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" alt="user avatar" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-black-200">John Doe</p>
//             <span className="text-xl">😁</span>
//           </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
