const request = {
    post: async (url, data) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
  
    // Add other request methods (e.g., get, put, delete) as needed
  };
  
  export default request;
