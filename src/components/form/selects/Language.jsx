import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { setInformation, setLanguage } from '../../../redux/reducers'
import { getInformationByLanguage } from '../../../utils'

const tabLanguage = ['EN', 'SP']
export function LanguageSelect() {
  const dispatch = useDispatch()
  const { language } = useSelector((state) => state.app)
  const [viewSelect, setViewSelect] = useState(false)

  const changeLanguage = (language) => {
    dispatch(setInformation(getInformationByLanguage(language)))
    dispatch(setLanguage(language))
  }

  return (
    <div className="block bg-main relative">
      <button
        onFocus={() => setViewSelect(true)}
        onBlur={() => setTimeout(() => setViewSelect(false), 300)}
        className="group flex gap-x-3 border-b-2 border-main w-8 focus:w-full h-full justify-center focus:jutify-between items-center px-1 py-1 hover:border-hv-main focus:border-hv-main"
      >
        <GlobeAltIcon className="w-6 h-6" />
        <span className="hidden group-focus:block">{language}</span>
      </button>

      {viewSelect && (
        <div className="bg-main absolute left-0 w-full flex flex-col top-full z-50 transition-all shadow-lg shadow-black">
          {tabLanguage.map((tab) => (
            <button
              key={tab}
              disabled={tab === language}
              onClick={() => changeLanguage(tab)}
              className="hover:bg-hv-main hover:font-semibold"
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
