
import React from 'react';
import Farm from './components/Farm';
import Store from './components/Store';

export default function App() {
  return (
    <div className="bg-green-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Golden Chicken Farm</h1>
      <Farm />
      <Store />
    </div>
  );
}
