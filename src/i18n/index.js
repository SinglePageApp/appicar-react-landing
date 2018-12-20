import i18next from 'i18next';

import en from './en.json';
import es from './es.json';
import it from './it.json';


/**
 * I18N initialization.
 */
export let i18n = i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'en',
  // Using simple hardcoded resources for simple example
  resources: {
    en: { translation: en },
    es: { translation: es },
    it: { translation: it }
  }
});

/**
 * Changes the app's current language.
 * 
 * @param {string} language The language code, i.e: 'en', 'es', 'it', etc.
 */
export function changeLanguage(language) {
  i18n.changeLanguage(language, (err) => {
    if (err) {
      console.log('Language error: ', err);
    }
  });
}
