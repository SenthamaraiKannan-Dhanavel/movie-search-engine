const express = require('express');
const app = express();
const port = 3001;

const movies = [
    {
        "movie_name": "The Shawshank Redemption",
        "movie_year": 1994,
        "movie_rating": 9.3,
        "user_votes": "2.9M"
      },
      {
        "movie_name": "The Godfather",
        "movie_year": 1972,
        "movie_rating": 9.2,
        "user_votes": "2M"
      },
      {
        "movie_name": "The Dark Knight",
        "movie_year": 2008,
        "movie_rating": 9,
        "user_votes": "2.9M"
      },
      {
        "movie_name": "The Godfather Part II",
        "movie_year": 1974,
        "movie_rating": 9,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "12 Angry Men",
        "movie_year": 1957,
        "movie_rating": 9,
        "user_votes": "863K"
      },
      {
        "movie_name": "Schindler's List",
        "movie_year": 1993,
        "movie_rating": 9,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "The Lord of the Rings: The Return of the King",
        "movie_year": 2003,
        "movie_rating": 9,
        "user_votes": "2M"
      },
      {
        "movie_name": "Pulp Fiction",
        "movie_year": 1994,
        "movie_rating": 8.9,
        "user_votes": "2.2M"
      },
      {
        "movie_name": "The Lord of the Rings: The Fellowship of the Ring",
        "movie_year": 2001,
        "movie_rating": 8.9,
        "user_votes": "2M"
      },
      {
        "movie_name": "The Good, the Bad and the Ugly",
        "movie_year": 1966,
        "movie_rating": 8.8,
        "user_votes": "810K"
      },
      {
        "movie_name": "Forrest Gump",
        "movie_year": 1994,
        "movie_rating": 8.8,
        "user_votes": "2.3M"
      },
      {
        "movie_name": "The Lord of the Rings: The Two Towers",
        "movie_year": 2002,
        "movie_rating": 8.8,
        "user_votes": "1.8M"
      },
      {
        "movie_name": "Fight Club",
        "movie_year": 1999,
        "movie_rating": 8.8,
        "user_votes": "2.3M"
      },
      {
        "movie_name": "Inception",
        "movie_year": 2010,
        "movie_rating": 8.8,
        "user_votes": "2.5M"
      },
      {
        "movie_name": "Star Wars: Episode V - The Empire Strikes Back",
        "movie_year": 1980,
        "movie_rating": 8.7,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "The Matrix",
        "movie_year": 1999,
        "movie_rating": 8.7,
        "user_votes": "2M"
      },
      {
        "movie_name": "Dune: Part Two",
        "movie_year": 2024,
        "movie_rating": 8.7,
        "user_votes": "338K"
      },
      {
        "movie_name": "Goodfellas",
        "movie_year": 1990,
        "movie_rating": 8.7,
        "user_votes": "1.3M"
      },
      {
        "movie_name": "One Flew Over the Cuckoo's Nest",
        "movie_year": 1975,
        "movie_rating": 8.7,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Se7en",
        "movie_year": 1995,
        "movie_rating": 8.6,
        "user_votes": "1.8M"
      },
      {
        "movie_name": "Interstellar",
        "movie_year": 2014,
        "movie_rating": 8.7,
        "user_votes": "2.1M"
      },
      {
        "movie_name": "It's a Wonderful Life",
        "movie_year": 1946,
        "movie_rating": 8.6,
        "user_votes": "499K"
      },
      {
        "movie_name": "Seven Samurai",
        "movie_year": 1954,
        "movie_rating": 8.6,
        "user_votes": "366K"
      },
      {
        "movie_name": "The Silence of the Lambs",
        "movie_year": 1991,
        "movie_rating": 8.6,
        "user_votes": "1.5M"
      },
      {
        "movie_name": "Saving Private Ryan",
        "movie_year": 1998,
        "movie_rating": 8.6,
        "user_votes": "1.5M"
      },
      {
        "movie_name": "City of God",
        "movie_year": 2002,
        "movie_rating": 8.6,
        "user_votes": "800K"
      },
      {
        "movie_name": "Life Is Beautiful",
        "movie_year": 1997,
        "movie_rating": 8.6,
        "user_votes": "742K"
      },
      {
        "movie_name": "The Green Mile",
        "movie_year": 1999,
        "movie_rating": 8.6,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "Terminator 2: Judgment Day",
        "movie_year": 1991,
        "movie_rating": 8.6,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Star Wars: Episode IV - A New Hope",
        "movie_year": 1977,
        "movie_rating": 8.6,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "Back to the Future",
        "movie_year": 1985,
        "movie_rating": 8.5,
        "user_votes": "1.3M"
      },
      {
        "movie_name": "Spirited Away",
        "movie_year": 2001,
        "movie_rating": 8.6,
        "user_votes": "847K"
      },
      {
        "movie_name": "The Pianist",
        "movie_year": 2002,
        "movie_rating": 8.5,
        "user_votes": "910K"
      },
      {
        "movie_name": "Parasite",
        "movie_year": 2019,
        "movie_rating": 8.5,
        "user_votes": "956K"
      },
      {
        "movie_name": "Psycho",
        "movie_year": 1960,
        "movie_rating": 8.5,
        "user_votes": "717K"
      },
      {
        "movie_name": "Spider-Man: Across the Spider-Verse",
        "movie_year": 2023,
        "movie_rating": 8.6,
        "user_votes": "366K"
      },
      {
        "movie_name": "Gladiator",
        "movie_year": 2000,
        "movie_rating": 8.5,
        "user_votes": "1.6M"
      },
      {
        "movie_name": "The Lion King",
        "movie_year": 1994,
        "movie_rating": 8.5,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Léon: The Professional",
        "movie_year": 1994,
        "movie_rating": 8.5,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "The Departed",
        "movie_year": 2006,
        "movie_rating": 8.5,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "American History X",
        "movie_year": 1998,
        "movie_rating": 8.5,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Whiplash",
        "movie_year": 2014,
        "movie_rating": 8.5,
        "user_votes": "986K"
      },
      {
        "movie_name": "The Prestige",
        "movie_year": 2006,
        "movie_rating": 8.5,
        "user_votes": "1.4M"
      },
      {
        "movie_name": "Grave of the Fireflies",
        "movie_year": 1988,
        "movie_rating": 8.5,
        "user_votes": "310K"
      },
      {
        "movie_name": "Harakiri",
        "movie_year": 1962,
        "movie_rating": 8.6,
        "user_votes": "68K"
      },
      {
        "movie_name": "The Usual Suspects",
        "movie_year": 1995,
        "movie_rating": 8.5,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Casablanca",
        "movie_year": 1942,
        "movie_rating": 8.5,
        "user_votes": "605K"
      },
      {
        "movie_name": "The Intouchables",
        "movie_year": 2011,
        "movie_rating": 8.5,
        "user_votes": "927K"
      },
      {
        "movie_name": "Cinema Paradiso",
        "movie_year": 1988,
        "movie_rating": 8.5,
        "user_votes": "282K"
      },
      {
        "movie_name": "Modern Times",
        "movie_year": 1936,
        "movie_rating": 8.5,
        "user_votes": "259K"
      },
      {
        "movie_name": "Rear Window",
        "movie_year": 1954,
        "movie_rating": 8.5,
        "user_votes": "521K"
      },
      {
        "movie_name": "Once Upon a Time in the West",
        "movie_year": 1968,
        "movie_rating": 8.5,
        "user_votes": "349K"
      },
      {
        "movie_name": "Alien",
        "movie_year": 1979,
        "movie_rating": 8.5,
        "user_votes": "949K"
      },
      {
        "movie_name": "City Lights",
        "movie_year": 1931,
        "movie_rating": 8.5,
        "user_votes": "196K"
      },
      {
        "movie_name": "Apocalypse Now",
        "movie_year": 1979,
        "movie_rating": 8.4,
        "user_votes": "709K"
      },
      {
        "movie_name": "Django Unchained",
        "movie_year": 2012,
        "movie_rating": 8.5,
        "user_votes": "1.7M"
      },
      {
        "movie_name": "Memento",
        "movie_year": 2000,
        "movie_rating": 8.4,
        "user_votes": "1.3M"
      },
      {
        "movie_name": "12th Fail",
        "movie_year": 2023,
        "movie_rating": 9,
        "user_votes": "109K"
      },
      {
        "movie_name": "WALL·E",
        "movie_year": 2008,
        "movie_rating": 8.4,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Raiders of the Lost Ark",
        "movie_year": 1981,
        "movie_rating": 8.4,
        "user_votes": "1M"
      },
      {
        "movie_name": "The Lives of Others",
        "movie_year": 2006,
        "movie_rating": 8.4,
        "user_votes": "410K"
      },
      {
        "movie_name": "Sunset Blvd.",
        "movie_year": 1950,
        "movie_rating": 8.4,
        "user_votes": "236K"
      },
      {
        "movie_name": "Paths of Glory",
        "movie_year": 1957,
        "movie_rating": 8.4,
        "user_votes": "212K"
      },
      {
        "movie_name": "Avengers: Infinity War",
        "movie_year": 2018,
        "movie_rating": 8.4,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Spider-Man: Into the Spider-Verse",
        "movie_year": 2018,
        "movie_rating": 8.4,
        "user_votes": "669K"
      },
      {
        "movie_name": "Witness for the Prosecution",
        "movie_year": 1957,
        "movie_rating": 8.4,
        "user_votes": "138K"
      },
      {
        "movie_name": "The Shining",
        "movie_year": 1980,
        "movie_rating": 8.4,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "The Great Dictator",
        "movie_year": 1940,
        "movie_rating": 8.4,
        "user_votes": "237K"
      },
      {
        "movie_name": "Aliens",
        "movie_year": 1986,
        "movie_rating": 8.4,
        "user_votes": "762K"
      },
      {
        "movie_name": "Inglourious Basterds",
        "movie_year": 2009,
        "movie_rating": 8.4,
        "user_votes": "1.6M"
      },
      {
        "movie_name": "The Dark Knight Rises",
        "movie_year": 2012,
        "movie_rating": 8.4,
        "user_votes": "1.8M"
      },
      {
        "movie_name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "movie_year": 1964,
        "movie_rating": 8.4,
        "user_votes": "517K"
      },
      {
        "movie_name": "American Beauty",
        "movie_year": 1999,
        "movie_rating": 8.3,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Oldboy",
        "movie_year": 2003,
        "movie_rating": 8.3,
        "user_votes": "634K"
      },
      {
        "movie_name": "Coco",
        "movie_year": 2017,
        "movie_rating": 8.4,
        "user_votes": "589K"
      },
      {
        "movie_name": "Amadeus",
        "movie_year": 1984,
        "movie_rating": 8.4,
        "user_votes": "427K"
      },
      {
        "movie_name": "Toy Story",
        "movie_year": 1995,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Das Boot",
        "movie_year": 1981,
        "movie_rating": 8.4,
        "user_votes": "264K"
      },
      {
        "movie_name": "Avengers: Endgame",
        "movie_year": 2019,
        "movie_rating": 8.4,
        "user_votes": "1.3M"
      },
      {
        "movie_name": "Braveheart",
        "movie_year": 1995,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Joker",
        "movie_year": 2019,
        "movie_rating": 8.4,
        "user_votes": "1.5M"
      },
      {
        "movie_name": "Princess Mononoke",
        "movie_year": 1997,
        "movie_rating": 8.3,
        "user_votes": "433K"
      },
      {
        "movie_name": "Good Will Hunting",
        "movie_year": 1997,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Your Name.",
        "movie_year": 2016,
        "movie_rating": 8.4,
        "user_votes": "319K"
      },
      {
        "movie_name": "Once Upon a Time in America",
        "movie_year": 1984,
        "movie_rating": 8.3,
        "user_votes": "377K"
      },
      {
        "movie_name": "High and Low",
        "movie_year": 1963,
        "movie_rating": 8.4,
        "user_votes": "53K"
      },
      {
        "movie_name": "3 Idiots",
        "movie_year": 2009,
        "movie_rating": 8.4,
        "user_votes": "433K"
      },
      {
        "movie_name": "Singin' in the Rain",
        "movie_year": 1952,
        "movie_rating": 8.3,
        "user_votes": "260K"
      },
      {
        "movie_name": "Capernaum",
        "movie_year": 2018,
        "movie_rating": 8.4,
        "user_votes": "105K"
      },
      {
        "movie_name": "Requiem for a Dream",
        "movie_year": 2000,
        "movie_rating": 8.3,
        "user_votes": "897K"
      },
      {
        "movie_name": "Come and See",
        "movie_year": 1985,
        "movie_rating": 8.4,
        "user_votes": "97K"
      },
      {
        "movie_name": "Oppenheimer",
        "movie_year": 2023,
        "movie_rating": 8.3,
        "user_votes": "716K"
      },
      {
        "movie_name": "Toy Story 3",
        "movie_year": 2010,
        "movie_rating": 8.3,
        "user_votes": "891K"
      },
      {
        "movie_name": "Star Wars: Episode VI - Return of the Jedi",
        "movie_year": 1983,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Eternal Sunshine of the Spotless Mind",
        "movie_year": 2004,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "The Hunt",
        "movie_year": 2012,
        "movie_rating": 8.3,
        "user_votes": "364K"
      },
      {
        "movie_name": "2001: A Space Odyssey",
        "movie_year": 1968,
        "movie_rating": 8.3,
        "user_votes": "718K"
      },
      {
        "movie_name": "Reservoir Dogs",
        "movie_year": 1992,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Ikiru",
        "movie_year": 1952,
        "movie_rating": 8.3,
        "user_votes": "87K"
      },
      {
        "movie_name": "Lawrence of Arabia",
        "movie_year": 1962,
        "movie_rating": 8.3,
        "user_votes": "314K"
      },
      {
        "movie_name": "The Apartment",
        "movie_year": 1960,
        "movie_rating": 8.3,
        "user_votes": "196K"
      },
      {
        "movie_name": "North by Northwest",
        "movie_year": 1959,
        "movie_rating": 8.3,
        "user_votes": "346K"
      },
      {
        "movie_name": "Citizen Kane",
        "movie_year": 1941,
        "movie_rating": 8.3,
        "user_votes": "465K"
      },
      {
        "movie_name": "Incendies",
        "movie_year": 2010,
        "movie_rating": 8.3,
        "user_votes": "199K"
      },
      {
        "movie_name": "Vertigo",
        "movie_year": 1958,
        "movie_rating": 8.3,
        "user_votes": "426K"
      },
      {
        "movie_name": "M",
        "movie_year": 1931,
        "movie_rating": 8.3,
        "user_votes": "168K"
      },
      {
        "movie_name": "Double Indemnity",
        "movie_year": 1944,
        "movie_rating": 8.3,
        "user_votes": "167K"
      },
      {
        "movie_name": "Scarface",
        "movie_year": 1983,
        "movie_rating": 8.3,
        "user_votes": "915K"
      },
      {
        "movie_name": "Amélie",
        "movie_year": 2001,
        "movie_rating": 8.3,
        "user_votes": "793K"
      },
      {
        "movie_name": "Full Metal Jacket",
        "movie_year": 1987,
        "movie_rating": 8.3,
        "user_votes": "789K"
      },
      {
        "movie_name": "Heat",
        "movie_year": 1995,
        "movie_rating": 8.3,
        "user_votes": "718K"
      },
      {
        "movie_name": "A Clockwork Orange",
        "movie_year": 1971,
        "movie_rating": 8.3,
        "user_votes": "880K"
      },
      {
        "movie_name": "Up",
        "movie_year": 2009,
        "movie_rating": 8.3,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "To Kill a Mockingbird",
        "movie_year": 1962,
        "movie_rating": 8.3,
        "user_votes": "333K"
      },
      {
        "movie_name": "The Sting",
        "movie_year": 1973,
        "movie_rating": 8.3,
        "user_votes": "279K"
      },
      {
        "movie_name": "A Separation",
        "movie_year": 2011,
        "movie_rating": 8.3,
        "user_votes": "258K"
      },
      {
        "movie_name": "Indiana Jones and the Last Crusade",
        "movie_year": 1989,
        "movie_rating": 8.2,
        "user_votes": "810K"
      },
      {
        "movie_name": "Die Hard",
        "movie_year": 1988,
        "movie_rating": 8.2,
        "user_votes": "944K"
      },
      {
        "movie_name": "Metropolis",
        "movie_year": 1927,
        "movie_rating": 8.3,
        "user_votes": "185K"
      },
      {
        "movie_name": "Like Stars on Earth",
        "movie_year": 2007,
        "movie_rating": 8.3,
        "user_votes": "206K"
      },
      {
        "movie_name": "Snatch",
        "movie_year": 2000,
        "movie_rating": 8.2,
        "user_votes": "909K"
      },
      {
        "movie_name": "Hamilton",
        "movie_year": 2020,
        "movie_rating": 8.3,
        "user_votes": "113K"
      },
      {
        "movie_name": "L.A. Confidential",
        "movie_year": 1997,
        "movie_rating": 8.2,
        "user_votes": "617K"
      },
      {
        "movie_name": "1917",
        "movie_year": 2019,
        "movie_rating": 8.2,
        "user_votes": "673K"
      },
      {
        "movie_name": "Bicycle Thieves",
        "movie_year": 1948,
        "movie_rating": 8.3,
        "user_votes": "175K"
      },
      {
        "movie_name": "Taxi Driver",
        "movie_year": 1976,
        "movie_rating": 8.2,
        "user_votes": "919K"
      },
      {
        "movie_name": "Downfall",
        "movie_year": 2004,
        "movie_rating": 8.2,
        "user_votes": "375K"
      },
      {
        "movie_name": "Dangal",
        "movie_year": 2016,
        "movie_rating": 8.3,
        "user_votes": "210K"
      },
      {
        "movie_name": "For a Few Dollars More",
        "movie_year": 1965,
        "movie_rating": 8.2,
        "user_votes": "274K"
      },
      {
        "movie_name": "Batman Begins",
        "movie_year": 2005,
        "movie_rating": 8.2,
        "user_votes": "1.6M"
      },
      {
        "movie_name": "The Wolf of Wall Street",
        "movie_year": 2013,
        "movie_rating": 8.2,
        "user_votes": "1.6M"
      },
      {
        "movie_name": "Some Like It Hot",
        "movie_year": 1959,
        "movie_rating": 8.2,
        "user_votes": "283K"
      },
      {
        "movie_name": "Green Book",
        "movie_year": 2018,
        "movie_rating": 8.2,
        "user_votes": "569K"
      },
      {
        "movie_name": "The Kid",
        "movie_year": 1921,
        "movie_rating": 8.2,
        "user_votes": "135K"
      },
      {
        "movie_name": "The Father",
        "movie_year": 2020,
        "movie_rating": 8.2,
        "user_votes": "192K"
      },
      {
        "movie_name": "Judgment at Nuremberg",
        "movie_year": 1961,
        "movie_rating": 8.3,
        "user_votes": "85K"
      },
      {
        "movie_name": "All About Eve",
        "movie_year": 1950,
        "movie_rating": 8.2,
        "user_votes": "139K"
      },
      {
        "movie_name": "The Truman Show",
        "movie_year": 1998,
        "movie_rating": 8.2,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Top Gun: Maverick",
        "movie_year": 2022,
        "movie_rating": 8.2,
        "user_votes": "693K"
      },
      {
        "movie_name": "Shutter Island",
        "movie_year": 2010,
        "movie_rating": 8.2,
        "user_votes": "1.5M"
      },
      {
        "movie_name": "There Will Be Blood",
        "movie_year": 2007,
        "movie_rating": 8.2,
        "user_votes": "640K"
      },
      {
        "movie_name": "Casino",
        "movie_year": 1995,
        "movie_rating": 8.2,
        "user_votes": "563K"
      },
      {
        "movie_name": "Ran",
        "movie_year": 1985,
        "movie_rating": 8.2,
        "user_votes": "136K"
      },
      {
        "movie_name": "Jurassic Park",
        "movie_year": 1993,
        "movie_rating": 8.2,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "The Sixth Sense",
        "movie_year": 1999,
        "movie_rating": 8.2,
        "user_votes": "1M"
      },
      {
        "movie_name": "Pan's Labyrinth",
        "movie_year": 2006,
        "movie_rating": 8.2,
        "user_votes": "702K"
      },
      {
        "movie_name": "Unforgiven",
        "movie_year": 1992,
        "movie_rating": 8.2,
        "user_votes": "436K"
      },
      {
        "movie_name": "No Country for Old Men",
        "movie_year": 2007,
        "movie_rating": 8.2,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "A Beautiful Mind",
        "movie_year": 2001,
        "movie_rating": 8.2,
        "user_votes": "986K"
      },
      {
        "movie_name": "The Thing",
        "movie_year": 1982,
        "movie_rating": 8.2,
        "user_votes": "466K"
      },
      {
        "movie_name": "The Treasure of the Sierra Madre",
        "movie_year": 1948,
        "movie_rating": 8.2,
        "user_votes": "132K"
      },
      {
        "movie_name": "Kill Bill: Vol. 1",
        "movie_year": 2003,
        "movie_rating": 8.2,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Yojimbo",
        "movie_year": 1961,
        "movie_rating": 8.2,
        "user_votes": "131K"
      },
      {
        "movie_name": "Monty Python and the Holy Grail",
        "movie_year": 1975,
        "movie_rating": 8.2,
        "user_votes": "570K"
      },
      {
        "movie_name": "The Great Escape",
        "movie_year": 1963,
        "movie_rating": 8.2,
        "user_votes": "259K"
      },
      {
        "movie_name": "Finding Nemo",
        "movie_year": 2003,
        "movie_rating": 8.2,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Rashomon",
        "movie_year": 1950,
        "movie_rating": 8.2,
        "user_votes": "180K"
      },
      {
        "movie_name": "Prisoners",
        "movie_year": 2013,
        "movie_rating": 8.2,
        "user_votes": "808K"
      },
      {
        "movie_name": "Howl's Moving Castle",
        "movie_year": 2004,
        "movie_rating": 8.2,
        "user_votes": "448K"
      },
      {
        "movie_name": "The Elephant Man",
        "movie_year": 1980,
        "movie_rating": 8.2,
        "user_votes": "258K"
      },
      {
        "movie_name": "Chinatown",
        "movie_year": 1974,
        "movie_rating": 8.1,
        "user_votes": "349K"
      },
      {
        "movie_name": "Dial M for Murder",
        "movie_year": 1954,
        "movie_rating": 8.2,
        "user_votes": "189K"
      },
      {
        "movie_name": "Gone with the Wind",
        "movie_year": 1939,
        "movie_rating": 8.2,
        "user_votes": "334K"
      },
      {
        "movie_name": "V for Vendetta",
        "movie_year": 2005,
        "movie_rating": 8.2,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "Lock, Stock and Two Smoking Barrels",
        "movie_year": 1998,
        "movie_rating": 8.1,
        "user_votes": "616K"
      },
      {
        "movie_name": "The Secret in Their Eyes",
        "movie_year": 2009,
        "movie_rating": 8.2,
        "user_votes": "222K"
      },
      {
        "movie_name": "Inside Out",
        "movie_year": 2015,
        "movie_rating": 8.1,
        "user_votes": "784K"
      },
      {
        "movie_name": "Raging Bull",
        "movie_year": 1980,
        "movie_rating": 8.1,
        "user_votes": "380K"
      },
      {
        "movie_name": "Three Billboards Outside Ebbing, Missouri",
        "movie_year": 2017,
        "movie_rating": 8.1,
        "user_votes": "554K"
      },
      {
        "movie_name": "Trainspotting",
        "movie_year": 1996,
        "movie_rating": 8.1,
        "user_votes": "725K"
      },
      {
        "movie_name": "The Bridge on the River Kwai",
        "movie_year": 1957,
        "movie_rating": 8.1,
        "user_votes": "233K"
      },
      {
        "movie_name": "Spider-Man: No Way Home",
        "movie_year": 2021,
        "movie_rating": 8.2,
        "user_votes": "876K"
      },
      {
        "movie_name": "Fargo",
        "movie_year": 1996,
        "movie_rating": 8.1,
        "user_votes": "726K"
      },
      {
        "movie_name": "Klaus",
        "movie_year": 2019,
        "movie_rating": 8.2,
        "user_votes": "189K"
      },
      {
        "movie_name": "Catch Me If You Can",
        "movie_year": 2002,
        "movie_rating": 8.1,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Warrior",
        "movie_year": 2011,
        "movie_rating": 8.1,
        "user_votes": "497K"
      },
      {
        "movie_name": "Godzilla Minus One",
        "movie_year": 2023,
        "movie_rating": 8.3,
        "user_votes": "48K"
      },
      {
        "movie_name": "Gran Torino",
        "movie_year": 2008,
        "movie_rating": 8.1,
        "user_votes": "814K"
      },
      {
        "movie_name": "My Neighbor Totoro",
        "movie_year": 1988,
        "movie_rating": 8.1,
        "user_votes": "379K"
      },
      {
        "movie_name": "Million Dollar Baby",
        "movie_year": 2004,
        "movie_rating": 8.1,
        "user_votes": "721K"
      },
      {
        "movie_name": "Harry Potter and the Deathly Hallows: Part 2",
        "movie_year": 2011,
        "movie_rating": 8.1,
        "user_votes": "947K"
      },
      {
        "movie_name": "Children of Heaven",
        "movie_year": 1997,
        "movie_rating": 8.2,
        "user_votes": "81K"
      },
      {
        "movie_name": "12 Years a Slave",
        "movie_year": 2013,
        "movie_rating": 8.1,
        "user_votes": "740K"
      },
      {
        "movie_name": "Blade Runner",
        "movie_year": 1982,
        "movie_rating": 8.1,
        "user_votes": "822K"
      },
      {
        "movie_name": "Before Sunrise",
        "movie_year": 1995,
        "movie_rating": 8.1,
        "user_votes": "339K"
      },
      {
        "movie_name": "Ben-Hur",
        "movie_year": 1959,
        "movie_rating": 8.1,
        "user_votes": "253K"
      },
      {
        "movie_name": "The Grand Budapest Hotel",
        "movie_year": 2014,
        "movie_rating": 8.1,
        "user_votes": "885K"
      },
      {
        "movie_name": "Barry Lyndon",
        "movie_year": 1975,
        "movie_rating": 8.1,
        "user_votes": "183K"
      },
      {
        "movie_name": "Gone Girl",
        "movie_year": 2014,
        "movie_rating": 8.1,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Hacksaw Ridge",
        "movie_year": 2016,
        "movie_rating": 8.1,
        "user_votes": "593K"
      },
      {
        "movie_name": "The Gold Rush",
        "movie_year": 1925,
        "movie_rating": 8.1,
        "user_votes": "118K"
      },
      {
        "movie_name": "In the Name of the Father",
        "movie_year": 1993,
        "movie_rating": 8.1,
        "user_votes": "187K"
      },
      {
        "movie_name": "Memories of Murder",
        "movie_year": 2003,
        "movie_rating": 8.1,
        "user_votes": "216K"
      },
      {
        "movie_name": "Dead Poets Society",
        "movie_year": 1989,
        "movie_rating": 8.1,
        "user_votes": "545K"
      },
      {
        "movie_name": "On the Waterfront",
        "movie_year": 1954,
        "movie_rating": 8.1,
        "user_votes": "165K"
      },
      {
        "movie_name": "Wild Tales",
        "movie_year": 2014,
        "movie_rating": 8.1,
        "user_votes": "216K"
      },
      {
        "movie_name": "The General",
        "movie_year": 1926,
        "movie_rating": 8.1,
        "user_votes": "98K"
      },
      {
        "movie_name": "The Deer Hunter",
        "movie_year": 1978,
        "movie_rating": 8.1,
        "user_votes": "362K"
      },
      {
        "movie_name": "Mad Max: Fury Road",
        "movie_year": 2015,
        "movie_rating": 8.1,
        "user_votes": "1.1M"
      },
      {
        "movie_name": "Monsters, Inc.",
        "movie_year": 2001,
        "movie_rating": 8.1,
        "user_votes": "977K"
      },
      {
        "movie_name": "Sherlock Jr.",
        "movie_year": 1924,
        "movie_rating": 8.2,
        "user_votes": "57K"
      },
      {
        "movie_name": "The Third Man",
        "movie_year": 1949,
        "movie_rating": 8.1,
        "user_votes": "182K"
      },
      {
        "movie_name": "Wild Strawberries",
        "movie_year": 1957,
        "movie_rating": 8.1,
        "user_votes": "115K"
      },
      {
        "movie_name": "The Wages of Fear",
        "movie_year": 1953,
        "movie_rating": 8.2,
        "user_votes": "66K"
      },
      {
        "movie_name": "Jaws",
        "movie_year": 1975,
        "movie_rating": 8.1,
        "user_votes": "658K"
      },
      {
        "movie_name": "How to Train Your Dragon",
        "movie_year": 2010,
        "movie_rating": 8.1,
        "user_votes": "799K"
      },
      {
        "movie_name": "Mary and Max",
        "movie_year": 2009,
        "movie_rating": 8.1,
        "user_votes": "187K"
      },
      {
        "movie_name": "Mr. Smith Goes to Washington",
        "movie_year": 1939,
        "movie_rating": 8.1,
        "user_votes": "121K"
      },
      {
        "movie_name": "Ratatouille",
        "movie_year": 2007,
        "movie_rating": 8.1,
        "user_votes": "823K"
      },
      {
        "movie_name": "Ford v Ferrari",
        "movie_year": 2019,
        "movie_rating": 8.1,
        "user_votes": "472K"
      },
      {
        "movie_name": "Tokyo Story",
        "movie_year": 1953,
        "movie_rating": 8.1,
        "user_votes": "68K"
      },
      {
        "movie_name": "The Big Lebowski",
        "movie_year": 1998,
        "movie_rating": 8.1,
        "user_votes": "859K"
      },
      {
        "movie_name": "The Seventh Seal",
        "movie_year": 1957,
        "movie_rating": 8.1,
        "user_votes": "198K"
      },
      {
        "movie_name": "Room",
        "movie_year": 2015,
        "movie_rating": 8.1,
        "user_votes": "450K"
      },
      {
        "movie_name": "Rocky",
        "movie_year": 1976,
        "movie_rating": 8.1,
        "user_votes": "627K"
      },
      {
        "movie_name": "Logan",
        "movie_year": 2017,
        "movie_rating": 8.1,
        "user_votes": "830K"
      },
      {
        "movie_name": "Spotlight",
        "movie_year": 2015,
        "movie_rating": 8.1,
        "user_votes": "502K"
      },
      {
        "movie_name": "Hotel Rwanda",
        "movie_year": 2004,
        "movie_rating": 8.1,
        "user_votes": "372K"
      },
      {
        "movie_name": "Platoon",
        "movie_year": 1986,
        "movie_rating": 8.1,
        "user_votes": "439K"
      },
      {
        "movie_name": "The Terminator",
        "movie_year": 1984,
        "movie_rating": 8.1,
        "user_votes": "923K"
      },
      {
        "movie_name": "The Passion of Joan of Arc",
        "movie_year": 1928,
        "movie_rating": 8.1,
        "user_votes": "61K"
      },
      {
        "movie_name": "Before Sunset",
        "movie_year": 2004,
        "movie_rating": 8.1,
        "user_votes": "287K"
      },
      {
        "movie_name": "La haine",
        "movie_year": 1995,
        "movie_rating": 8.1,
        "user_votes": "196K"
      },
      {
        "movie_name": "The Best Years of Our Lives",
        "movie_year": 1946,
        "movie_rating": 8.1,
        "user_votes": "70K"
      },
      {
        "movie_name": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "movie_year": 2003,
        "movie_rating": 8.1,
        "user_votes": "1.2M"
      },
      {
        "movie_name": "The Exorcist",
        "movie_year": 1973,
        "movie_rating": 8.1,
        "user_votes": "454K"
      },
      {
        "movie_name": "Rush",
        "movie_year": 2013,
        "movie_rating": 8.1,
        "user_votes": "513K"
      },
      {
        "movie_name": "Jai Bhim",
        "movie_year": 2021,
        "movie_rating": 8.7,
        "user_votes": "217K"
      },
      {
        "movie_name": "Network",
        "movie_year": 1976,
        "movie_rating": 8.1,
        "user_votes": "170K"
      },
      {
        "movie_name": "Stand by Me",
        "movie_year": 1986,
        "movie_rating": 8.1,
        "user_votes": "441K"
      },
      {
        "movie_name": "The Wizard of Oz",
        "movie_year": 1939,
        "movie_rating": 8.1,
        "user_votes": "428K"
      },
      {
        "movie_name": "The Incredibles",
        "movie_year": 2004,
        "movie_rating": 8,
        "user_votes": "807K"
      },
      {
        "movie_name": "Hachi: A Dog's Tale",
        "movie_year": 2009,
        "movie_rating": 8.1,
        "user_votes": "311K"
      },
      {
        "movie_name": "The Handmaiden",
        "movie_year": 2016,
        "movie_rating": 8.1,
        "user_votes": "172K"
      },
      {
        "movie_name": "Into the Wild",
        "movie_year": 2007,
        "movie_rating": 8.1,
        "user_votes": "657K"
      },
      {
        "movie_name": "My Father and My Son",
        "movie_year": 2005,
        "movie_rating": 8.2,
        "user_votes": "93K"
      },
      {
        "movie_name": "The Sound of Music",
        "movie_year": 1965,
        "movie_rating": 8.1,
        "user_votes": "260K"
      },
      {
        "movie_name": "The Battle of Algiers",
        "movie_year": 1966,
        "movie_rating": 8.1,
        "user_votes": "66K"
      },
      {
        "movie_name": "The Grapes of Wrath",
        "movie_year": 1940,
        "movie_rating": 8.1,
        "user_votes": "100K"
      },
      {
        "movie_name": "To Be or Not to Be",
        "movie_year": 1942,
        "movie_rating": 8.1,
        "user_votes": "43K"
      },
      {
        "movie_name": "Groundhog Day",
        "movie_year": 1993,
        "movie_rating": 8,
        "user_votes": "684K"
      },
      {
        "movie_name": "Amores Perros",
        "movie_year": 2000,
        "movie_rating": 8.1,
        "user_votes": "253K"
      },
      {
        "movie_name": "Rebecca",
        "movie_year": 1940,
        "movie_rating": 8.1,
        "user_votes": "147K"
      },
      {
        "movie_name": "The Iron Giant",
        "movie_year": 1999,
        "movie_rating": 8.1,
        "user_votes": "227K"
      },
      {
        "movie_name": "Cool Hand Luke",
        "movie_year": 1967,
        "movie_rating": 8.1,
        "user_votes": "188K"
      },
      {
        "movie_name": "The Help",
        "movie_year": 2011,
        "movie_rating": 8.1,
        "user_votes": "492K"
      },
      {
        "movie_name": "It Happened One Night",
        "movie_year": 1934,
        "movie_rating": 8.1,
        "user_votes": "112K"
      },
      {
        "movie_name": "Aladdin",
        "movie_year": 1992,
        "movie_rating": 8,
        "user_votes": "466K"
      },
      {
        "movie_name": "Dances with Wolves",
        "movie_year": 1990,
        "movie_rating": 8,
        "user_votes": "290K"
      },
      {
        "movie_name": "Paris, Texas",
        "movie_year": 1984,
        "movie_rating": 8.1,
        "user_votes": "118K"
      }
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/api/movies', (req, res) => {
  const searchQuery = req.query.q || '';

  if (!searchQuery) {
    res.json([]);
  } else {
    const filteredMovies = movies.filter((movie) =>
      movie.movie_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.json(filteredMovies);
  }
});

app.listen(port, () => {
  console.log(`Mock API server running on port ${port}`);
});