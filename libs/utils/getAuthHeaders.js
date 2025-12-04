import { getAccessToken } from '../getAccessToken.js';

// Cache local du token
let tokenCache = {
  access_token: null,
  expires_at: 0
};

// Génère les headers dynamiquement avec refresh auto
export async function getAuthHeaders() {
  const now = Date.now();

  if (!tokenCache.access_token || now > tokenCache.expires_at - 300000) {
    const { access_token, expires_in } = await getAccessToken();
    tokenCache.access_token = access_token;
    tokenCache.expires_at = now + expires_in * 1000;
    console.log('🔁 Nouveau token obtenu');
  }

  return {
    Authorization: `Bearer ${tokenCache.access_token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Language': 'fr-FR',
    'Content-Language': 'fr-FR'
  };
};