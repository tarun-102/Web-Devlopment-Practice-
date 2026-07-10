// const accountid = "255254245452fd"

// let accountemail = "example@.com";

// let accountpassword = "1234";

// let acountcity = "ahmdebad";

// // console.table([ accountid, accountemail, accountpassword, acountcity ]);

// const gameName = "Call of Duty";

//  const slicedGameName = gameName.substring(0, 4);
//  console.log(slicedGameName);

//  console.log(Math.ceil(4.55))

// const myArray = [1, 2, 3, 4, 5];

//  myArray.unshift(9);
//  console.log(myArray);
//  myArray.shift();
//  console.log(myArray);


//  const mysym = symbol("key1");

// console.log(this)

// const user = () => {
//     let username = "ahmed";
//     console.log(this);
// }

// user()

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }


// const city = ["ahmdabad" ,"surat", "mumbai", "delhi", "banglore"];


// for(const num of city) {
//     console.log(city);
// }



const map =  new Map();
map.set("name", "ahmed");
map.set("age", 25);
map.set("city", "ahmdabad"); 


for (const [key, value] of map) {
    console.log(`${key}: ${value}`  );
}