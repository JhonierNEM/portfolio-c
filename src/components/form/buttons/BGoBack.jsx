import { Link } from "react-router-dom";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
export default function BGoBack() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <button
      className="text-tx-main rounded-full hover:bg-black p-2 hover:shadow-lg shadow-gray-800"
      onClick={goBack}
    >
      <ArrowSmallLeftIcon className=" w-8 h-auto" />
    </button>
  );
}
