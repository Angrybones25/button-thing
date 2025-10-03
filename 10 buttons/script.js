const btnbox = document.getElementById("btnbox");
const colorselect = document.getElementById("colorselect");
const ogcolors = [];
const rcolor = () =>
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb ${r}, ${g}, ${b}`
}
const shitoutbuttons = () =>
{
   let choice = window.prompt("How mach batons")
    let x = 0
    for(i=0;i<choice;i++)
    {
        x += 1
    let item = document.createElement(`button`)
    item.innerHTML = (`button${x}`);
    document.getElementById("btn").appendChild(item)
    }
}
const nbtncolor = () =>
{
    const buttons = btnbox.querySelectorALL("button");
    buttons.forEach((btn, index) => 
    {
        switch (choice) 
        {
            case "Red":
            btn.style.backgroundcolor = red
            break;
            case "Green":
            btn.style.backgroundcolor = green
            break;
            case "Blue":
            btn.style.backgroundcolor = blue
            break;
            case "Random":
            btn.style.backgroundcolor = rcolor();
            break;
            case "Reset":
            btn.style.backgroundcolor = ogcolors[index];
            break;
        }
    });
}

colorselect.addEventListener("change", (e) => {
    nbtncolor(e.target.value);
});

shitoutbuttons();