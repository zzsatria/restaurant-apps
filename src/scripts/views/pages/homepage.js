import RestaurantSource from "../../data/retaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Homepage = {
    async render() {
        return `
        <div id="restaurant" class="list">

      `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.Katalog();
        const restaurantContainer = document.querySelector('#restaurant');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
}

export default Homepage;