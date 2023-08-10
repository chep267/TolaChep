const tagDatas = {
    0: {
        name: 'chat',
    },
    1: {
        name: 'blog',
    },
    get(id) {
        return this[id];
    },
};

export default tagDatas;
