const cmulti = () =>
{
    let input = Number(window.prompt("select a number:"))
    for(i=1;i<11;i++)
    {
       let item = document.createElement("li")
       item.innerHTML = `${input} * ${i} = ${input*i}` 
       document.getElementById("ul").appendChild(item);
    }
}