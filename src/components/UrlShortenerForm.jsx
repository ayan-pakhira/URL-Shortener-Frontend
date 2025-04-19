import React, { useState } from 'react';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [urlData, setUrlData] = useState([]);
  const [showTable, setShowTable] = useState(false); // Control visibility of table

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock shortening the URL
    const generatedShortUrl = 'https://short.ly/abcd1234';

    // Add the new data to the table
    const newUrlData = {
      originalLink: originalUrl,
      shortLink: generatedShortUrl,
      qrCode: '', // Placeholder for QR Code
      clicks: '', // Placeholder for clicks
      status: '', // Placeholder for status
      date: '', // Placeholder for date
    };

    setUrlData([newUrlData, ...urlData]); // Adding new row at the top of the table
    setShortUrl(generatedShortUrl); // Set the short URL
    setOriginalUrl(''); // Reset the original URL field after submit
    setShowTable(true); // Show the table after the first submission
  };

  return (
    <section id="shorten" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shorten Your URL</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col md:flex-row items-center mb-8">
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

        {/* Display the shortened URL */}
        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-700">Your shortened URL:</p>
            <a href={shortUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}

        {/* Table to show shortened URL data */}
        {showTable && (
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">Short Link</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">Original Link</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">QR Code</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">Clicks</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">Status</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                {urlData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-800">{data.shortLink}</td>
                    <td className="py-3 px-4 text-gray-800">{data.originalLink}</td>
                    <td className="py-3 px-4 text-gray-800">{data.qrCode || 'N/A'}</td>
                    <td className="py-3 px-4 text-gray-800">{data.clicks || 'N/A'}</td>
                    <td className="py-3 px-4 text-gray-800">{data.status || 'N/A'}</td>
                    <td className="py-3 px-4 text-gray-800">{data.date || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default UrlShortenerForm;
