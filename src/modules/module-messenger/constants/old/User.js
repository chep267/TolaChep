import avtChatBot from '../../assets/images/avtChatBot.jpg';
import avtCloud from '../../assets/images/avtCloud.jpg';
import background from '../../assets/images/background.jpg';
import { emptyUser } from '../../login/constants/user';

function UserDefault(uid = '', name = '') {
    if (uid === 'uid-chatbot') {
        return chatBotUser(name);
    }
    if (uid === 'uid-mycloud') {
        return myCloudUser(name);
    }
    return emptyUser;
}

const chatBotUser = (name) => ({
    uid: 'uid-chatbot',
    info: {
        email: 'chatbot@gmail.com',
        name,
        password: '12345',
        contact: 'chatbot@gmail.com',
        age: '18',
        phone: '0123456789',
    },
    image: {
        avatar: avtChatBot,
        background,
    },
    type: 'account',
});

const myCloudUser = (name) => ({
    uid: 'uid-mycloud',
    info: {
        email: 'mycloud@gmail.com',
        name,
        password: '12345',
        contact: 'mycloud@gmail.com',
        age: '18',
        phone: '0123456789',
    },
    image: {
        avatar: avtCloud,
        background,
    },
    type: 'account',
});

export default UserDefault;
