/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import {
    getDatabase,
    ref as dbRef,
    query,
    get,
    onValue,
    onChildChanged,
    onChildAdded,
    onChildRemoved,
    set,
    update,
    remove,
    QueryConstraint,
    DataSnapshot,
} from 'firebase/database';

// utils
import { firebaseApp } from '@module-global/utils';

const realtimeDB = getDatabase(firebaseApp);

export interface payloadPropsWithCallBack {
    type?: string;
    path?: string;
    data?: object;
    queryConstraints?: QueryConstraint[];
    fnCallback(snapshot: DataSnapshot, previousChildName?: string | null | undefined): unknown;
}

export interface payloadPropsWithoutCallBack {
    type?: string;
    path?: string;
    data?: object;
    queryConstraints?: QueryConstraint[];
}

const FIREBASE_GET = (payload: payloadPropsWithoutCallBack) => {
    const { path, queryConstraints } = payload;
    if (!queryConstraints || queryConstraints.length === 0) {
        return get(query(dbRef(realtimeDB, path)));
    }
    return get(query(dbRef(realtimeDB, path), ...queryConstraints))
        .then(() => ({ response: true }))
        .catch((error) => ({ error }));
};

const FIREBASE_ON_GET = (payload: payloadPropsWithCallBack) => {
    const { type, path, fnCallback } = payload;
    if (type === 'add') return onChildAdded(dbRef(realtimeDB, path), fnCallback);
    if (type === 'remove') return onChildRemoved(dbRef(realtimeDB, path), fnCallback);
    if (type === 'change') return onChildChanged(dbRef(realtimeDB, path), fnCallback);
    return onValue(dbRef(realtimeDB, path), fnCallback);
};

const FIREBASE_SET = (payload: payloadPropsWithoutCallBack) => {
    const { path, data } = payload;
    return set(dbRef(realtimeDB, path), data)
        .then(() => ({ response: true }))
        .catch((error) => ({ error }));
};

const FIREBASE_UPDATE = (payload: payloadPropsWithoutCallBack) => {
    const { path, data = {} } = payload;
    return update(dbRef(realtimeDB, path), data)
        .then(() => ({ response: true }))
        .catch((error) => ({ error }));
};

const FIREBASE_REMOVE = (payload: payloadPropsWithoutCallBack) => {
    const { path } = payload;
    return remove(dbRef(realtimeDB, path))
        .then(() => ({ response: true }))
        .catch((error) => ({ error }));
};

export { FIREBASE_GET, FIREBASE_SET, FIREBASE_UPDATE, FIREBASE_REMOVE, FIREBASE_ON_GET };
