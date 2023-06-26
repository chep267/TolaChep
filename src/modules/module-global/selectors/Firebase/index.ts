/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** apis */
import { getUrlFile } from '@module-global/apis';

const getAvatarBase = () => getUrlFile('/base/avatar.png');

const getCoverBase = () => getUrlFile('/base/background.jpg');

const getBlobFromUriFile = (uri: string) =>
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            // return the blob
            resolve(xhr.response);
        };
        xhr.onerror = () => {
            // something went wrong
            reject(new Error('uriToBlob failed'));
        };
        // this helps us get a blob
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

export { getAvatarBase, getCoverBase, getBlobFromUriFile };
