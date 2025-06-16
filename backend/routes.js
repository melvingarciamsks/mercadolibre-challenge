import { Router } from 'express';
import { join } from 'path';

import { MLJsonFileRepository } from './src/infrastructure/dataSources/MLJsonFileRepository.js';
import { mapMLSearchToDTO, mapMLItemToDTO } from './src/infrastructure/mappers/mlMapper.js';
import { makeSearchController } from './src/interfaces/searchController.js';
import { makeItemController } from './src/interfaces/itemController.js';

const DATA_DIR = join(process.cwd(), 'data-iphone');

// 1) Repositorios: hoy leen JSON, mañana pueden hacer fetch() al API real
const searchRepo = new MLJsonFileRepository(join(DATA_DIR, 'search-MLA-iphone.json'));
const itemRepo   = new MLJsonFileRepository(DATA_DIR, /* mode: folder‑per‑item */);

// 2) Controllers inyectados con repo + mapper
const searchController = makeSearchController({ repo: searchRepo, mapper: mapMLSearchToDTO });
const itemController   = makeItemController({   repo: itemRepo,   mapper: mapMLItemToDTO   });

const router = Router();

router.get('/items',     searchController);   // /api/items?search=iphone
router.get('/items/:id', itemController);     // /api/items/MLA123

export default router;
