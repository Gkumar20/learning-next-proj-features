// services/getUser.ts
export default async function GetUser() {
    try {
      const response = await fetch('https://dummyjson.com/users'); // Example API URL
      const data = await response.json();
  
      // Assuming that `data.users` is the array containing the list of users
      return data.users ; // Returning an empty array if no users found
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return an empty array in case of an error
    }
  }
  