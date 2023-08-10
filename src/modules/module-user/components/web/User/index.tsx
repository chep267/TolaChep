/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';

/** components */
import UserAvatar from '@module-user/components/web/UserAvatar';
import UserName from '@module-user/components/web/UserName';

/** types */
import type { UserProps } from '@module-user/models';
import { useNavigate } from 'react-router-dom';
import { SCREEN } from '@module-global/constants';

const UserElement = styled(Button)`
    margin-right: 30px;
    padding: 0;
    div[class*='ant-skeleton'] {
        display: flex;
    }
`;

const User = React.memo((props: UserProps) => {
    const { userId, avatarProps, nameProps } = props;
    const navigate = useNavigate();

    const onClick = React.useCallback(() => {
        navigate(`${SCREEN.PROFILE}/${userId}`);
    }, []);

    return (
        <UserElement type="link" onClick={onClick}>
            <Space>
                <UserAvatar userId={userId} {...avatarProps} className="UserAvatar" />
                <UserName userId={userId} {...nameProps} className="UserName" />
            </Space>
        </UserElement>
    );
});

User.displayName = 'User';
export default User;
