//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const myFavRecipe = {
  title: "Pol sambola",
  servings: 2,
  ingredients: ["coconut", "salt", "chili powder", "dry fish chips"],
};

const recipeOutput = () =>
  `°${myFavRecipe.title}\n °${myFavRecipe.servings}\n °Ingredients :-\n °${myFavRecipe.ingredients[0]}\n °${myFavRecipe.ingredients[1]}\n °${myFavRecipe.ingredients[2]}\n °${myFavRecipe.ingredients[3]}\n`;

console.log(myFavRecipe);

console.log(recipeOutput());

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

const favBooks = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
];

for (var favBook of favBooks) {
  console.log(`${favBook.title} by ${favBook.author}`);
  if (favBook.alreadyRead === true) {
    console.log(`You already read ${favBook.title} by ${favBook.author}`);
  } else {
    console.log(`You still need to read ${favBook.title} by ${favBook.author}`);
  }
}
