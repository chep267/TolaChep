/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import useSWR from 'swr';

/** apis */
import { FIREBASE_GET } from '@module-global/apis';

/** constants */
import { PATH_USER_FIREBASE } from '@module-user/constants';

/** types */
import type { UserType } from '@module-user/models';

const useUser = (id: string) => {
    const { data, isLoading, error } = useSWR(`${PATH_USER_FIREBASE}${id}`, (path) => FIREBASE_GET({ path }));
    const user: UserType | null = data?.exists() ? data?.val() : null;
    return {
        user,
        isLoading,
        error,
    };
};

const useUsers = () => {
    const response = useSWR(PATH_USER_FIREBASE, (path) => FIREBASE_GET({ path }));
    let itemIds: string[] = [];
    let items: Record<string, UserType> = {};

    if (!response.isLoading && !response.error) {
        itemIds = [];
        items = {};
    }

    return {
        ...response,
        data: {
            itemIds,
            items,
        },
    };
};

export { useUser, useUsers };
