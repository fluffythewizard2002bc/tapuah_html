/*const submitButton = document.querySelector('button');
const wordsQuantity = document.querySelector('span');
submitButton.addEventListener('click', textArea1);

function textArea1() {
    let arealength = document.querySelector('textarea').value;
    let chars = arealength.split(" ").join("").length;
    wordsQuantity.textContent = chars;

    if (chars < 101) {
        let htmlTag = document.querySelector('h1');
        htmlTag.textContent = "must contain at least 100 characters";
    }

}*/
const checkedsubmit = document.querySelector('#checkme');
const pic = document.querySelector("pic");
checkedsubmit.addEventListener('click', showHidePic);


function showHidePic() {
    let picVisibility = document.querySelector('img');
    console.log("click?");
    if (checkedsubmit.checked === true) {
        picVisibility.style.display = "block";
        picVisibility.style.visibility = "visible";
    } else {
        picVisibility.style.display = "none";
        picVisibility.style.visibility = "hidden";
    }

}