const Images = {
    back: require('../Images/Back.png'),
    nav_bar: require('../Images/nav_bar.png'),
    placeholder_for_missing_posters: require('../Images/placeholder_for_missing_posters.png'),
    'poster1.jpg': require('../Images/poster1.jpg'),
    'poster2.jpg': require('../Images/poster2.jpg'),
    'poster3.jpg': require('../Images/poster3.jpg'),
    'poster4.jpg': require('../Images/poster4.jpg'),
    'poster5.jpg': require('../Images/poster5.jpg'),
    'poster6.jpg': require('../Images/poster6.jpg'),
    'poster7.jpg': require('../Images/poster7.jpg'),
    'poster8.jpg': require('../Images/poster8.jpg'),
    'poster9.jpg': require('../Images/poster9.jpg'),
    search: require('../Images/search.png'),

};

export default Images;

export const getImageByName = (name) => {
    if (Images[name]) {
        return Images[name]
    }
    return Images.placeholder_for_missing_posters
}