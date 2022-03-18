// Import stylesheets
import './style.css';

// Write TypeScript code!
function gameOfThrones(s: string): string {
  let arrayElement = [];
  let arrayElementRedondance = [];
  // Write your code here
  for (let i = 0; i < s.length; i++) {
    if (arrayElement.length == 0 || arrayElement.indexOf(s[i]) < 0) {
      arrayElement.push(s[i]);
      arrayElementRedondance.push(1);
    } else if (arrayElement.indexOf(s[i]) > -1) {
      arrayElementRedondance[arrayElement.indexOf(s[i])]++;
    }
  }
  const isBelowThreshold = (currentValue) => currentValue % 2 == 0;

  console.log('# ', arrayElement);
  console.log('# ', arrayElementRedondance);
  if (arrayElementRedondance.every(isBelowThreshold)) {
    return 'YES';
  } else {
    const arr = arrayElementRedondance.filter((el) => el % 2 != 0);
    if (arr.length == 1) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
const t = 'cdefghmnopqrstuvw';
console.log(gameOfThrones(t));
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
