let body = document.querySelector("body");
let mode = "dark";
let toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () =>
{
    if (mode === "dark")
    {
        body.classList.add("light");
        body.classList.remove("dark");
        mode = "light";
    }
    else
    {
        body.classList.add("dark");
        body.classList.remove("light");
        mode = "dark";
        }
})
