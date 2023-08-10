/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Typography, Skeleton } from 'antd';

/** utils */
import { useUser } from '@module-user/utils';

/** types */
import type { UserNameProps } from '@module-user/models';

const UserName = React.memo((props: UserNameProps) => {
    const { userId, ...nameProps } = props;
    const { user, isLoading } = useUser(userId);

    if (isLoading) {
        return <Skeleton.Input active className={nameProps.className} />;
    }

    return <Typography.Text {...nameProps}>{user?.info.name}</Typography.Text>;
});

UserName.displayName = 'UserName';
export default UserName;
