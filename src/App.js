// input => processing => output

import {useState} from 'react'


function App() {
  //database
  const bookGenre=["Coding","Personality Development","Fiction","Spirituality"]
  const Coding=[
    {
      name:"You Don't Know Javascript",
      rating:"4.8/5"
    },
    {
      name:"Eloquent Javascript",
      rating:"4.5/5"
    },
    {
     name:"Clean Code",
     rating:"4.6/5"
    }
  ]
  const personalityDevelop=[
    {
      name:"Think and Grow Rich",
      rating:"4.2/5"
    },
    {
      name:"Ego Is the Enemy",
      rating:"4.2/5"
    },
    {
      name:"Atomic Habits",
      rating:"4.2/5"
    }]

    const fiction=[
      {
        name:"Harry Potter and the Deathly Hallows",
        rating:"4.6/5"
      },
      {
        name:"The Name of the Wind",
        rating:"4.5/5"
      },
      {
        name:"The Way of Kings",
        rating:"4.1/5"
      }
  ]

  const spirituality=[
    {
      name:"The Power of Now",
      rating:"9/10"
    },
    {
      name:"The Untethered Soul",
      rating:"4.2/5"
    },
    {
      name:"The Alchemist",
      rating:"4.1/5"
    }
]

//Processing//
  var[book,setBook]=useState([]);
  var array;

  //  callback function //

  var genreClickedCB=(genreName,index)=>{
   //conditional operation//

    switch(genreName){
      case "Coding": array=Coding;
      break;
      case "Personality Development": array=personalityDevelop;
      break;
      case "Fiction": array=fiction;
      break;
      case "Spirituality": array=spirituality;
      break;
      default: array=null
    } 

    //condition to check if the value of array is null

    book=array && array.map((item)=>{
      return(
        <p className="result-output">{item.name}<br></br>{item.rating}</p> )
    })
    setBook(book)
}

  return (
    <div className="main-container" >
        <div className="main-container-child" >

              <div style={{textAlign:"center",paddingTop:"8%",paddingBottom:"4%"}}>
                  <h1 > 📚 Recommended Books </h1>
              </div>

        <h2 ><b>Genre</b></h2>

              <div className='button-container'>

                        {/*  map function to create the buttons from an array  */}

                        {bookGenre.map((item,idx)=>{
                                       return(
                                          <p 
                                            key={idx}style={{display:'inline',margin:"5px"}} ><button  onClick={()=>genreClickedCB(item,idx)}>{item}</button>
                                          </p>
                                            )
                                              })}
                                              {/* Input as a button click  */}
              </div>
              <div className="result-div" >
                {book} 
                {/* output */}
              </div>
        </div>
      </div>

);
  }

export default App;
