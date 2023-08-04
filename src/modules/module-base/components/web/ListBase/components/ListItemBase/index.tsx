/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

// styles
import styles from '../../styles/index.local.less';

// utils
import { getBackgroundAvatar } from '@module-user/utils/getURLAvatar';

type ItemProps = {
    className?: string;
    avatarProps: {
        className?: string;
        url?: string;
    };
    nameProps: {
        className?: string;
        primaryText?: string;
        secondText?: string;
    };
    renderOption?: React.ReactNode | (() => React.ReactNode);
};

const AvatarItem = React.memo(
    (props: ItemProps['avatarProps'] & { name?: string }) => {
        const { className, url, name } = props;

        const styleDefault = {
            background: url ? 'unset' : getBackgroundAvatar(name),
        };

        return (
            <div
                className={classnames(styles['list-item-base-avatar'], 'list-item-base-avatar', className)}
                style={styleDefault}>
                {url ? <img alt="" src={url} /> : name ? <span>{name[0]}</span> : null}
            </div>
        );
    },
    (prev, next) => prev.url === next.url
);
AvatarItem.displayName = 'AvatarItem';

const NameItem = React.memo(
    (props: ItemProps['nameProps']) => {
        const { className, primaryText, secondText } = props;

        return (
            <div className={classnames(styles['list-item-base-name'], 'list-item-base-name', className)}>
                <div className={classnames(styles['list-item-base-name-primary'], 'list-item-base-name-primary', className)}>
                    <span>{primaryText}</span>
                </div>
                {secondText ? (
                    <div
                        className={classnames(styles['list-item-base-name-second'], 'list-item-base-name-second', className)}>
                        {secondText}
                    </div>
                ) : null}
            </div>
        );
    },
    (prev, next) => prev.primaryText === next.primaryText || prev.secondText === next.secondText
);
NameItem.displayName = 'NameItem';

function ListItemBase(props: ItemProps) {
    const { className, avatarProps, nameProps, renderOption } = props;

    return (
        <div className={classnames(styles['list-item-base'], 'list-item-base', className)}>
            <AvatarItem {...avatarProps} name={nameProps.primaryText} />
            <NameItem {...nameProps} />
            {typeof renderOption === 'function' ? renderOption() : renderOption}
        </div>
    );
}

export default ListItemBase;
