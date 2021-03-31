const input = document.querySelector("#search");
const tasks = document.querySelector(".tasks");

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        if (input.value != "") {
            const List = document.createElement("ul");
            const checkbox = document.createElement("input");
            const button = document.createElement("button");
            const teks = document.createTextNode('Remove');
            List.setAttribute("class", "list");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox");
            button.setAttribute("type","button");
            button.setAttribute("class","remove");

            // tambahkan
            List.appendChild(checkbox);
            List.append(input.value);
            button.appendChild(teks);
            List.appendChild(button);
            tasks.appendChild(List);

            // clear input
            input.value = null;

        }
        
    }
});

tasks.addEventListener("click", (e) => {
    if (e.target.className == "checkbox" && e.target.checked == true) {
        e.target.parentElement.style.textDecoration = "line-through";
    } else {
        e.target.parentElement.style.textDecoration = "none";
    }
});


tasks.addEventListener("click", (e) =>  {
    if (e.target.className == "remove") {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});