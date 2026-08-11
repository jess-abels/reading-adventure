export const books = [
  {
    id: 1,
    title: "The Tale of Peter Rabbit",
    author: "Beatrix Potter",
    description:
      "Peter Rabbit sneaks into Mr. McGregor's garden and finds himself in a very tricky adventure.",
    status: "currentlyReading",
    cover: "/books/peter-rabbit.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "Once upon a time there were four little Rabbits, and their names were Flopsy, Mopsy, Cotton-tail, and Peter."
      },
      {
        pageNumber: 2,
        text: "Peter was a very naughty little Rabbit. He ran straight to Mr. McGregor's garden."
      },
      {
        pageNumber: 3,
        text: "He nibbled some radishes and then began looking for something else to eat."
      }
    ]
  },

  {
    id: 2,
    title: "The Tale of Squirrel Nutkin",
    author: "Beatrix Potter",
    description:
      "Squirrel Nutkin travels to Owl Island with his brothers and discovers that teasing can get him into trouble.",
    status: "wantToRead",
    currentPage: 2,
    cover: "/books/squirrel-nutkin.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "Once upon a time there was a little red squirrel, and his name was Nutkin."
      },
      {
        pageNumber: 2,
        text: "Nutkin and his brother Twinkleberry sailed across the lake to Owl Island."
      },
      {
        pageNumber: 3,
        text: "They brought some presents for Old Brown, the owl who lived in a hollow tree."
      }
    ]
  },

  {
    id: 3,
    title: "The Tale of Benjamin Bunny",
    author: "Beatrix Potter",
    description:
      "Benjamin Bunny and his cousin Peter return to Mr. McGregor's garden looking for trouble.",
    status: "finished",
    cover: "/books/benjamin-bunny.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "One morning a little rabbit named Benjamin Bunny went for a walk with his cousin Peter."
      },
      {
        pageNumber: 2,
        text: "The two rabbits climbed carefully over the garden wall."
      },
      {
        pageNumber: 3,
        text: "They found themselves surrounded by rows of vegetables."
      }
    ]
  },

  {
    id: 4,
    title: "The Little Red Hen",
    author: "Florence White Williams",
    description:
      "A hardworking little hen discovers what happens when her friends refuse to help.",
    status: "wantToRead",
    cover: "/books/little-red-hen.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "Once upon a time, a Little Red Hen lived on a farm with several other animals."
      },
      {
        pageNumber: 2,
        text: "One day she found some grains of wheat and decided to plant them."
      },
      {
        pageNumber: 3,
        text: "She asked the other animals if they would help her, but no one wanted to."
      }
    ]
  },

  {
    id: 5,
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    description:
      "Dorothy is swept away to the magical land of Oz and begins an unforgettable adventure.",
    status: "currentlyReading",
    currentPage: 3,
    cover: "/books/wizard-of-oz.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "Dorothy lived in the middle of the great Kansas prairies with her Aunt Em and Uncle Henry."
      },
      {
        pageNumber: 2,
        text: "One day a terrible cyclone lifted their house high into the air."
      },
      {
        pageNumber: 3,
        text: "When Dorothy opened the door, she discovered that she was no longer in Kansas."
      }
    ]
  },

  {
    id: 6,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description:
      "Alice follows a curious white rabbit and tumbles into a strange and wonderful world.",
    status: "finished",
    cover: "/books/alice.jpg",
    pages: [
      {
        pageNumber: 1,
        text: "Alice was beginning to get very tired of sitting by her sister on the bank."
      },
      {
        pageNumber: 2,
        text: "Suddenly, a White Rabbit with pink eyes ran close by her."
      },
      {
        pageNumber: 3,
        text: "Alice ran across the field after him and saw him pop down a large rabbit hole."
      }
    ]
  }
];