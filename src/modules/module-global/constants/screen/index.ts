import { IconsType } from '@module-base/components/web/IconBase';

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

export const ListAppBar: Array<{ name: string; path: (typeof SCREEN)[keyof typeof SCREEN]; icon: IconsType }> = [
    {
        name: 'New Feed',
        path: '/feed',
        icon: 'feed',
    },
    {
        name: 'Messenger',
        path: '/messenger',
        icon: 'messenger',
    },
    {
        name: 'Not Found',
        path: '/404',
        icon: 'task',
    },
];
