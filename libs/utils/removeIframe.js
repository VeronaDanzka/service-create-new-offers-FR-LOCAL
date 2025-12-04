// Supprime les iframes d’un HTML
export function removeIframes(html) {
  return html.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
}