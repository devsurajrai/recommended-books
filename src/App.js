// input => processing => output

import { useState } from 'react'

function App() {
    //database
    const bookGenre = ["Coding", "Personality Development", "Fiction", "Spirituality"]
    const Coding = [{
        name: "You Don't Know Javascript",
        description: "This is a series of books diving deep into the core mechanisms of the JavaScript language.",
        rating: "4.8/5",
    },
    {
        name: "Eloquent Javascript",
        description: "This is a book about JavaScript, programming, and the wonders of the digital. ",
        rating: "4.5/5",
    },
    {
        name: "Clean Code",
        description: " This Book describes the principles, patterns, and practices of writing clean code",
        rating: "4.6/5",
    }
    ]
    const personalityDevelop = [{
        name: "Think and Grow Rich",
        description: "Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book.",
        rating: "4.2/5"
    },
    {
        name: "Ego Is the Enemy",
        description: "Ego Is the Enemy draws on a vast array of stories and examples, from literature to philosophy to history.",
        rating: "4.2/5"
    },
    {
        name: "Atomic Habits",
        description: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
        rating: "4.2/5"
    }
    ]

    const fiction = [{
        name: "Harry Potter and the Deathly Hallows",
        description: "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series",
        rating: "4.6/5"
    },
    {
        name: "The Name of the Wind",
        description: "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss.",
        rating: "4.5/5"
    },
    {
        name: "The Way of Kings",
        description: "The Way of Kings is an epic fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series.",
        rating: "4.1/5"
    }
    ]

    const spirituality = [{
        name: "The Power of Now",
        description: "The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle.",
        rating: "9/10"
    },
    {
        name: "The Untethered Soul",
        description: "The Untethered Soul, by Michael Singer, is an amazing self-help book for anyone that wants to attain inner peace",
        rating: "4.2/5"
    },
    {
        name: "The Alchemist",
        description: "The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. ",
        rating: "4.1/5"
    }
    ]

    //Processing//
    var [book, setBook] = useState([]);
    var array;

    //  callback function //

    var genreClickedCB = (genreName, index) => {
        //conditional operation//

        switch (genreName) {
            case "Coding":
                array = Coding;
                break;
            case "Personality Development":
                array = personalityDevelop;
                break;
            case "Fiction":
                array = fiction;
                break;
            case "Spirituality":
                array = spirituality;
                break;
            default:
                array = null
        }

        //condition to check if the value of array is null

        book = array && array.map((item) => {
            return (<br p className="result-output" > {item.name} <br> </br>{item.description} <br></br>{item.rating}</p>)
        })
        setBook(book)
    }

    return (
        <div className="main-container" >
            <div className="main-container-child" >
                <div style={
                    { textAlign: "center", paddingTop: "8%", paddingBottom: "4%" }} >
                    <h1> 📚Recommended Books </h1> </div >

                <h2> <b> Genre </b></h2>
                <div className='button-container' >

                    { /*  map function to create the buttons from an array  */}

                    {
                        bookGenre.map((item, idx) => {
                            return (
                                <p key={idx} style={{ display: 'inline', margin: "5px" }} >
                                    < button onClick={() => genreClickedCB(item, idx)} > {item} </button>
                                </p >
                            )
                        })
                    }
                    { /* Input as a button click  */}
                </div>
                <div className="result-div" >
                    {book}
                    { /* output */}
                </div>
            </div>
        </div>

    );
}

export default App;