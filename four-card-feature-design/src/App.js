export default function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="box-region">
        <LeftBox />
        <MiddleBoxUp />
        <MiddleBoxDown />
        <RightBox />
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="header-text">
      <p>Reliable, Efficient Delivery</p>
      <p>Powered By Technology</p>
      <p>
        Our Artificial Intellience Component have a several areas which
        <br /> can be fit in the component as required by the people of India
      </p>
    </div>
  );
}

function LeftBox() {
  return (
    <div className="Box box-left">
      <div className="box1">
        <h4>Supervisor</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          eligendi
        </p>
      </div>
    </div>
  );
}
function MiddleBoxUp() {
  return (
    <div className="Box box-middle-up">
      <h4>Supervisor</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi
      </p>
    </div>
  );
}
function MiddleBoxDown() {
  return (
    <div className="Box box-middle">
      <h4>Supervisor</h4>
      <p>
        Lorem(middle) ipsum dolor, sit amet consectetur adipisicing elit. Natus
        eligendi
      </p>
    </div>
  );
}
function RightBox() {
  return (
    <div className="Box box-right">
      <h4>Supervisor</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi
      </p>
    </div>
  );
}
