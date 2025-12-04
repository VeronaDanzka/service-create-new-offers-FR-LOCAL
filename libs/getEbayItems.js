import { getAccessToken } from './getAccessToken.js'

async function fetchInventoryItems() {    
  const allItems = [];
  let offset = 0;
  const limit = 200; // Max autorisé pour cet endpoint
  const token = await getAccessToken();

  while (true) {
    const res = await fetch(
      `https://api.ebay.com/sell/inventory/v1/inventory_item?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          Accept: 'application/json',
          'Accept-Language': 'fr-FR'
        },
      }
    );
    const data = await res.json();
    const items = data.inventoryItems || [];
    allItems.push(...items)
    if (items.length < limit) break;
    offset += limit;
  }
  return allItems;
};


export default fetchInventoryItems;