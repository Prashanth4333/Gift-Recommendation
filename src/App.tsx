import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import QuestionnaireForm from './components/QuestionnaireForm';
import GiftSuggestions from './components/GiftSuggestions';
import { generateSuggestions } from './utils/giftSuggestions';
import type { Recipient, GiftSuggestion } from './types';

function App() {
  const [suggestions, setSuggestions] = useState<GiftSuggestion[]>([]);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (data: Recipient) => {
    const newSuggestions = generateSuggestions(data);
    setSuggestions(newSuggestions);
    setShowForm(false);
  };

  const handleBack = () => {
    setSuggestions([]);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          {showForm ? (
            <QuestionnaireForm onSubmit={handleSubmit} />
          ) : (
            <GiftSuggestions suggestions={suggestions} onBack={handleBack} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;