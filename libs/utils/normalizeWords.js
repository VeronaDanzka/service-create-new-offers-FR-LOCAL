export function normalizeWords(input, locale = 'fr-FR') {
  return input
    .trim()                       // enlève les espaces en début/fin
    .toLocaleLowerCase(locale)    // tout en minuscules pour partir d’une base propre
    .split(/\s+/)                 // coupe sur 1 ou plusieurs espaces
    .map(word =>
      word.charAt(0).toLocaleUpperCase(locale) + word.slice(1)
    )
    .join(' ');
}