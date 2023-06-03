import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/retaurant-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
      <div id="restaurant" class="list"></div>
      <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        // Tampilkan movie di dalam DOM
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                rating: restaurant.rating,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
            },
        });
    },
};

export default Detail;