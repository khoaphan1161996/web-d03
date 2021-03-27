// use for...loop and recursive to get all keys of object
var user = {
    name: "Hieu",
    age: 18,
    appearence: {
      hairColor: "black",
      skinColor: "yellow",
      height: 1700,
      weight: 68,
    },
  };
  
// C1
// function result(user) {
//     let keys = [];
//     for (let key in user) {
//       if (typeof user[key] !== "object") {
//         keys.push(key);
//       } else {
//         for (let key2 in user[key]) {
//           keys.push(key2);
//         }
//       }
//     }
//     return keys;
//   }
  
//   console.log(result(user));

// C2
// function getObjectKeys(object, result = []) {
//   let keys = result;
//   for (let key in object) {
//     if (typeof object[key] !== "object") {
//       keys.push(key);
//     } else getObjectKeys(object[key], keys);
//   }
//   return keys;
// }

// console.log(getObjectKeys(user));
