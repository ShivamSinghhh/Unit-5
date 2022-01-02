import css from "./index.css"

const submit = document.getElementById('submit-btn');
submit.addEventListener('click', show);

function show() {
    let input = document.getElementById('input').value;
    if (input.length > 0) {
        put(input);
    }
}
function put(data) {
    let parent = document.getElementById("output-box");
    let div = document.createElement("div");
    div.classList = "taskbox"
    let p = document.createElement("p");
    p.innerText = data;
    div.append(p);
    parent.append(div);
}