// /**
//  *
//  * @author dongntd267@gmail.com on 01/12/2022.
//  *
//  */
//
// const cache = new Map();
//
// export function fetchData(url) {
//     if (!cache.has(url)) {
//         cache.set(url, getData(url));
//     }
//     return cache.get(url);
// }
//
// async function getData(url) {
//     if (url === '/the-beatles/albums') {
//         return await getAlbums();
//     } else if (url === '/the-beatles/bio') {
//         return await getBio();
//     } else {
//         throw Error('Not implemented');
//     }
// }
//
// export default function useFetch(promise) {
//     if (promise.status === 'fulfilled') {
//         return promise.value;
//     } else if (promise.status === 'rejected') {
//         throw promise.reason;
//     } else if (promise.status === 'pending') {
//         throw promise;
//     } else {
//         promise.status = 'pending';
//         promise.then(
//             (result) => {
//                 promise.status = 'fulfilled';
//                 promise.value = result;
//             },
//             (reason) => {
//                 promise.status = 'rejected';
//                 promise.reason = reason;
//             }
//         );
//         throw promise;
//     }
// }
