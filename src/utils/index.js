import { information as ENinformation } from '../data/english'
import { information as SPinformation } from '../data/spanish'

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getInformationByLanguage(language) {
  if (language === 'EN') {
    return { ...ENinformation }
  } else {
    return { ...SPinformation }
  }
}
