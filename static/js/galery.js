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
            <div id="closeImage" class="galery-wrapper">
                <figure id="closeBtnImage" class="close-btn">
                    <img src="static/img/images/close-btn.svg" alt="Close button">
                </figure>
                <figure>
                    <img src="${$src}" alt="Galery Image">
                </figure>
            </div>`;

        $galeryWrapper.innerHTML = html;

        const $closeBtnImage = document.getElementById("closeBtnImage");
        $closeBtnImage.addEventListener("click", function () {
          const $closeImage = document.getElementById("closeImage");
          $closeImage.classList.add("close");
        });
      });
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
