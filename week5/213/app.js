const submitButton = document.querySelector('button');
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

}