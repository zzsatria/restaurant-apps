import FavRestaurantIdb from "../../data/fav-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
    async render() {
        return `
        <div id="restaurant" class="list">
      `;
    },

    async afterRender() {
        const restaurants = await FavRestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector('#restaurant');

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        })
    },
};

export default Favorite;