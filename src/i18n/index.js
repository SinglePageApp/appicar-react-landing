import i18next from 'i18next';

import en from './en.json';
import es from './es.json';
import it from './it.json';


i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: 'en',
  // Using simple hardcoded resources for simple example
  resources: {
    en: { translation: en },
    es: { translation: es },
    it: { translation: it }
  },
});

export default (text) => i18next.t(text);
