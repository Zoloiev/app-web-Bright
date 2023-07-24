import SearchSvg from "./Svg/SearchSvg"

const FormSearch = () => {
  return (
    <form className="relative items-center justify-between hidden col-span-0 sm:col-span-6 sm:flex">
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative w-1/3">
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       <SearchSvg />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-3 pr-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-2xl outline-0 outline-offset-0 focus:border-bu-main dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        placeholder="Search..."
        required
      />
    </div>
  </form>  )
}

export default FormSearch