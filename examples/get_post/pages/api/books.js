const books = [
    {
      id: 1,
      title: "Things fall apart",
      pages: 209,
      language: "English"
      },
    {
      id: 2,
      title: "Fairy tails",
      pages: 784,
      language: "Danish"
      },
    {
      id: 3,
      title: "The book of Job",
      pages: 176,
      language: "Hebrew"
      },
    {
      id: 4,
      title: "Pride and Prejudice",
      pages: 443,
      language: "French"
      }
  ]




export default function handler(req, res) {
    if(req.method === 'GET') {
        console.log('get request');
        res.status(200)
    .json(books)
    }
    else if (req.method === 'POST') {
        const title = req.body.title
        const pages = req.body.pages
        const language = req.body.language
        const newBook = {
            id: Date.now(),
            title,
            pages,
            language
        }
        books.push(newBook)
        res.status(201)
        .json(newBook)
    }
    
}