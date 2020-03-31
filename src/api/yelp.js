import axios from 'axios';

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
   
});

// https://api.yelp.com/v3/businesses