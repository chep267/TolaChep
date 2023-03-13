import THREAD_SAGA from './thread';
import MESSAGE_SAGA from './message';

const messageSaga = [
    ...THREAD_SAGA,
    ...MESSAGE_SAGA,
];

export default messageSaga;