/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { all, call, spawn } from 'redux-saga/effects';

/** sagas */
import moduleAuthSaga from '@module-auth/sagas/watchers';
import moduleGlobalSaga from '@module-global/sagas/watchers';
import moduleUserSaga from '@module-user/sagas/watchers';

export default function* rootSaga() {
    const sagas = [...moduleAuthSaga, ...moduleGlobalSaga, ...moduleUserSaga];
    yield all(
        sagas.map((saga) =>
            spawn(function* runSaga() {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log('Error Saga: ', e);
                    }
                }
            })
        )
    );
}
