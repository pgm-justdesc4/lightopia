(function () {
  function registerListeners() {
    const $click = document.getElementById("menu");
    $click.addEventListener("click", function (event) {
      event.preventDefault();
      const $menu = document.getElementById("mobile-menu");
      let html = "";
      html += `
        <div id="close" class="mobile-menu">
            <nav>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a class="page-pointer" href="parcours.html">Parcours</a>
                    </li>
                    <li>
                        <a href="praktisch.html">Praktisch</a>
                    </li>
                    <li>
                        <a href="galerij.html">Galerij</a>
                    </li>
                    <li>
                        <a href="faq.html">FAQ</a>
                    </li>
                    </ul>
            </nav>
            <div>
                <a href="#" id="closeBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </div>`;

      $menu.innerHTML = html;

      const $closeBtn = document.getElementById("closeBtn");
      $closeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const $close = document.getElementById("close");
        $close.classList.add("close");
      });
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
