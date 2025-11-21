export const toLower = (str) => str.toLowerCase();
export const toUpper = (str) => str.toUpperCase();

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default capitalize;