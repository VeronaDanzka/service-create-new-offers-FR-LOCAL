import createNewInventory from './libs/createNewOffers.js';

async function logChunked(obj, chunkSize = 400, delay = 1000) {
  const str = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
  for (let i = 0; i < str.length; i += chunkSize) {
    console.log(str.slice(i, i + chunkSize));
    await new Promise(res => setTimeout(res, delay)); // 10 ms entre chaque log
  }
}
(async () => {
  try {
    const createdOffers = await createNewInventory();
    await logChunked(createdOffers);
    console.log('✅ Mise à jour terminée avec succès pour au total,', createdOffers.offers.length, 'offres.');
    console.log('✅ Mise à jour terminée avec succès pour au total,', createdOffers.inventory.length, 'inventory.');
  } catch (err) {
    console.error('❌ Erreur:', err);
  }
})();


