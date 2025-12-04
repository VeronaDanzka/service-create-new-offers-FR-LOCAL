import fetch from 'node-fetch';

const {
  EBAY_CLIENT_ID,
  EBAY_CLIENT_SECRET,
  EBAY_REFRESH_TOKEN
} = process.env;

export async function getAccessToken() {
  const auth = Buffer.from(`${EBAY_CLIENT_ID}:${EBAY_CLIENT_SECRET}`).toString('base64');
  try {
    const response = await fetch('https://api.ebay.com/identity/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: EBAY_REFRESH_TOKEN,
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Nouveau access_token récupéré :');
      return data;
    } else {
      throw new Error(data.error_description || 'Erreur inconnue');
    }
  } catch (error) {
    console.error('❌ Erreur lors de la récupération du access_token :', error);
    throw error;
  }
};
