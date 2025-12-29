import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen  from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-800 mb-2">
            Counter
          </h1>
          <p className="text-slate-500 text-sm">
            A simple way to keep track of numbers
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 mb-8">
          <div className="text-6xl font-bold text-slate-800 text-center tabular-nums">
            {count}
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <button
            onClick={decrement}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Decrease
          </button>
          <button
            onClick={increment}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Increase
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Reset to Zero
        </button>

       
      </div>
    </div>
  );
}