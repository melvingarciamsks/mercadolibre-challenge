// application/use-cases/searchItems.js
export function searchItems({ repo, mapper }) {
  return (query, page = 1, limit = 10) => {

    console.log('caso de usoooo >> ', query);
    const offset = (page - 1) * limit;
    const raw = repo.search({ query, offset, limit });  

    raw.paging.page  = page;
    raw.paging.pages = Math.ceil(raw.paging.total / limit);

    return mapper(raw);
  };
}
