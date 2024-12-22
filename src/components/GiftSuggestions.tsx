import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { GiftSuggestion } from '../types';

interface GiftSuggestionsProps {
  suggestions: GiftSuggestion[];
  onBack: () => void;
}

export default function GiftSuggestions({ suggestions, onBack }: GiftSuggestionsProps) {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Perfect Gift Suggestions</h2>
        <button
          onClick={onBack}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Start Over
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={suggestion.imageUrl}
              alt={suggestion.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">{suggestion.title}</h3>
                <span className="text-green-600 font-medium">${suggestion.price}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{suggestion.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Why this gift?</h4>
                <p className="mt-1 text-sm text-gray-600">{suggestion.reason}</p>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
              >
                View Details <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}