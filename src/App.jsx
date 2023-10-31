import { useState, useEffect } from 'react'
import './App.css'

var visits = (parseInt(localStorage.getItem("localvisits"))||0) + 1
localStorage.setItem("localvisits", parseInt(visits)||0)

function App() {
  const [number, setNumber] = useState(0);

  function pushButton()
  {
    var label = document.getElementById("baom")
    label.animate([
      {backgroundColor:"green"},
    ],{duration: 500});
    label.animate([
      {color:"white"},
    ],{duration: 500});

    setNumber(number+1)
  }

  return (
    <>
      <main>
        <h1>wao</h1>
        <article>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, dolorum harum.</p>
          <p>Aliquid itaque labore quas magnam molestias accusamus autem iste assumenda nisi maxime laudantium in, dolorum distinctio?</p>
        </article>
        <article>
          <button onClick={pushButton} id='baom'>Hmm {number}</button>
          <br/>
        </article>
      </main>
      <aside>
        <p>Visits: {visits}</p>
      </aside>
    </>
  )
}

export default App
