const navList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Home",
    path: "/examples.html",
    items: [
      {
        label: "Example 1",
        path: "/length-trim.html",
      },
    ],
  },
];

class Nav extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #eee;
          padding: 10px;
        }

        .is-active {
          color: green;
        }
      </style>

      <nav>
        <a href="/">Home</a>
        <a href="/examples.html">Examples</a>
        <a href="/examples/length-trim.html">Length & trim</a>
        <a href="/examples/onkeyup-event.html">On key up event</a>
        <a href="/examples/scroll-event.html">Scroll Event</a>
      <nav>
    `;

    const currentUrl = window.location.pathname;

    const links = this.shadowRoot.querySelectorAll("a");

    links.forEach((link) => {
      if (currentUrl.includes(link.pathname) && link.pathname !== "/") {
        link.classList.add("is-active");
        return;
      }
    });
  }
}

customElements.define("my-nav", Nav);
