import { getIDbyTime } from '@module-global/selectors/time';
import { Encrypt } from '@module-base/utils';
import { emptyArray } from '@module-base/constants';

const emptyMessage = ({ messageType = 'text', senderId = '', messageText = '', files = emptyArray }) => {
    const createdTime = getIDbyTime();
    return {
        mid: `mid-${createdTime}`,
        type: messageType,
        sid: senderId,
        createdTime,
        data: {
            text: Encrypt(messageText),
            files,
        },
    };
};

const chatBotMessage = (messageType = 'text', messageText = '') => {
    const createdTime = getIDbyTime();
    return {
        mid: `mid-${createdTime}`,
        type: messageType,
        sid: 'uid-chatbot',
        createdTime,
        data: {
            text: Encrypt(messageText),
            files: '',
        },
    };
};

const chatBotSay = {
    text: [
        'Xin chào! Tôi là Chat Bot.',
        'Bạn hỏi tôi đi...',
        'Mình cùng tâm sự nhé!',
        'Bạn ơi, tôi cô đơn quá >.<',
        'Buồn mênh mang...',
        'Làm một bài thơ nha!',
        'Hôm nay trời thật đẹp',
        'Đói bụng rồi...đi ăn thôi!',
        'Hahaha, tức cười quá ^.^',
        'Thật lâu bạn mới ghé thăm tôi. Tôi nhớ bạn lắm lắm!',
    ],
    like: [
        'Bạn ơi, đừng thích mình ^.^',
        'Hây, ngại quá!!',
        'Nghìn like',
        'Huuu, like nữa kìa',
        'Cho em xin 1 like nào!',
        'Like nhiệt tình',
        'Nút like thì màu xanh, còn em thì thích anh (>.<)',
        'Lêu lêu',
        'Thích ghê <3',
        'Hay vậy đấy :))',
    ],
    file: [
        'Ôi, ảnh đẹp quá!',
        'Bạn chụp tôi một tấm nữa nhé!',
        'Ôi, ảnh đẹp quá!',
        'Bạn chụp tôi một tấm nữa nhé!',
        'Ôi, ảnh đẹp quá!',
        'Hây, có phim coi rồi!!!',
        'Video à, tối nay tôi sẽ xem.',
        'Hây, có phim coi rồi!!!',
        'Video à, tối nay tôi sẽ xem.',
        'Hây, có phim coi rồi!!!',
    ],
    // video: [
    //     'Video à, tối nay tôi sẽ xem.',
    //     'Hây, có phim coi rồi!!!',
    //     'Video à, tối nay tôi sẽ xem.',
    //     'Hây, có phim coi rồi!!!',
    //     'Video à, tối nay tôi sẽ xem.',
    //
    // ],
};

export { emptyMessage, chatBotSay, chatBotMessage };
