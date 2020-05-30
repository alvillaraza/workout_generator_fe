import React from "react";
import Header from "./Header.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <p>Generate a randomized work out plan!</p>

          <div>
            <input type="checkbox" />
            No Equipment
          </div>

          <div>
            <input type="checkbox" />
            Arms
          </div>

          <div>
            <input type="checkbox" />
            Legs
          </div>

          <div>
            <input type="checkbox" />
            Core
          </div>
        </main>
        <footer>
          <button>Generate</button>
        </footer>
      </div>

      <div className='workouts'>
        <Header />
        <section>
          <header>Arms</header>
          <main>
            <h4>3 sets</h4>
            <h2>10 x Push Ups</h2>
          </main>
          <footer>
            <button>-</button> Progression Level <button>+</button>
          </footer>
        </section>

        <section>
          <header>Legs</header>
          <main>
            <h4>3 sets</h4>
            <h2>10 x Squats</h2>
          </main>
          <footer>
            <button>-</button> Progression Level <button>+</button>
          </footer>
        </section>

        <section>
          <header>Core</header>
          <main>
            <h4>3 sets</h4>
            <h2>10 x Sit Ups</h2>
          </main>
          <footer>
            <button>-</button> Progression Level <button>+</button>
          </footer>
        </section>
        <footer>
          <button>Generate</button>
        </footer>
      </div>
    </>
  );
}

export default App;
