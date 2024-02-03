const items = ["hello", "hi", "hatdog", "jorder", "babush", "georgeous"];

const test = items.filter(item => item.indexOf("s") !== -1) ;
const test2 = items.filter(item => item.includes("s"))
console.log(test);
console.log(test2);

