import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
        <div class="item-detail">
        <img src="${CONFIG.BASE_IMAGE_S + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="description">
        <h3 class="name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <div class="ratting"><i class="fa-solid fa-star" style="color: #51501f;">${restaurant.rating}</i></div>
            <div class="city">${restaurant.city}</div>
            <div class="card-description">
            <p>${restaurant.description.slice(0, 150)}...
            </div>
        </div></div>
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="list-item">
        <img src="${CONFIG.BASE_IMAGE_M + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="description">
        <div class="ratting"><i class="fa-solid fa-star" style="color: #51501f;">${restaurant.rating}</i></div>
        <h3 class="name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <div class="city">${restaurant.city}</div>
            <div class="card-description">
            <p>${restaurant.description.slice(0, 150)}...
            </div>
        </div></div>
        </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};