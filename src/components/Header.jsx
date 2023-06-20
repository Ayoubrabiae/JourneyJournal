export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="../../public/logo.png" alt="Logo Image" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#browse">Browse</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}