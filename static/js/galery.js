(function () {
  function registerListeners() {
    const $images = document.querySelectorAll("#galery img");
    $images.forEach(($image) => {
      $image.addEventListener("click", function (event) {
        event.preventDefault();
        const $galeryWrapper = document.getElementById("galery-wrapper");
        const $src = $image.src;
        let html = "";
        html += `
            <div id="close" class="galery-wrapper">
                <figure id="closeBtn" class="close-btn">
                    <img src="static/img/images/close-btn.svg" alt="Close button">
                </figure>
                <figure>
                    <img src="${$src}" alt="Galery Image">
                </figure>
            </div>`;

        $galeryWrapper.innerHTML = html;

        const $closeBtn = document.getElementById("closeBtn");
        $closeBtn.addEventListener("click", function () {
          const $close = document.getElementById("close");
          $close.classList.add("close");
        });
      });
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
