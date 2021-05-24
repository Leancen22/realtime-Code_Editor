const text = document.querySelector("#text");
const editor = document.querySelector("#editor");

const update = () => {
    editor.srcdoc = text.value;
}