const SpaceXAPI = {
  getRockets: async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch rockets data');
    }
  },
  getCapsules: async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/capsules');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch capsules data');
    }
  },
  getLandpads: async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/landpads');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch landpads data');
    }
  },
  getLaunches: async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch launches data');
    }
  },
  
};

export default SpaceXAPI;
