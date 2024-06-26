(function () {
  const $map = document.getElementById("map");

  // MAP POINTERS

  function getHTMLForPointers(pointers) {
    let html = `<img src="static/img/images/trail-map.jpg" alt="Trail-map">
                <div id="pointers">`;
    pointers.forEach((pointer) => {
      html += `
        <figure data-id="${pointer.id}" class="map-pointers" 
            style="
                top:${pointer.y}; 
                left:${pointer.x};">
            <img src="${pointer.icon}" alt="${pointer.id}">
        </figure>`;
    });
    html += `
    </div>
    <div id="imageWrapper">
    </div>`;
    return html;
  }

  // IMAGES

  function registerListeners() {
    const $pointers = document.querySelectorAll("#pointers figure");
    $pointers.forEach((pointer) => {
      pointer.addEventListener("click", function (e) {
        const id = e.currentTarget.dataset.id;
        const pointer = pointers.find((pointer) => {
          return pointer.id === id;
        });

        let html = `
        <div id="closeMapImage" class="map__wrapper">
        <figure id="closeBtnMapImage" class="close-btn">
            <img src="static/img/images/close-btn.svg" alt="Close button">
        </figure>
        <figure>
            <img src="${pointer.image}" alt="${pointer.id}">
        </figure>
        </div>`;

        const $imageWrapper = document.getElementById("imageWrapper");
        $imageWrapper.innerHTML = html;

        const $closeBtnImage = document.getElementById("closeBtnMapImage");
        $closeBtnImage.addEventListener("click", function () {
          const $closeImage = document.getElementById("closeMapImage");
          $closeImage.classList.add("close");
        });
      });
    });
  }

  function buildUI() {
    $map.innerHTML = getHTMLForPointers(pointers);
  }

  function initialize() {
    buildUI();
    registerListeners();
  }

  initialize();
})();
