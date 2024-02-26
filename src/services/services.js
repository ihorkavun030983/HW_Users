const API = `https://jsonplaceholder.typicode.com/users`;

export const getListUsers = () => fetch(API).then((data) => data.json());

export const getListItem = (id) => {
    fetch(API + `/${id}`).then((data) => data.json());
}