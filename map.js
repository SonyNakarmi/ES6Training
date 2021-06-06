console.log('**** - Maps and Template Literals - ****');
const colors = ['red','green','blue'];
const items = colors.map(color => `<li>+${color}+</li>`);
console.log(items);

console.log('**** - Object Desctructuring - ****');

const address = {
    street:'This is street',
    city:'This is city',
    country:'This is country'
};

// // extracting properties of object globally
// const street = address.street;
// const city = address.city;
// const country = address.country;

// Destructuring Object - line below is same as above
// Defining alias
const {street: st, city, country} = address;
console.log(`st: ${st}\ncity: ${city}\ncountry: ${country}`);

