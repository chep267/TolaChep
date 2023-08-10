/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Avatar, Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/** utils */
import { useUser } from '@module-user/utils';

/** types */
import type { UserAvatarProps } from '@module-user/models';

const UserAvatar = React.memo((props: UserAvatarProps) => {
    const { userId, ...avatarProps } = props;
    const { user, isLoading } = useUser(userId);

    if (isLoading) {
        return <Skeleton.Avatar active size={avatarProps.size} className={avatarProps.className} />;
    }

    if (user?.image.avatar) {
        return <Avatar src={user.image.avatar} alt="avatar" {...avatarProps} />;
    }

    if (user?.info) {
        return (
            <Avatar alt="avatar" {...avatarProps} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
                {user.info.name[0] || user.info.account[0]}
            </Avatar>
        );
    }

    return <Avatar icon={<UserOutlined />} alt="avatar" {...avatarProps} />;
});

UserAvatar.displayName = 'UserAvatar';
export default UserAvatar;
