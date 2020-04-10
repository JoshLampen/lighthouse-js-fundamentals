const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (z = 0; z < ingredients.length; z++) {
  console.log(ingredients[z]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (w = ingredients.length - 1; w >= 0; w--) {
  console.log(ingredients[w]);
}