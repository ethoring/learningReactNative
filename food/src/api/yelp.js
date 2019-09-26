import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer S-ddfmXwwQd34UGWG6lq4wcTXIlA0ekmR_pKVb3tJlqLKJsLMlSlcG2O3fdZINVFxIAGh_lA9e76KMg-fbvrdKGlCSaqoBpL6gfGUg0vB0Iby2yF3UQXUJX2jzKNXXYx"
  }
});
