function change()
{
    let title = document.querySelector("h1");
    title.innerText = "Polytech Dijon";
    let paragraph = document.querySelector("p");
    paragraph.style.color = "blue"
    let link = document.querySelector("a");
    link.innerHTML = '<a href="https://esirem.u-bourgogne.fr"> un lien </a>';

}

function helloWorld()
{
console.log("Hello World");
}

function testValue()
{
    let input = document.querySelector("input");
    let value = input.value;

    if (isNaN(value))
    {
        input.style.backgroundColor = "red";
    }
    else if (value % 2 == 0)
    {
        input.style.backgroundColor = "yellow";
    }
    else
    {
        input.style.backgroundColor = "blue";
    }
}

function connectClickEvent()
{
    const button = document.querySelector("button");
    button.addEventListener("click", testValue);
}

window.addEventListener("load", connectClickEvent);

window.addEventListener("load", change);

window.addEventListener("load", helloWorld);


