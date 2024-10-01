window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (seletor, text) => {
        const element = document.getElementById(seletor);
        console.log(element);
        if (element) element.innerText = text;

    }

    for (const dependency of ["chrome", "node", "electron"]){
        replaceText(`${dependency}-version`, process.versions(dependency))
    }
})