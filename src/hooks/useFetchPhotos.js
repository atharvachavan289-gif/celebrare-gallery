import { useState, useEffect } from 'react';

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Fetching 30 photos as requested
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=30');
        
        if (!response.ok) {
          throw new Error('Failed to fetch photos from the server.');
        }
        
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;