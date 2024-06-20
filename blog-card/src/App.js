export default function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <CardImage />
      <div className="card-data">
        <CardText />
        <CardFooter />
      </div>
    </div>
  );
}

function CardImage() {
  return (
    <img
      src={require("./images/laptop.jpg")}
      alt="Image of Laptop"
      className="card-img"
    />
  );
}

function CardText() {
  return (
    <div className="card-text">
      <a href="#" className="anchor">
        Technology
      </a>
      <p>How I build Web Development Challenge website ?</p>
      <p>If you're looking for inspiration to build your own side project...</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="footer">
      <img src={require("./images/corey.jpg")} alt="image of the reviewer" />
      <div className="footer-data">
        <span>Corey Lubin</span>
        <span>4 h ago</span>
      </div>
    </div>
  );
}
