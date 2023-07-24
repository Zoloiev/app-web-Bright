import CommentItem from "./CommentItem";
import { commentList } from "./commentList";

const VideoDetailsComment = ({ isModal = false, closeModal = () => {} }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-[16px] text-[#3D3D3D] font-medium">780 Comments</div>
          <div className="flex items-center ml-[30px] lg:ml-[60px]">
            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_226_3204)">
                <path d="M7.73336 0H1.06669C0.698691 0 0.400024 0.297999 0.400024 0.666666C0.400024 1.03533 0.698691 1.33333 1.06669 1.33333H7.73336C8.10202 1.33333 8.40002 1.03533 8.40002 0.666666C8.40002 0.297999 8.10202 0 7.73336 0ZM5.73336 3.33333H1.06669C0.698691 3.33333 0.400024 3.63133 0.400024 4C0.400024 4.36867 0.698691 4.66667 1.06669 4.66667H5.73336C6.10202 4.66667 6.40002 4.36867 6.40002 4C6.40002 3.63133 6.10202 3.33333 5.73336 3.33333ZM3.73336 6.66666H1.06669C0.698691 6.66666 0.400024 6.96466 0.400024 7.33333C0.400024 7.702 0.698691 8 1.06669 8H3.73336C4.10202 8 4.40002 7.702 4.40002 7.33333C4.40002 6.96466 4.10202 6.66666 3.73336 6.66666Z" fill="#3D3D3D" />
              </g>
              <defs>
                <clipPath id="clip0_226_3204">
                  <rect width="8.8" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-[16px] text-[#3D3D3D] font-medium ml-[4px]">Sort By</div>
          </div>
        </div>
        {isModal &&
          <div className="cursor-pointer hover:opacity-60" onClick={closeModal}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#C400C4" />
              <path d="M14.979 16.8008C14.7395 16.8015 14.5023 16.7547 14.281 16.6631C14.0597 16.5715 13.8588 16.4369 13.6899 16.2671L11.0001 13.5781L8.31026 16.2684C7.96837 16.6103 7.50469 16.8023 7.02119 16.8023C6.5377 16.8023 6.07401 16.6103 5.73213 16.2684C5.39025 15.9265 5.19818 15.4628 5.19818 14.9793C5.19818 14.4958 5.39025 14.0321 5.73213 13.6903L8.42197 11L5.7317 8.31013C5.38982 7.96825 5.19775 7.50456 5.19775 7.02107C5.19775 6.53758 5.38982 6.07389 5.7317 5.73201C6.07358 5.39013 6.53727 5.19806 7.02076 5.19806C7.50426 5.19806 7.96795 5.39013 8.30983 5.73201L11.0001 8.42185L13.6899 5.73158C13.8592 5.5623 14.0602 5.42801 14.2814 5.3364C14.5025 5.24479 14.7396 5.19763 14.979 5.19763C15.2184 5.19763 15.4555 5.24479 15.6766 5.3364C15.8978 5.42801 16.0988 5.5623 16.2681 5.73158C16.4374 5.90086 16.5716 6.10183 16.6632 6.32301C16.7549 6.54418 16.802 6.78124 16.802 7.02064C16.802 7.26004 16.7549 7.4971 16.6632 7.71828C16.5716 7.93946 16.4374 8.14042 16.2681 8.3097L13.5782 11L16.2685 13.6898C16.5234 13.9447 16.697 14.2695 16.7673 14.623C16.8376 14.9766 16.8015 15.343 16.6635 15.676C16.5255 16.0091 16.2919 16.2937 15.9921 16.4939C15.6923 16.6941 15.3399 16.8009 14.9794 16.8008H14.979Z" fill="white" />
            </svg>
          </div>}
      </div>
      <div className="flex my-[18px]">
        <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="avatar" className="rounded-full w-[40px] h-[40px] mr-[16px]" />
        <div className="border-0 rounded-[10px] p-[16px] w-full bg-white">
          <textarea className="bg-none border-0 rounded-[10px] w-full min-h-[65px] relative text-[14px] focus:outline-none" placeholder="Add your comment">
          </textarea>
          <div className="flex items-center mt-[10px] justify-end">
            <button className="px-2 py-3 text-black/30 text-[14px] font-medium hover:opacity-80">CANCEL</button>
            <button className="px-2 py-3 text-black/30 text-[14px] font-medium bg-black/10 ml-[30px] rounded-[6px] hover:opacity-80">COMMENT</button>
          </div>
        </div>
      </div>
      {
        commentList.map((itm, index) => {
          return (
            <CommentItem {...itm} key={"itm" + index} />
          )
        })
      }
    </div >
  )
}

export default VideoDetailsComment;