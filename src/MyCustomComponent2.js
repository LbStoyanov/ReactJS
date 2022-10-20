import React from 'react'

export const MyCustomComponent2 = () => {

    const books = ['Harry Potter','Eragon', 'IT'];
  return (
    <div>
        <p>Book's list</p>
        <hr/>
         {books.length >= 1 ? (
            <ul>
                {
                    books.map((book,index) => {
                        return <li key={index}>{book}</li>
                    })
                }
            </ul>
         )
         :(
            <p>No books available</p>
         )

         }              
    </div>
  )
}
