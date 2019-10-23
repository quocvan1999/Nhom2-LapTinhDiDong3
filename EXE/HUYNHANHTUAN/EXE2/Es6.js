// function sayHello(domain = 'HuynhAnhTuan')
// {
//     return domain;
// }

// console.log("Không truyền tham số" + sayHello());
// console.log("Có truyền tham số" + sayHello('facebook.com'));

let domainList = (main, sub, ...other) =>
{
    console.log("Main: " + main);
    console.log("Sub: " + sub);
    console.log("Other");
    console.log("other");
}

// Gọi hàm
domainList('facebook.com', 'zalo.com', 'instagram.com', 'twitter.com');


/*-------------------------------------------------------------------------------p*/
// 
let date = {
    day: 10,
    month: 10,
    year: 2019
}

// Chuyển giá trị vào ba biến
let {day: d, month: m, year: y} = date;

// In kêt quả
console.log("Day: " + d);
console.log("Month: " + m);
console.log("Year " + y);
