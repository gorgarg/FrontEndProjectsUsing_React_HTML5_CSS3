export default function App() {
  return (
    <div className="container">
      <div className="firstbox">
        <Header />
      </div>
      <div className="secondbox">
        <Second />
        <Third />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="first">
      <h2>Join Our Community</h2>
      <p>30-day ,hassle-free money-back guarantee</p>
      <p>
        Gain access to our full time library of tutorials along with our expert
        code-reviewers.
      </p>
      <p>Perfect for any developers who are looking for houning there skills</p>
    </header>
  );
}

function Second() {
  return (
    <div className="second">
      <p>Monthly Subscription</p>
      <p>
        <span>29$</span> per month
      </p>
      <p>Full access for less than 1$ a day</p>
      <button className="btn">Sign Up</button>
    </div>
  );
}

function Third() {
  return (
    <div className="third">
      <p>WHY US ?</p>
      <ul>
        <li>Tutorials By Industry Expert</li>
        <li>Peer and Expert Code Review</li>
        <li>Coding Exercises</li>
        <li>Access to our GitHub page</li>
        <li>Community Forum</li>
        <li>FlashCard Decks</li>
        <li>New videos every week</li>
      </ul>
    </div>
  );
}
