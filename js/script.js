

let movies = [
    {
        title: "Побег из Шоушенка",
        year: 1994,
        rating: 9.2,
        director: "Frank Darabont",
        runtime: "two hours twenty two minutes",
        getOscar: true,
        main_actor:
        {
            name: "Morgan Freeman",
            age: 57,
            gender: "male"
        },
    },
    {
        title: "Крестный отец",
        year: 1972,
        rating: 9.2,
        director: "Frank Darabont",
        runtime: "one hours five minutes",
        getOscar: false,
        main_actor:
        {
            name: "Morgan Adams",
            age: 78,
            gender: "male"
        }
    },
    {
        title: "Темный рыцарь",
        year: 2008,
        rating: 9.2,
        director: "Frank Darabont",
        runtime: "two hours ten minutes",
        getOscar: false,
        main_actor:
        {
            name: "Morgan Freeman",
            age: 57,
            gender: "male"
        }
    },
    {
        title: " Крестный отец 2",
        year: 1974,
        rating: 9.1,
        director: "Frank Darabont",
        runtime: "two hours two minutes",
        getOscar: false,
        main_actor:
        {
            name: "Jacke Freeman",
            age: 55,
            gender: "male"
        }
    },
    {
        title: "12 разгневанных мужчин",
        year: 1957,
        rating: 9.0,
        director: "Frank Mariarty",
        runtime: "one hours twenty two minutes",
        getOscar: false,
        main_actor:
        {
            name: "Alex Freeman",
            age: 37,
            gender: "male",
        },
        
    }
]
let new_movies = [
    {
        title: "Бойцовский клуб",
        year: 1999,
        rating: 8.7,
        director: "Frank Mariarty",
        runtime: "one hours twenty two minutes",
        getOscar: false,
        main_actor:
        {
            name: "Alex Gourg",
            age: 39,
            gender: "male",
        },
    },
    {
        title: "Властелин колец: Возвращение короля",
        year: 2003,
        rating: 8.9,
        director: "Peter Jackson",
        runtime: "three hours twenty one minutes",
        getOscar: true,
        main_actor:
        {
            name: "Elijah Wood",
            age: 39,
            gender: "male",
        },
    },
    {
        title: "Властелин колец: Две крепости ",
        year: 2002,
        rating: 8.7,
        director: "Peter Jackson",
        runtime: "three hours twenty two minutes",
        getOscar: true,
        main_actor:
        {
            name: "Elijah Wood",
            age: 38,
            gender: "male",
        },
    }
]
///////

/// Соеденить два обьекат в одно целое и новое

let all_movies = Object.assign({}, movies, {new_movies}); 

console.log(all_movies);
///////

/// Получть все его ключи в новую переменную

// let keys = Object.keys(all_movies) //or
let keys = Object.keys(...movies)

console.log(keys);
////////

/// Получть все его значения в новую переменную 

// let values = Object.values(all_movies) //or
let values = Object.values(...movies)

console.log(values);

//////
/// Соеденить эти переменные в одну

let keys_values = Object.assign({}, keys, {values})

console.log(keys_values);

///       or

let keys_values1 = Object.entries(movies)
console.log(keys_values1);

/////////


let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
}


movies.forEach((movie) => {
  Object.keys(movie).forEach((key) => {
    let value = movie[key];
    let type = typeof value;
    types[type].push(value);
  });
});
  
console.log(types);














///                      OR








  
// movies.forEach(movie => {
//   Object.entries(movie).forEach(([key, value]) => {
      
//     if (typeof value === "string") {
//       types.string.push(value);
//     } else if (typeof value === "number") {
//       types.number.push(value);
//     } else if (typeof value === "boolean") {
//       types.boolean.push(value);
//     } else {
//       types.object.push(value);
//     }
//   });
// });
  
// console.log(types);
 