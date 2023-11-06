function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={80} height={80} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">First Store!</h3>
            <p>My first frontend project</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={40} height={40} src="/img/cart.png" />
            <span>Preis</span>
          </li>
          <li>
            <img width={40} height={40} src="/img/myaccount.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All products</h1>
        .....
      </div>
    </div>
  );
}

export default App;
