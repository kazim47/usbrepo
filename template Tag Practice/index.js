
// JS for mediaQuery for mobile screen  and  on mobile screen use Template
const main = document.getElementById("section-2");
const mediaQueryList = window.matchMedia("(max-width: 600px)");

const widthSize = () => {
  if (mediaQueryList.matches) {
    document.getElementById("section2-1").style.display = "none";
    let temp1 = document.getElementById("temp1").content;
    let copyhtml = document.importNode(temp1, true);
    document.getElementById("section-2").appendChild(copyhtml);
  } else {
    document.getElementById("section2-1").style.display = "grid";
     document.getElementById("temp2").remove();
  }
};

widthSize(mediaQueryList);

mediaQueryList.addEventListener("change", widthSize);
