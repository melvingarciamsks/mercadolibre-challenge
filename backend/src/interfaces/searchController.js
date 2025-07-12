// interfaces/searchController.js
import { searchItems } from '../application/use-cases/searchItems.js';

export function makeSearchController({ repo, mapper }) {
  const useCase = searchItems({ repo, mapper: mapper });

  return async function searchController(req, res, next) {
    try {
      const q   = (req.query.search || '').toLowerCase();   // hoy no filtras; se deja por si mañana sí
      const page  = parseInt(req.query.page  || '1', 10);
      const limit = parseInt(req.query.limit || '10', 10);
      //console.log('lo que recibe en la interfaz >> ',  q);
      const dto = await useCase(q, page, limit);                         
      res.json(dto);
    } catch (err) {
      next(err);
    }
  };
}
