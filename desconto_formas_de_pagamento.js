//Tipos de Pagamento: À vista, Débito, Cartão, Cheque
let pagamento = "À vista"
let valor = 2000

switch (pagamento) {

    case "À vista": console.log ("15% de desconto - Valor a pagar: " + (valor - (valor/100 * 15)))
        break

    case "Débito": console.log ("5% de desconto - Valor a pagar: " + (valor - (valor/100 * 5)))
        break

    case "Cartão": console.log ("10% de taxa - Valor a pagar: " + (valor + (valor/100 * 10)))
        break

    case "Cheque": console.log ("50% de taxa - Valor a pagar: " + (valor + (valor/100 * 50)))
        break

    default: console.log("Operação não encontrada :( \nDigite Corretamente!")
    break
}