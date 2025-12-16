export default {
  name: "Mini Kitty Overlay",
  description: "Floating image overlay",
  version: "1.0.0",

  onStart() {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/neaIlwP.png";

    img.style.position = "fixed";
    img.style.width = "56px";
    img.style.height = "56px";
    img.style.top = "200px";
    img.style.left = "40px";
    img.style.zIndex = "9999";
    img.style.cursor = "grab";
    img.style.userSelect = "none";

    let dragging = false;
    let ox = 0, oy = 0;

    img.onmousedown = e => {
      dragging = true;
      ox = e.clientX - img.offsetLeft;
      oy = e.clientY - img.offsetTop;
    };

    document.onmousemove = e => {
      if (!dragging) return;
      img.style.left = e.clientX - ox + "px";
      img.style.top = e.clientY - oy + "px";
    };

    document.onmouseup = () => dragging = false;

    document.body.appendChild(img);
    this._img = img;
  },

  onStop() {
    this._img?.remove();
  }
};