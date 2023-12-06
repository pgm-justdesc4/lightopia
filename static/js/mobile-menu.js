(function () {
  function registerListeners() {
    const $click = document.getElementById("menu");
    $click.addEventListener("click", function (event) {
      event.preventDefault();
      const $menu = document.getElementById("mobile-menu");
      const $body = document.querySelector("body");
      $body.classList.add("overlay-body");
      let html = "";
      html += `
        <div id="close" class="mobile-menu">
            <nav>
                <ul>
                    <li>
                        <a class="${
                          window.location.href.includes("index.html")
                            ? "page-pointer__mobile"
                            : ""
                        }" href="index.html">Home</a>
                    </li>
                    <li>
                        <a class="${
                          window.location.href.includes("parcours.html")
                            ? "page-pointer__mobile"
                            : ""
                        }" href="parcours.html">Parcours</a>
                    </li>
                    <li>
                        <a class="${
                          window.location.href.includes("praktisch.html")
                            ? "page-pointer__mobile"
                            : ""
                        }" href="praktisch.html">Praktisch</a>
                    </li>
                    <li>
                        <a class="${
                          window.location.href.includes("galerij.html")
                            ? "page-pointer__mobile"
                            : ""
                        }" href="galerij.html">Galerij</a>
                    </li>
                    <li>
                        <a class="${
                          window.location.href.includes("faq.html")
                            ? "page-pointer__mobile"
                            : ""
                        }" href="faq.html">FAQ</a>
                    </li>
                </ul>
                <a class="tickets-btn" href="#">Tickets</a>
            </nav>
            <div class="mobile-menu__languages">
                <a href="#">NL</a>
                <p>|</p>
                <a href="#">FR</a>
                <p>|</p>
                <a href="#">EN</a>
            </div>
            <div id="closeBtn" class="closeBtn">
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>`;

      $menu.innerHTML = html;

      const $closeBtn = document.getElementById("closeBtn");
      $closeBtn.addEventListener("click", function () {
        const $close = document.getElementById("close");
        $close.classList.add("close");
        $body.classList.remove("overlay-body");
      });
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
