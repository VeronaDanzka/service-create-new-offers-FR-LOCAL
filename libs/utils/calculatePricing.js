// ---------- config calculate shipping pricing Dreamlove & Xtrader by weight ------------
const deliveryD = 7.62;
const delivery500D = 7.62;
const delivery1000D = 7.62;
const delivery2000D = 12.13;
const delivery5000D = 22.39;

const deliveryX = 7.63;
const delivery500X = 8.48;
const delivery1000X = 9.34;
const delivery1760X = 10.19;
const delivery3000X = 22.76;
const delivery5000X = 22.76; 

// ---------- config % ------------
const taxes = 0.1677
const ebayFees = 0.1235
const ebayAds = 0.10
const fixedEbayFee = 0.35
const fixedEbayGift = 1
const marginBenefit = 0.073

//--------------utils ---------------
export function priceMarginD(dealerPrice, weight){
  if(weight >= 0 && weight <= 500){
    const price = (Number(dealerPrice) + deliveryD + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weight > 500 && weight <= 1000) {
    const price = (Number(dealerPrice) + delivery500D + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weight > 1000 && weight <= 2000) {
    const price = (Number(dealerPrice) + delivery1000D + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weight > 2000 && weight <= 5000) {
    const price = (Number(dealerPrice) + delivery2000D + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weight > 5000) {
    const price = (Number(dealerPrice) + delivery5000D + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
}

export function priceMarginX(dealerPrice, weight){
  const weightC = weight ? weight * 1000 : 0; // Convert kg to grams
  if(weightC >= 0 && weightC <= 500){
    const price = (Number(dealerPrice) + deliveryX + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weightC > 500 && weightC <= 1000) {
    const price = (Number(dealerPrice) + delivery500X + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weightC > 1000 && weightC <= 2000) {
    const price = (Number(dealerPrice) + delivery1000X + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weightC > 2000 && weightC <= 5000) {
    const price = (Number(dealerPrice) + delivery1760X + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weightC > 3000) {
    const price = (Number(dealerPrice) + delivery3000X + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
  else if (weightC > 5000) {
    const price = (Number(dealerPrice) + delivery5000X + fixedEbayFee + fixedEbayGift) / ( 1 - (taxes + ebayFees + ebayAds) - marginBenefit);
    return price;
  }
}

