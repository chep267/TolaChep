/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/**
 * func getDuration
 *
 * return: thời gian hh:mm:ss
 */
export const getDuration = (time: string | number) => {
    const value = parseInt(`${time}`, 10);
    if (!value) return '00:00';

    // < 60s || 1m -> 00:second
    if (value < 60) return `00:${value < 10 ? `0${value}` : value}`;

    // < 60m || 1h -> min:second
    if (value < 3600) {
        const min = Math.floor(value / 60);
        const sec = value - min * 60;
        return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    }

    // hour:min:second
    const hour = Math.floor(value / 3600);
    const min = Math.floor((value - hour * 3600) / 60);
    const sec = value - hour * 3600 - min * 60;
    return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};
