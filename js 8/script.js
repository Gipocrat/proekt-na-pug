let white = document.querySelectorAll(".white");
let light = document.querySelector(".light");
let modal = document.querySelector(".modal");
let container = document.querySelector(".container");
let go = document.querySelector(".go");
let button_send = document.querySelector(".button_send");
let form = document.querySelector("form");
let cross = document.querySelector(".cross");


let crosswalk = {
  container:container, 
  modal:modal, 
  form:form, 
  white:white,


  changeTheLight(surcleLight) {
    surcleLight.classList.add("active");
    if (surcleLight.previousElementSibling) {
      surcleLight.previousElementSibling.classList.remove("active");
    } else {
      surcleLight.nextElementSibling.classList.remove("active");
    }
  },


  openModalWindow() {
    this.modal.classList.add("active");
    this.container.classList.add("active");
    button_send.removeAttribute("disabled");
  },


  submitDirection() {
    let newData = new FormData(form);
    let direction = "";
    for (const value of newData) {
      direction = value[1];
    }
    if (direction == "up") {
      for (let i = 0; i < this.white.length; i++) {
        this.white[i].innerHTML = "";
        let img = document.createElement("IMG");
        img.src = "caret-top-svgrepo-com.svg";
        this.white[i].append(img);
      }
    } else {
      for (let i = 0; i < this.white.length; i++) {
        this.white[i].innerHTML = "";
        let img = document.createElement("IMG");
        img.src = "caret-top-svgrepo-com.svg";
        img.style.transform = "rotate(180deg)";
        this.white[i].append(img);
      }
    }
  },


  getColorLigth() {
    let green = document.querySelector("#green");
    if (green.classList.contains("active")) {
      this.openModalWindow();
    } else {
      let road = document.querySelector(".road");
      let interval = setInterval(function () {
        road.classList.toggle("red");
      }, 300);
      setTimeout(() => clearInterval(interval), 2000);
    }
  },


  close() {
    this.modal.classList.remove("active");
    this.container.classList.remove("active");
  }
}


light.addEventListener("click", function (event) {
  event.preventDefault();
  crosswalk.changeTheLight(event.target);
});


go.addEventListener("click", () => {
  crosswalk.getColorLigth();
});


button_send.addEventListener("click", function (event) {
  event.preventDefault();
  crosswalk.submitDirection();
  crosswalk.close();
});


cross.addEventListener("click", () => {
  crosswalk.close();
});


container.addEventListener("click", function (event) {
  if (!event.target.closest(".modal")) {
    crosswalk.close();
  }
});
