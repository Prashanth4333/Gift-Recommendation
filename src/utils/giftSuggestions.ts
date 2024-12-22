import type { Recipient, GiftSuggestion } from '../types';

const generateSuggestions = (recipient: Recipient): GiftSuggestion[] => {
  const suggestions: GiftSuggestion[] = [];
  const interests = recipient.interests.map(i => i.toLowerCase());

  if (interests.includes('reading')) {
    suggestions.push({
      title: 'Premium E-Reader',
      description: 'Latest generation e-reader with adjustable warm light and weeks of battery life',
      price: 139.99,
      imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: `Perfect for ${recipient.name}'s love of reading, offering a portable library experience`,
    });
  }

  if (interests.includes('gaming')) {
    suggestions.push({
      title: 'Wireless Gaming Controller',
      description: 'Pro-grade gaming controller with customizable buttons and low latency connection',
      price: 69.99,
      imageUrl: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: 'Enhances gaming experience with premium controls and comfort',
    });
  }

  if (interests.includes('cooking')) {
    suggestions.push({
      title: 'Smart Kitchen Scale',
      description: 'Precision digital scale with smartphone connectivity and recipe integration',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: 'Helps perfect recipes and portion control with smart features',
    });
  }

  if (interests.includes('fitness')) {
    suggestions.push({
      title: 'Smart Fitness Tracker',
      description: 'Track workouts, heart rate, and sleep patterns with this sleek fitness tracker',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1550345332-ef43f1e6b8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: `Great for ${recipient.name}'s fitness goals, ensuring a healthier lifestyle`,
    });
  }

  if (interests.includes('music')) {
    suggestions.push({
      title: 'Portable Bluetooth Speaker',
      description: 'Compact yet powerful speaker with long battery life and waterproof design',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: 'Perfect for music lovers who enjoy tunes on the go',
    });
  }

  if (interests.includes('travel')) {
    suggestions.push({
      title: 'Travel Organizer Set',
      description: 'Durable and stylish packing cubes to keep luggage neat and organized',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1611691547870-9a4e585ebee3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: 'A must-have for travelers who value convenience and organization',
    });
  }

  if (interests.includes('photography')) {
    suggestions.push({
      title: 'Camera Lens Cleaning Kit',
      description: 'Professional cleaning tools to maintain lens quality and extend gear lifespan',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: `Ideal for ${recipient.name}'s passion for capturing moments with crystal-clear images`,
    });
  }

  if (interests.includes('art')) {
    suggestions.push({
      title: 'Professional Sketchbook Set',
      description: 'High-quality sketchbook with assorted pencils and erasers for artistic creations',
      price: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1516637090014-cb1ab78511f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: `Supports ${recipient.name}'s artistic endeavors with premium tools`,
    });
  }

  // Add general suggestions if fewer than 3 were matched
  if (suggestions.length < 3) {
    suggestions.push({
      title: 'Premium Wireless Earbuds',
      description: 'High-quality wireless earbuds with active noise cancellation',
      price: 129.99,
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      reason: 'Universal gift for music lovers and podcast enthusiasts',
    });
  }

  return suggestions.filter(s => s.price <= recipient.budget);
};

export { generateSuggestions };
