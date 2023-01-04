import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID waYkJN3aqipqHE0tX42fROVcN3Y6RFbneqbdWBFJN-8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
