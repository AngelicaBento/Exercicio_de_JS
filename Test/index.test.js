import { describe, expect, it } from '@jest/globals';
import { exercicio1 } from "../exercicios/exercicios-parte-um";

describe('Testes do primeiro exercício', () => {
 // Executado antes de TODOS os testes
 beforeAll(async () => {
 console.info('Iniciando TDD com jest!');
});

 // Executado após TODOS os testes
afterAll(() => {
 console.info('Encerrados os testes');
});

it('Should sum two numbers', () => {
 const result = exercicio1(1, 2)

expect(result).toBe(3);
})

})