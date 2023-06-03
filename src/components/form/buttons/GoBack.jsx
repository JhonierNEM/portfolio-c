import { Link } from 'react-router-dom'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
export function GoBackButton() {
  return (
    <Link
      to=".."
      className="text-tx-main rounded-full hover:bg-black p-2 hover:shadow-lg shadow-gray-800"
    >
      <ArrowSmallLeftIcon className=" w-8 h-auto" />
    </Link>
  )
}
