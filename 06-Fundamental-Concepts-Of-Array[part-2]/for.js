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
