export default function filterPravachans(pravachans, searchText, maxResults) {
  console.log('searchText: ' + searchText);
  return pravachans
    .filter(p => {
      if (p.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (p.keywords.toLowerCase().includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
