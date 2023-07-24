interface PaginationProps {
  curPage: number,
  totalPage: number,
  isLeft: boolean
}

const Pagination:React.FC<PaginationProps> = ({ curPage, totalPage, isLeft }) => {
  return (
    <div className={"flex items-center justify-between" + (isLeft ? '' : ' mx-auto')}>
      <div className="cursor-pointer text-[16px] text-[#B8B5C6] font-medium mx-[10px]">Previous</div>
      <div className="mx-[10px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer text-[14px] text-white bg-[#C400C4] rounded-[5px] font-medium first-letter:">1</div>
      <div className="mx-[10px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer text-[14px] text-[#B8B5C6] font-medium">2</div>
      <div className="mx-[10px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer text-[14px] text-[#B8B5C6] font-medium">3</div>
      <div className="mx-[10px] cursor-pointer text-[16px] text-[#C400C4] font-medium">Next</div>
    </div>
  )
}

export default Pagination;