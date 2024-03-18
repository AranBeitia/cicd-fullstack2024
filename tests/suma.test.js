const suma = require('./suma')

test('sumar 1 + 2 es igual a 3', () => {
	expect(suma(1, 3)).toBe(3)
})
