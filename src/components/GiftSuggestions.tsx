import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { GiftSuggestion } from '../types';

interface GiftSuggestionsProps {
  suggestions: GiftSuggestion[];
  onBack: () => void;
}

export default function GiftSuggestions({ suggestions, onBack }: GiftSuggestionsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-purple-50 via-white to-blue-50 p-8 rounded-xl shadow-xl">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-800">Perfect Gift Suggestions</h2>
        <button
          onClick={onBack}
          className="text-indigo-700 bg-indigo-100 py-2 px-4 rounded-lg font-semibold hover:bg-indigo-200 hover:text-indigo-900 transition-colors"
        >
          Start Over
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={suggestion.imageUrl}
              alt={suggestion.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-800 truncate">{suggestion.title}</h3>
                <span className="text-green-700 bg-green-100 px-3 py-1 rounded-lg text-sm font-medium">${suggestion.price}</span>
              </div>
              <p className="mt-3 text-gray-600 text-sm line-clamp-3">{suggestion.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-800">Why this gift?</h4>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{suggestion.reason}</p>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center text-indigo-700 hover:text-indigo-900 font-medium transition-colors"
              >
                View Details <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
