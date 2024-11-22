import React from 'react';

const emojis = [
  '😊', '💩', '😄', '😃', '😎', '😀', '🎁', '😘', '😍', '😊', '🌈', '😂', '😋', '😄',
  '❤️', '🌹', '🐻', '💋', '👆', '😇'
];

const EmojiGrid = () => {
  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => (
        <button
          key={index}
          className="w-8 h-8 text-xl hover:bg-gray-100 rounded-full transition-colors duration-200 flex items-center justify-center"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiGrid;