new Vue({
    el: '#vue',
    data: {
        items: [
            {
                name: 'Pasta',
                price: 12.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg'
            },
            {
                name: 'Seafood',
                price: 18.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg'
            },
            {
                name: 'Breakfast Special',
                price: 14.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg'
            },
            {
                name: 'Seafood Mix',
                price: 16.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg'
            },
            {
                name: 'Kebab Platter',
                price: 15.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg'
            },
            {
                name: 'Chicken Steak',
                price: 17.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg'
            },
            {
                name: 'Filet Mignon',
                price: 24.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg'
            },
            {
                name: 'Bistro Lunch',
                price: 13.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg'
            },
            {
                name: 'Cafe Crepe',
                price: 11.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg'
            },
            {
                name: 'Gourmet Burger',
                price: 13.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg'
            },
            {
                name: 'Chicken & Garlic Pizza',
                price: 14.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG'
            },
            {
                name: 'Stir Fry Wok',
                price: 12.99,
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg'
            }
        ]
    },
    methods: {
        addToCart: function(item) {
            alert('Added ' + item.name + ' to cart!');
        }
    }
});
