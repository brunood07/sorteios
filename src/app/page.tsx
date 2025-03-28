'use client';

import { useState } from 'react';

export default function Home() {
  const [minNumber, setMinNumber] = useState<number | ''>('');
  const [maxNumber, setMaxNumber] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const generateRandomNumbers = () => {
    if (!minNumber || !maxNumber || !quantity) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (minNumber > maxNumber) {
      alert('O número mínimo não pode ser maior que o número máximo!');
      return;
    }

    if (quantity > (maxNumber - minNumber + 1)) {
      alert('A quantidade de números não pode ser maior que o intervalo disponível!');
      return;
    }

    const numbers: number[] = [];
    const availableNumbers = Array.from(
      { length: maxNumber - minNumber + 1 },
      (_, i) => minNumber + i
    );

    for (let i = 0; i < quantity; i++) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      numbers.push(availableNumbers[randomIndex]);
      availableNumbers.splice(randomIndex, 1);
    }

    setRandomNumbers(numbers.sort((a, b) => a - b));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Sorteador de Números
          </h1>
          <p className="text-gray-600">
            Gere números aleatórios de forma simples e rápida
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Número Mínimo
                </label>
                <input
                  type="number"
                  value={minNumber}
                  onChange={(e) => setMinNumber(e.target.value === '' ? '' : Number(e.target.value))}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 text-gray-900 font-medium placeholder:text-gray-400"
                  placeholder="Ex: 1"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Número Máximo
                </label>
                <input
                  type="number"
                  value={maxNumber}
                  onChange={(e) => setMaxNumber(e.target.value === '' ? '' : Number(e.target.value))}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 text-gray-900 font-medium placeholder:text-gray-400"
                  placeholder="Ex: 100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Quantidade de Números
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))}
                min="1"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200 text-gray-900 font-medium placeholder:text-gray-400"
                placeholder="Ex: 5"
              />
            </div>

            <button
              onClick={generateRandomNumbers}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Sortear Números
            </button>

            {randomNumbers.length > 0 && (
              <div className="mt-8 animate-fade-in">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    {randomNumbers.length}
                  </span>
                  Números Sorteados
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {randomNumbers.map((number, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-lg font-bold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                    >
                      {number}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Desenvolvido com ❤️ por Bruno Domingues da Silva</p>
        </div>
      </div>
    </div>
  );
}
