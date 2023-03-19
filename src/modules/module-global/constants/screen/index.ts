/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export const SCREEN = Object.freeze({
    FEED: '/feed',
    MESSENGER: '/messenger',
    GROUP: '/group',
    NOT_FOUND: '/404',

    // auth
    SIGN_IN: '/signin',
    REGISTER: '/register',
    RECOVER: '/recover',
});

export const ListAppBar = [
    {
        name: 'New Feed',
        path: '/feed',
    },
    {
        name: 'Messenger',
        path: '/messenger',
    },
    {
        name: 'Not Found',
        path: '/404',
    },
] as const;
