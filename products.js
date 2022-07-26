/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      products: [],
    };
  },
  created: function () {
    this.loadProducts();
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products.json").then((response) => {
        this.products = response.data;
        console.log(response.data);
      });
    },
    createProduct: function () {
      axios
        .post("http://localhost:3000/products.json", {
          name: "Banana2",
          description: "This is an item",
          image_url: "Too lazy to get url",
          price: 5.99,
        })
        .then(function (response) {
          console.log(response.data);
        });
    },
  },
};

Vue.createApp(App).mount("#app");
