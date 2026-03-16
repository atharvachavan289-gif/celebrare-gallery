//  Initialize state from localStorage (or an empty array if nothing exists yet)
export const initialState = JSON.parse(localStorage.getItem('favourites')) || [];

//  The Reducer Function
export const favouritesReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      // Check if the photo is already in our favourites array
      const isFavourite = state.some(photo => photo.id === action.payload.id);
      
      if (isFavourite) {
        // If it's already a favourite, remove it (filter it out)
        newState = state.filter(photo => photo.id !== action.payload.id);
      } else {
        // If it's not a favourite, add it to the array
        newState = [...state, action.payload];
      }

      // Save the updated array directly to localStorage so it persists on refresh
      localStorage.setItem('favourites', JSON.stringify(newState));
      
      return newState;

    default:
      return state;
  }
};

