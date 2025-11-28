// for of -> array loop korar jonno
// for in -> object loop korar jonno

let friends = ["Sujon", "kamal", "Rahim"];
for (const friend of friends) {
  // console.log(friend)
}

for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}

let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

// reverce array
let num = [1, 2, 3, 4, 5, 6, 7];

for (let i = num.length - 1; i >= 0; i--) {
  console.log(num[i]);
}

// let num = [1, 2, 3, 4, 5, 6, 7];

// const reverceNum = num.reverse()
// console.log(reverceNum)
