/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import useSWR from 'swr';

/** selectors */
import { getAvatarBase, getCoverBase } from '@module-global/utils';

/** constants */
import { avatarLocalKey, coverLocalKey } from '@module-global/constants';

const useAppStart = () => {
    const avatarBase = useSWR(avatarLocalKey, getAvatarBase);
    const coverBase = useSWR(coverLocalKey, getCoverBase);

    return {
        data: {
            avatarBase: avatarBase.data,
            coverBase: coverBase.data,
        },
        isLoading: avatarBase.isLoading || coverBase.isLoading,
        isError: avatarBase.error || coverBase.error,
    };
};

export { useAppStart };
