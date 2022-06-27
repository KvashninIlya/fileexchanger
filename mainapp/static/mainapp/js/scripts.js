
$("body").removeClass("preload");


let complexRows = document.getElementsByClassName("table-row-complex");

for(let complexRow of complexRows) {
  complexRow.querySelector(".table-row-complex-copy").onclick = function() {
    let copyText = complexRow.querySelector(".table-row-complex-text");
    copyText.select();

    document.execCommand("copy");

    let text = copyText.value;
    copyText.value = "Скопировано!";


    copyText.classList.add('lightning');
    setTimeout(function() {
      copyText.classList.remove('lightning');
      copyText.value = text;
    }, 1000);
    // alert("Copied the text: " + copyText.value);
  };
}


// var childElement = parentElement.querySelector(".list-group-item");
//
//
//
// var copyText = document.getElementById("myInput");
// copyText.select();
// document.execCommand("copy");
// alert("Copied the text: " + copyText.value);