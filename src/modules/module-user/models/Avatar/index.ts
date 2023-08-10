/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { AvatarProps } from 'antd/es/skeleton/Avatar';
import type { TextProps } from 'antd/es/typography/Text';

interface UserAvatarProps extends AvatarProps {
    userId: string;
}

interface UserNameProps extends TextProps {
    userId: string;
}

interface UserProps extends AvatarProps {
    userId: string;
    avatarProps?: UserAvatarProps;
    nameProps?: UserNameProps;
}

export type { UserAvatarProps, UserNameProps, UserProps };
