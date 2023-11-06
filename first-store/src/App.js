function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerleft">
          <img width={80} height={80} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>First Store!</h3>
            <p>My first frontend project</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
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
