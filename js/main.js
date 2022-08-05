const nombres = ["ROCIO", "EMANUEL", "JULIAN", "MAXI"];
alert(nombres);
let elim = prompt("Elimina a uno").toUpperCase();

switch (elim) {
    case "ROCIO":
        let index = nombres.indexOf(elim);
        if (index != -1) {
            nombres.splice(index, 1);
            alert(`${elim} fue eliminado`);
            alert(nombres);
        }
        break;
    case "EMANUEL":
        let index1 = nombres.indexOf(elim);
        if (index1 != -1) {
            nombres.splice(index1, 1);
            alert(`${elim} fue eliminado`);
            alert(nombres);
        }
        break;
    case "JULIAN":
        let index2 = nombres.indexOf(elim);
        if (index2 != -1) {
            nombres.splice(index2, 1);
            alert(`${elim} fue eliminado`);
            alert(nombres);
        }
        break;
    case "MAXI":
        let index3 = nombres.indexOf(elim);
        if (index3 != -1) {
            nombres.splice(index3, 1);
            alert(`${elim} fue eliminado`);
            alert(nombres);
        }
        break;
    default:
        let index4 = nombres.indexOf(elim);
        if (index4 === -1) {
            alert("No se encontro ese nombre");
        }
}
