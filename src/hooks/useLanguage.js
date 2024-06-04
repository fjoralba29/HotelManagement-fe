import i18n, { appLanguages } from '../i18n'
import { useCallback } from 'react'

const useLanguage = () => {
    const currentLanguage = i18n.language
    const availableLanguages = appLanguages.map(lang => ({
        label: lang.label,
        value: lang.value,
    }))
    const changeLanguage = useCallback(lang => {
        i18n.changeLanguage(lang)
    }, [])

    return { currentLanguage, availableLanguages, changeLanguage }
}

export default useLanguage
