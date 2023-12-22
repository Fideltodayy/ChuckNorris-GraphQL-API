// Import axios to make the HTTP requests
import axios from 'axios';
// Define the url to be used wehich is the ChuckNorris.io API URL
const url = 'https://api.chucknorris.io/jokes';



// Define the resolvers for the GraphQL schema/Graph to handle the Queries

 export const resolvers = {
    Query: {
        categories: async () => {
        
            try{
                const response = await axios.get(`${url}/categories`);
                return response.data;
            } catch (error) {
                console.error('Error fetching categories:', error.message);
                throw error;
            }
        },
        randomJoke: async (parent, args) => {
            try {
                const response = await axios.get(`${url}/random?category=${args.category}`);
                return response.data;
            } catch (error) {
                console.error(`Error fetching random joke for category ${category}:`, error.message);
                throw error;
            }
        },
    },
};