/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const getIDbyTime = (pre = '') => `${pre}${Date.now()}`;

function getTimeToShow(createdTime: number | string) {
    const timer = new Date(Number(createdTime));
    return {
        minute: parseTime(timer.getMinutes()),
        hour: parseTime(timer.getHours()),
        day: timer.getDate(),
        month: timer.getMonth() + 1,
        year: timer.getFullYear(),
    };
}

const parseTime = (time: number | string) => `${Number(time) < 10 ? '0' : ''}${time}`;

export { getIDbyTime, getTimeToShow, parseTime };
