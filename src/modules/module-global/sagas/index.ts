/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { all, call, spawn } from 'redux-saga/effects';

/** sagas */
import moduleAuthSaga from '@module-auth/sagas/watchers';
import moduleUserSaga from '@module-user/sagas/watchers';

const rootSaga = function* rootSaga() {
    const sagas = [...moduleAuthSaga, ...moduleUserSaga];
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
};

export default rootSaga;
