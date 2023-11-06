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
      <div className="content p-40">
        <h1 className="mb-40">All products</h1>

        <div className="card">
          <img width={140} height={140} src="" alt="" />
          // Тут фотография товара из API
          <p>Название товара из API</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <p>Preis:</p>
              <b>9 999 dollars</b>
            </div>
            <button className="button">
              <img width={12} height={12} src="/img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
