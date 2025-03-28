'use client';

import { useState } from 'react';

export default function Home() {
  const [minNumber, setMinNumber] = useState<number>(1);
  const [maxNumber, setMaxNumber] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const generateRandomNumbers = () => {
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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Sorteador de Números
        </h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número Mínimo
            </label>
            <input
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número Máximo
            </label>
            <input
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantidade de Números
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateRandomNumbers}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Sortear
          </button>

          {randomNumbers.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Números Sorteados:
              </h2>
              <div className="flex flex-wrap gap-2">
                {randomNumbers.map((number, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {number}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
