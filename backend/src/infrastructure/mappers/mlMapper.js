// infrastructure/mappers/mlMapper.js
export function mapMLSearchToDTO(raw) {
  const categories =
    raw.filters?.find(f => f.id === 'category')?.values[0]?.path_from_root
      .map(c => c.name) ?? [];
  const fmt = new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });  

  const items = raw.results.slice(0, 50).map(r => ({
    id: r.id,
    title: r.title,
    price: {
      currency: r.currency_id,
      amount: Math.floor(r.price),
      decimals: Math.round((r.price % 1) * 100),
      regular_amount: r.original_price ?? null
    },
    picture: r.thumbnail.replace('-I.', '-N.'),
    condition: r.condition,
    free_shipping: r.shipping.free_shipping,
    installments: r.installments
      ? `Mismo precio en ${r.installments.quantity} cuotas de $ ${fmt.format(r.installments.amount)}`
      : null,
    seller: r.seller.nickname
  }));

  return { 
     categories,
     paging: {
      total:  raw.paging.total,
      limit:  raw.results.length,
      page:   raw.paging.page,    
      pages:  raw.paging.pages
     },
     items 
  };
}

export function mapMLItemToDTO(rawItem, rawDesc) {
  const price = rawItem.price ?? 0;
  return {
    item: {
      id:    rawItem.id,
      title: rawItem.title,
      price: {
        currency:        rawItem.currency_id,
        amount:          Math.floor(price),
        decimals:        Math.round((price % 1) * 100),
        regular_amount:  rawItem.original_price ?? null
      },
      pictures:      rawItem.pictures.map(p => p.url),
      condition:     rawItem.condition,                 // new | used | refurbished
      free_shipping: rawItem.shipping.free_shipping,
      sold_quantity: rawItem.sold_quantity,
      installments:  rawItem.installments
        ? `Mismo precio en ${rawItem.installments.quantity} cuotas de $ ${rawItem.installments.amount}`
        : `Mismo precio en 6 cuotas de $ 55.999`,//NO VI DONDE BUSCAR EL DATO
      description:   rawDesc.plain_text,
      attributes:    rawItem.attributes.map(a => ({
        id:         a.id,
        name:       a.name,
        value_name: a.value_name
      })),
      category_path_from_root:
        rawItem.category_path?.map(c => c.name) ?? [],
      seller: 'MERCADOLIBRE',//NO VI DONDE BUSCAR EL DATO
      sold_quantity: 200//NO VI DONDE BUSCAR EL DATO
    }
  };
}
