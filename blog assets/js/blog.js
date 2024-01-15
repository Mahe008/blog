let search = document.querySelectorAll(".hide");
let searchbtn = document.querySelectorAll(".here");
let list = document.querySelectorAll(".bi-list");
let link = document.querySelector(".rem-link");

searchbtn.forEach((element) => {
    element.addEventListener("click", () => {
        search.forEach((e) => {
            if (e.classList.contains("hide")) {
                element.classList.replace("bi-search", "bi-x")
                e.classList.replace("hide", "show");
                link.classList.replace("add-link", "rem-link");
                list[0].classList.replace("bi-x", "bi-list");
            } else {
                element.classList.replace("bi-x", "bi-search");
                e.classList.replace("show", "hide");
            }
        });

    });
});

list.forEach((lists) => {
    lists.addEventListener("click", (e) => {
        if (link.classList.contains("rem-link")) {
            e.target.classList.replace("bi-list", "bi-x");
            link.classList.replace("rem-link", "add-link");
            search[0].classList.replace("show", "hide");
            searchbtn[0].classList.replace("bi-x", "bi-search");
        } else {
            e.target.classList.replace("bi-x", "bi-list");
            link.classList.replace("add-link", "rem-link");
        }
    });
});


