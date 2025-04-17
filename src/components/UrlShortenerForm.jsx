import React, { useState } from 'react';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API to shorten URL
    // For now, we'll mock the shortened URL
    setShortUrl('https://short.ly/abcd1234');
  };

  return (
    <section id="shorten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shorten Your URL</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col md:flex-row items-center">
          <input
            type="url"
            required
            placeholder="Enter your URL here"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-700">Your shortened URL:</p>
            <a href={shortUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default UrlShortenerForm;
