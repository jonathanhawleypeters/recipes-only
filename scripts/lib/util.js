export function toKabobCase(str) {
  return str
    .replace(/[^a-zA-Z ]/g, '')
    .toLowerCase()
    .split(' ').join('-')
    .replace(/^-+|-+$/g, '');
}
