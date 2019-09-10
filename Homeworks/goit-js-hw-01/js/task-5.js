let price;
let country_name;
let country_input = prompt('What country are you from?');

switch (country_input.toLowerCase()) {
  case 'china':
    country_name = 'China';
    price = 100;
    break;

  case 'chili':
    country_name = 'Chili';
    price = 250;
    break;

  case 'australia':
    country_name = 'Ausralia';
    price = 170;
    break;

  case 'india':
    country_name = 'India';
    price = 80;
    break;

  case 'jamaica':
    country_name = 'Jamaica';
    price = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
console.log(`Delivery to ${country_name} will cost ${price} credits`);
alert(`Delivery to ${country_name} will cost ${price} credits`);
