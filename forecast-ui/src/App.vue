<template>
<v-app>
  <v-data-table
    :headers="products"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1 ma-2"
  ></v-data-table>
</v-app>
</template>

<script>

export default {
  name: 'App',

  created() {
    //Get products lists
     this.$Axios.get('https://localhost:8000/forecast/products')
     .then((res) => {
        const { products } = res.data
        this.products = products   
     }).catch(() => {
        alert("error occured while getting products")
     })
  },

  data: () => ({
        headers: [
          { text: 'Product name', value: 'name' },
          { text: 'Store', value: 'store' },
          { text: 'Day', value: 'day' },
          { text: 'Description', value: 'desc' },
        ],
        products:
          [
              {
                  name:"alphonso mango",
                  desc:"great Quality of Mango",
                  store: "Manzah",
                  day: "Monday"
              },
              {
                  name:"Apples",
                  desc:"great Quality of Apple",
                  store: "Manzah",
                  day: "Monday"
              },
              {
                  name:"Kesar Mango",
                  desc:"great Quality of Mango",
                  store: "Manzah",
                  day: "Monday"
              },
              {
                  name:"Langra Mango",
                  desc:"great Quality of Mango",
                  store: "Manzah",
                  day: "Monday"
              },
              {
                  name:"Broccoli",
                  desc:"great Quality of Fresh Vegetable",
                  store: "Manzah",
                  day: "Monday"
              },
              {
                  name:"Cauliflower",
                  desc:"great Quality of Fresh Vegetable",
                  store: "Tunis",
                  day: "Monday"
              },
              {
                  name:"Olive Oil",
                  desc:"great Quality of Oil",
                  store: "Tunis",
                  day: "Tuestday"
              }
          ]
      }),
};
</script>
