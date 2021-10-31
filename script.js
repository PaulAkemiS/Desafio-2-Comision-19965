const saldo = 2500

const transferencia = prompt("Ingrese saldo a transferir")

if(parseFloat(transferencia)> saldo) {
    alert("Saldo insuficiente")
}
else{
    alert("Transferencia realizada con exito")
}