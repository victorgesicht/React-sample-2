
import './App.css';
import BooksList from './components/booksList';
import {NavBar} from './components/navbar'

function App() {
  return (
    <div className="App">

    <NavBar/>
    <p> 90% through with my Django Full Stack</p>
    <p>I'm currently working on my CSS:</p> 
    <p>90 % through with my JS</p>


<strong> What I'm reading?</strong>
<br></br>
    <BooksList/>
<br></br>


    </div>
  );
}

export default App;
