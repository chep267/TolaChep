/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { FIREBASE_SET } from '../realtimeDB';

// utils
import { firebaseApp } from '@module-global/utils';
const st = getStorage(firebaseApp);

export const getUrlFile = (path: string) => getDownloadURL(ref(st, path));

export const apiSendFile = async (meId: string, threadId: string, mid: string, file: File) => {
    const { type = '', name } = file;
    const metadata = {
        contentType: type,
    };
    const urlRef = type.includes('image/') ? 'images/' : type.includes('video/') ? 'videos/' : 'others/';
    const storageRef = ref(st, `/files/messengers/${meId}/${threadId}/${mid}/${urlRef}/${name}`);
    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    const fid = `fid-${Date.now()}`;
    const partnerId = `uid-${threadId.split('-')[1]}`;
    const partnerThreadId = `cid-${meId.split('-')[1]}`;
    FIREBASE_SET({ path: `/repos/${meId}/${threadId}/${urlRef}/${fid}/`, data: { url, mid, name, fid } }).then();
    FIREBASE_SET({ path: `/repos/${partnerId}/${partnerThreadId}/${urlRef}/${fid}/`, data: { url, mid, name, fid } }).then();
    return {
        mid,
        url,
        type,
        name,
        fid,
    };
};

export const apiUploadAvatar = async (meId: string, key: 'avatar' | 'background', file: File) => {
    const { type = 'jpg', name = `avatar.${type}` } = file;
    const metadata = {
        contentType: type,
    };
    const storageRef = ref(st, `/files/users/${meId}/image/${key}/${name}`);
    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return {
        url,
        type,
        name,
        fid: `fid-${Date.now()}`,
    };
};
