
import JSON1 from './CONTENTLISTINGPAGE-PAGE1.json'
import JSON2 from './CONTENTLISTINGPAGE-PAGE2.json'
import JSON3 from './CONTENTLISTINGPAGE-PAGE3.json'

export const getMovieList = (skip, take) => {
    if (skip == 0) {
        return JSON1
    } else if (skip == 20) {
        return JSON2
    } else if (skip == 40) {
        return JSON3
    }

}