// interfaces/itemController.js
import { getItemDetail } from '../application/use-cases/getItemDetail.js';

export function makeItemController({ repo, mapper }) {
  const useCase = getItemDetail({ repo, mapper: mapper });

  return async function itemController(req, res, next) {
    try {
      const dto = await useCase(req.params.id);
      res.json(dto);
    } catch (err) {
      if (err.message === 'ITEM_NOT_FOUND')
        return res.status(404).json({ error: 'Item not found' });
      next(err);
    }
  };
}