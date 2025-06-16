// application/use‑cases/getItemDetail.js
export function getItemDetail({ repo, mapper }) {
  return async (id) => {
    const [rawItem, rawDesc] = await Promise.all([
      repo.getItem(id),
      repo.getDescription(id)
    ]);
    if (!rawItem) throw new Error('ITEM_NOT_FOUND');
    return mapper(rawItem, rawDesc ?? { plain_text: '' });
  };
}
