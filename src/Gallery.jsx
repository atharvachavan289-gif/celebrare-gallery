import React, { useReducer, useState, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favouritesReducer, initialState } from './favouritesReducer';

const Gallery = () => {
  // Fetching data using our custom hook
  const { photos, loading, error } = useFetchPhotos();
  
  // Initializing our reducer for favourites
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);
  
  //  State for the search input
  const [searchTerm, setSearchTerm] = useState('');

  // useCallback for the search handler
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // useMemo to filter the photos array
  const filteredPhotos = useMemo(() => {
    if (!searchTerm) return photos;
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  //  Handling Loading and Error states
  if (loading) return <div className="text-center mt-20 text-2xl font-semibold text-gray-600">Loading photos...</div>;
  if (error) return <div className="text-center mt-20 text-xl text-red-500">Error: {error}</div>;

  //  The Main UI Render
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => {
          // Check if this specific photo is in the favourites list
          const isFav = favourites.some(fav => fav.id === photo.id);
          
          return (
            <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={photo.download_url}
                alt={`By ${photo.author}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex justify-between items-center bg-gray-50">
                <span className="font-medium text-gray-800 truncate pr-4">{photo.author}</span>
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_FAVOURITE', payload: photo })}
                  className="text-2xl focus:outline-none transition-transform hover:scale-110"
                >
                  {isFav ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State for Search */}
      {filteredPhotos.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-lg">
          No photos found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Gallery;