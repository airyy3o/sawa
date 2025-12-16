export default {
  name: "Mini Kitty Overlay",
  version: "1.0.0",

  onStart() {
    const img = document.createElement("img");

    // your image
    img.src = "https://i.imgur.com/neaIlwP.png";

    img.style.position = "fixed";
    img.style.width = "56px";   // mini size
    img.style.height = "56px";
    img.style.top = "200px";
    img.style.left = "40px";
    img.style.zIndex = "9999";
    img.style.cursor = "grab";
    img.style.userSelect = "none";
    img.style.pointerEvents = "auto";

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    img.addEventListener("mousedown", (e) => {
      dragging = true;
      offsetX = e.clientX - img.offsetLeft;
      offsetY = e.clientY - img.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      img.style.left = e.clientX - offsetX + "px";
      img.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
      dragging = false;
    });

    document.body.appendChild(img);
    this._img = img;
  },

  onStop() {
    this._img?.remove();
  }
};