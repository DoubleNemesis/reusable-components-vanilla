class Header extends HTMLElement {
    constructor() {
        super()
    }


    connectedCallback() {
        this.innerHTML = `
    <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
      display: flex;
      list-style: none;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
      <li><a href="index.html">home</a></li>
        <li><a href="page.html">page</a></li>
        <li><a href="page.html">page</a></li>
      </ul>
    </nav>
  </header>
`
    }
}


customElements.define('header-component', Header)