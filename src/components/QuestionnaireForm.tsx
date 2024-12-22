import React, { useState } from 'react';
import { ChevronRight, Gift } from 'lucide-react';
import type { Recipient } from '../types';

interface QuestionnaireFormProps {
  onSubmit: (data: Recipient) => void;
}

export default function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState<Recipient>({
    name: '',
    age: 0,
    occasion: '',
    interests: [],
    budget: 0,
    relationship: '',
  });

  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Christmas', 'Other'];
  const relationships = ['Family', 'Friend', 'Colleague', 'Partner', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const interests = e.target.value.split(',').map(i => i.trim());
    setFormData(prev => ({ ...prev, interests }));
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-10 w-full max-w-md p-8 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-500 text-white"
    >
      <div className="flex items-center justify-center space-x-3 mb-10">
        <Gift size={48} className="animate-bounce" />
        <h2 className="text-4xl font-bold">Gift Finder</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Recipient's Name</label>
          <input
            type="text"
            required
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Age</label>
          <input
            type="number"
            required
            min="0"
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.age || ''}
            onChange={e => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Occasion</label>
          <select
            required
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.occasion}
            onChange={e => setFormData(prev => ({ ...prev, occasion: e.target.value }))}
          >
            <option value="">Select an occasion</option>
            {occasions.map(occasion => (
              <option key={occasion} value={occasion}>{occasion}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium">Interests (comma-separated)</label>
          <input
            type="text"
            required
            placeholder="e.g., reading, gaming, cooking"
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.interests.join(', ')}
            onChange={handleInterestsChange}
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Budget ($)</label>
          <input
            type="number"
            required
            min="0"
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.budget || ''}
            onChange={e => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Relationship</label>
          <select
            required
            className="mt-2 block w-full rounded-lg bg-white text-gray-700 p-4 border-none shadow-lg focus:ring-4 focus:ring-purple-300 transition-all"
            value={formData.relationship}
            onChange={e => setFormData(prev => ({ ...prev, relationship: e.target.value }))}
          >
            <option value="">Select relationship</option>
            {relationships.map(relationship => (
              <option key={relationship} value={relationship}>{relationship}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-white text-purple-700 py-4 px-6 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-purple-300 transform hover:scale-110 transition-all duration-500 font-bold shadow-lg"
      >
        <span className="text-lg">Find Perfect Gift</span>
        <ChevronRight size={24} />
      </button>
    </form>
  );
}
