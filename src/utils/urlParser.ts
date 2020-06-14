export function urlParser(url: string) {
  return url ? url.replace('wikipedia', 'm.wikipedia') : '';
}
