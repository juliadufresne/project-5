import React, { Component } from 'react';
import Entries from './Entries.js';
import prompts from './prompts.js';
import firebase from './firebaseApp.js';
import swal from 'sweetalert';
import './App.css';


// Main functionality of application is in here
class App extends Component {
  constructor() {
    super()

    this.state = {
      // Random number that selects a quote from "prompts"
      number: 0,

      // Holds array of input and current quotes
      data: [],

      // Catches individual characters of user input from textarea
      input: "",

      // Catches entire string of user input from textarea once "post" button has been clicked
      // Used to print to other section of the page
      enteredInput: "",

      // Catches string of current quote based on the quote that is on the screen at the moment of clicking "post" button
      // Used to print to other section of the page
      currentQuote: "",
    }

    // Setting the reference to the section of the page that should be scrolled to on click of "post" button
    this.scrollSection = React.createRef();
  }


  // READING WHAT IS IN FIREBASE
  // Go into firebase and get data
  // Organize data from firebase into local data structurre ( key and name )
  // Set state with recieved data
  componentDidMount() {
    // Save reference to firebase in a variable
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      // Storing entire object from database in a variable
      const dataFromDb = response.val();

      // Setting an empty array to push to state
      const stateToBeSet = [];

      // JOURNAL ENTRIES
      // entire object for one input
      // {
        // key - uniquely generated by firebase
        // name - holds input and quote which is data that is written from "handleSubmit" function
      // }

      // KEY
      // Uniquely generated by firebase

      // DATAFROMDB
      // Holds all of the objects from firebase

      // DATAFROMDB[KEY]
      // Holds individual object of user input

      for (let key in dataFromDb) {
        const journalEntries = {
          key: key,
          name: dataFromDb[key],
        }

        // Push journalEntries object to empty array "stateToBeSet"
        stateToBeSet.push(journalEntries);
      }

      // Set state of data to journalEntries object
      this.setState({
        data: stateToBeSet,
      })
    })
  }


  // Generating random number to select quote from "prompts"
  generateRandomNumber = () => {
    // Set number in state to a random number
    this.setState({
      number: (Math.floor(Math.random() * 52))
    });
  }


  // Handle the click of the first button on the page, "generate a quote"
  handleStart = () => {
    // Call random number
    this.generateRandomNumber();
  }

  // Handle textarea input
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  // Function to scroll to section of the page that displays "posts"
  scrollToMyRef = () => {
    window.scrollTo(0, this.scrollSection.current.offsetTop)
  }


  // WRITING WHAT IS IN FIREBASE
  // Handles "post" button, which submits an object to firebase containing data that is read in componentDidMount
  handleSubmit = (event) => {
    event.preventDefault();

    // If the textarea isn't empty
    if (this.state.input !== "") {
      // Save reference to firebase in a variable
      const dbRef = firebase.database().ref();

      // Save current quote and input in an object
      const posts = {
        quote: prompts[this.state.number].quote,
        input: this.state.input
      }

      // Push posts object to database
      // Key - will be uniquely created by firebase in componentDidMount
      // Name - will contain the object of posts (containing quote and input keys)
      dbRef.push(posts);

      // Reset the state
      this.setState({
        enteredInput: this.state.input,
        input: "",
        currentQuote: prompts[this.state.number].quote,
      })

      // Scroll to the top of the section that holds posts
      this.scrollToMyRef()

    } else {
      swal({
        text: "You can't submit an empty journal input!",
        button: "Go back",
        closeOnClickOutside: false
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Deeper</h1>
            <div className="journalEntry">
              <div className="generatedQuote">
                <h2 className="quote">{prompts[this.state.number].quote}</h2>
                <h3 className="author">- {prompts[this.state.number].author}</h3>
              </div>
              <button onClick={this.handleStart} className="prompt">Generate a quote</button>
              <p>When you read this quote, what do you think about?</p>
              <form onSubmit={this.handleSubmit} action="">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  value={this.state.input}
                  onChange={this.handleChange}
                ></textarea>
                <button className="postButton">Post</button>
              </form>
            </div>
          </div>
        </header>
        <ul className="posts wrapper" ref={this.scrollSection}>
          <ul className="userPost autoPost">
            <div>
              <li><h3>“It is impossible for a man to learn what he thinks he already knows.”</h3></li>
              <li className="line"></li>
              <li><p>No matter what you pursue in life, keep yourself hungry to learn. Choose to always have a beginner’s mind, constantly looking for another angle. Get comfortable with being wrong, and relish it when it happens. It’s okay to be wrong as long as you make it a lesson. Don’t be afraid to ask questions and seem like an amateur. An open mind can be your greatest asset if you let it.

              We are stubborn creatures who would like to assume we’re smarter or more capable than others, but hoping you’re superior makes you inferior. Ditch the ego and accept your place as an eternal student. Besides, nobody likes a know-it-all, and true “experts” are the ones who will admit when they don’t know something. Why? Because they’d like to learn it.</p></li>
              <li><button className="remove">Remove Entry</button></li>
            </div>
          </ul>
          <Entries
            enteredInput={this.state.enteredInput}
            data={this.state.data}
            currentQuote={this.state.currentQuote}
          />
        </ul>
      </div>
    );
  }
}


export default App;
