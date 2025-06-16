// infrastructure/dataSources/MLJsonFileRepository.js
import { readFileSync } from 'fs';
import { join } from 'path';

export class MLJsonFileRepository {
  constructor(basePath) {
    this.basePath = basePath;
  }

  search({query = '', offset = 0, limit = 50}) {
    const raw = JSON.parse(readFileSync(this.basePath, 'utf8'));
    console.log('lo que recibo en el Repositorio ', query)
    const filtered = query
      ? raw.results.filter(r =>
          r.title.toLowerCase().includes(query.toLowerCase())
        )
      : raw.results;

    const slice = filtered.slice(offset, offset + limit);

    return {
      ...raw,
      results: slice,
      paging: { total: filtered.length }
    };

  }

  getItem(id) {
    const file = join(this.basePath, `item-${id}.json`);
    return JSON.parse(readFileSync(file, 'utf8'));
  }

  getDescription(id) {
    const file = join(this.basePath, `item-${id}-description.json`);
    return JSON.parse(readFileSync(file, 'utf8'));
  }
}
//docker-compose logs backend
//npm run dev -- --host 0.0.0.0
//docker compose run --rm --service-ports frontend-dev sh