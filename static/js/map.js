(function () {
  const $map = document.getElementById("map");
  const $pointers = document.getElementById("map-pointers");
  // const $pointer = document.getElementById("pointer");

  function getHTMLForPointers(pointers) {
    let html = `<img src="static/img/images/trail-map.jpg" alt="Trail-map">`;
    pointers.forEach((pointer) => {
      html += `
        <figure id="pointer" class"map-pointers" 
            style="
                width: 3rem;
                background-color: hsl(149, 76%, 46%);
                position: absolute; 
                top:${pointer.y}; 
                left:${pointer.x};
                cursor: pointer;
                padding: .75rem;
                border-radius: inherit;
                border-radius: 50%;">
            <img src="${pointer.icon}" alt="${pointer.pointer}">
        </figure>`;
    });
    return html;
  }

  function registerListeners() {
    /*
    $pointer.forEach((pointer) => {
      pointer.addEventListener("click", function () {
        const $mapWrapper = document.getElementById("map-wrapper");
        let html = "";
        html += `
            <div id="closeImage" class="galery-wrapper">
                <figure id="closeBtnImage" class="close-btn">
                    <img src="static/img/images/close-btn.svg" alt="Close button">
                </figure>
                <figure>
                    <img src="${pointer.image}" alt="${pointer.pointer}">
                </figure>
            </div>`;

        $mapWrapper.innerHTML = html;

        const $closeBtnImage = document.getElementById("closeBtnImage");
        $closeBtnImage.addEventListener("click", function () {
          const $closeImage = document.getElementById("closeImage");
          $closeImage.classList.add("close");
        });
      });
    });*/
  }

  function buildUI() {
    $pointers.innerHTML = getHTMLForPointers(pointers);
  }

  function initialize() {
    registerListeners();
    buildUI();
  }

  initialize();
})();
