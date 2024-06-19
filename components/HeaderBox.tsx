// import React from 'react'

// const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
//   return (
//     <div className='header-box'>
//         <h1 className='header-box-title'>
//             {title}
//             {type === 'greeting' && (
//                 <span className='text-innbitRed'>
//                     &nbsp;{user}
//                 </span>
//             )}
//         </h1>
//         <p className='header-box-subtext'>{subtext}</p>
//     </div>
//   )
// }

// export default HeaderBox







import Link from 'next/link';
import Image from 'next/image';

const HeaderBox = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications">
        </button>
        <button aria-label="Refresh">
        </button>
        <button aria-label="More options">
        </button>
      </div>
    </nav>
  );
};

export default HeaderBox;
