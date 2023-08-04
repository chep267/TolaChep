/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import lodash from 'lodash';

const genIdByTime = (prefix = '') => `${prefix}${Date.now()}`;

const getTimeToShow = (createdTime: number | string) => {
    const timer = new Date(Number(createdTime));
    const parseTime = (time: number | string) => `${Number(time) < 10 ? '0' : ''}${time}`;
    return {
        minute: parseTime(timer.getMinutes()),
        hour: parseTime(timer.getHours()),
        day: parseTime(timer.getDate()),
        month: parseTime(timer.getMonth() + 1),
        year: parseTime(timer.getFullYear()),
    };
};

const getState = (state: object, path: Array<string>) => lodash.get(state, path);

export { genIdByTime, getTimeToShow, getState };
