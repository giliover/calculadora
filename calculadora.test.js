const Calculadora = require('./calculadora'); 
describe("Teste da calculadora", () => {
	test("Deve retornar a soma de 2 números", () => {
		const calculadora = new Calculadora();
		const a = 10
		const b = 5
		const resultadoExperado = 15
		const resultado = calculadora.soma(a, b);
		expect(resultado).toBe(resultadoExperado);
	})
})
