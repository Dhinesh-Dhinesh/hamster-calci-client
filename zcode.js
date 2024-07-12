function calculateCardGrowth(initialPph, initialPrice, numLevels) {
  const pphGrowthFactor = 1.07; // PPH growth factor
  const priceGrowthBase = 1.0246950765653693; // Base for price growth

  const pphByLevel = [];
  const priceByLevel = [];

  for (let level = 1; level <= numLevels; level++) {
    const pph = initialPph * Math.pow(pphGrowthFactor, level - 1);
    const price = initialPrice * Math.pow(priceGrowthBase, (level - 1) ** 2 + 3 * (level - 1));

    pphByLevel.push({
      level: level - 1,
      pph: pph
    });
    priceByLevel.push({
      price: price,
      level: level - 1
    });
  }

  return { pphByLevel, priceByLevel };
}

// Example usage
const initialPph = 100;               //initial pph of card
const initialPrice = 1000;            //initial price of card
const numLevels = 20;

const { pphByLevel, priceByLevel } = calculateCardGrowth(initialPph, initialPrice, numLevels);

console.log("PPH by Level:");
console.table(pphByLevel);

console.log("Price by Level:");
console.table(priceByLevel);













//^to get nxt card pph and price

// function calculateCardGrowth(initialPph, initialPrice, cardLevel) {

//   const nxtCardLevel = cardLevel + 1;

//   const pphGrowthFactor = 1.07; // PPH growth factor
//   const priceGrowthBase = 1.0246950765653693; // Base for price growth

//   const pph = Math.round(initialPph * Math.pow(pphGrowthFactor, nxtCardLevel - 1));
//   const price = Math.round(initialPrice * Math.pow(priceGrowthBase, (nxtCardLevel - 1) ** 2 + 3 * (nxtCardLevel - 1)));


//   console.log(pph, price, cardLevel)

//   return { pph, price, cardLevel }
// }

// // Example usage
// const initialPph = 3000;               //initial pph of card
// const initialPrice = 95000;            //initial price of card
// const level = 6;

// const { pph, price, cardLevel } = calculateCardGrowth(initialPph, initialPrice, level);

// console.log(pph, price, cardLevel)