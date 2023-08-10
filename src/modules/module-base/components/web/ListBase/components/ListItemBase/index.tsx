/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/** components */
import { ListItemBaseElement, NameItemBaseElement } from '../Layout';

/** types */
import type { ListItemBaseProps } from '@module-base/models';

function ListItemBase(props: ListItemBaseProps) {
    const { avatarProps, nameProps, renderOption } = props;

    const renderAvatar = React.useMemo(() => {
        if (avatarProps?.url) {
            return <Avatar className={avatarProps.className} src={avatarProps.url} alt="avatar" size={avatarProps.size} />;
        }
        if (nameProps?.primaryText) {
            return (
                <Avatar
                    className={avatarProps?.className}
                    alt="avatar"
                    size={avatarProps?.size}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
                    {nameProps.primaryText[0]}
                </Avatar>
            );
        }
        return <Avatar icon={<UserOutlined />} className={avatarProps?.className} alt="avatar" size={avatarProps?.size} />;
    }, [avatarProps?.url, nameProps?.primaryText]);

    const renderName = React.useMemo(() => {
        return (
            <NameItemBaseElement className={nameProps?.className}>
                <Typography.Text className="primary" strong>
                    {nameProps?.primaryText}
                </Typography.Text>
                {nameProps?.secondText ? (
                    <Typography.Text className="second" italic>
                        {nameProps.secondText}
                    </Typography.Text>
                ) : null}
            </NameItemBaseElement>
        );
    }, [nameProps?.primaryText, nameProps?.secondText]);

    return (
        <ListItemBaseElement>
            {renderAvatar}
            {renderName}
            {typeof renderOption === 'function' ? renderOption() : renderOption}
        </ListItemBaseElement>
    );
}

export default ListItemBase;
