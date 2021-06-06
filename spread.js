console.log('**** - Spread Operators - ****');
const first = [1,2,3];
const second = [4,5,6];

const combinedNumbers = first.concat(second);
console.log(combinedNumbers);

// Spreading previous array - getting all items from previous array
const arrayWithPreviousArrayItems = [...first];
console.log(arrayWithPreviousArrayItems);

// Spreading previous array - getting all items from previous array + adding new items in array in middle
const arrayWithOldArraysAndNewItems = [...first, 3.1,3.2,...second];
console.log(arrayWithOldArraysAndNewItems);

// clone array
const clone = [...first];
console.log(clone);

// Applying spread operators on objects
const firstObject = {
    name:'Sony'
}

const secondObject = {
    address:'Te Atatu'
}

// combining objects with spread operators
const combinedObject = {...firstObject, country:'New Zealand',...secondObject};
console.log(combinedObject);