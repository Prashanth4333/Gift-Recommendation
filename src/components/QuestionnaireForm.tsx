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
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="flex items-center justify-center space-x-2 text-indigo-600 mb-8">
        <Gift size={32} />
        <h2 className="text-2xl font-bold">Gift Finder</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipient's Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            value={formData.age || ''}
            onChange={e => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Occasion</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
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
          <label className="block text-sm font-medium text-gray-700">Interests (comma-separated)</label>
          <input
            type="text"
            required
            placeholder="e.g., reading, gaming, cooking"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            value={formData.interests.join(', ')}
            onChange={handleInterestsChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Budget ($)</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            value={formData.budget || ''}
            onChange={e => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Relationship</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
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
        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        <span>Find Perfect Gift</span>
        <ChevronRight size={20} />
      </button>
    </form>
  );
}