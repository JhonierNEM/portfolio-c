import { IMGs_Others } from '../../assets'

export default function Success({ message, icon = true, view, setView }) {
  return (
    <div
      className={`${
        view ? 'fixed' : 'hidden'
      } top-2 right-2 w-[96%] rounded bg-bgFirst/90 p-4 flex flex-col justify-center items-center border shadow z-50 sm:w-[320px] sm:flex-row sm:flex-wrap`}
    >
      {icon ? (
        <img className="sm:w-[40px]" src={IMGs_Others.alert.iconsSuccess} />
      ) : null}
      <span className="text-green-800 text-xl sm:text-lg sm:ml-2">
        {message}
      </span>
      <button
        className="bg-bgSecond text-txFirst font-bold rounded mr-2 mt-2 p-2 self-end hover:bg-hvSecond"
        onClick={setView}
      >
        Ok
      </button>
    </div>
  )
}
