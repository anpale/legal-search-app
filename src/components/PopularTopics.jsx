import React from 'react';
import { FaGavel, FaHome, FaBuilding, FaCar } from 'react-icons/fa';

export function PopularTopics() {
  const topics = [
    { icon: FaGavel, name: 'Civil Law', color: 'bg-blue-500' },
    { icon: FaHome, name: 'Property', color: 'bg-green-500' },
    { icon: FaBuilding, name: 'Corporate', color: 'bg-purple-500' },
    { icon: FaCar, name: 'Insurance', color: 'bg-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {topics.map((topic, i) => (
        <button
          key={i}
          className="p-4 rounded-xl bg-[#2b3241] hover:bg-[#323a4b] transition-colors duration-200"
        >
          <div className={`w-12 h-12 ${topic.color} rounded-xl flex items-center justify-center mb-3`}>
            <topic.icon className="text-2xl text-white" />
          </div>
          <p className="text-gray-200 text-sm">{topic.name}</p>
        </button>
      ))}
    </div>
  );
}
