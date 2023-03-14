/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

/** components */
// import Avatar from '@mui/material/Avatar';

// Selectors
import { stringAvatar } from '@modules/module-user/selectors/Avatar';
import { AUTH_ACTION } from '@module-auth/actions';
import { connect } from 'react-redux';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
    account?: string;
}

function AvatarBase(props: AvatarProps) {
    const { className = '', src = '', size, account } = props;
    // const { url = AVATAR_DEFAULT, size = 40, name } = props;
    // const [isLoading, setIsLoading] = useState(true);
    // const [isShowImage, setIsShowImage] = useState(false);
    //
    // const onFullScreen = () => {
    //     setIsShowImage(true);
    // }
    //
    // const outFullScreen = () => {
    //     setIsShowImage(false);
    // }
    //
    // const onLoadingSuccess = () => {
    //     setIsLoading(false);
    // }
    //
    // return (
    //     <div className={styles.message_item_content_photo_wrap}>
    //         {
    //             isShowImage ? <FullScreen url={url} name={name} onClose={outFullScreen} /> : null
    //         }
    //         {isLoading ? (
    //             <img
    //                 src={imgLoading}
    //                 alt={name}
    //                 width={size}
    //                 height={size}
    //                 className={styles.user_avatar}
    //             />
    //         ) : null}
    //         <img
    //             src={url}
    //             alt={name}
    //             width={size}
    //             height={size}
    //             className={`${styles.user_avatar} ${isLoading ? styles.hidden : ''}`}
    //             onLoad={onLoadingSuccess}
    //             onClick={onFullScreen}
    //         />
    //     </div>
    // );

    return <div className={className}>{/*<Avatar alt="avt" src={src} {...stringAvatar(account, size)} />*/}</div>;
}

const mapStateToProps = () => {
    // do
    return {
        // user:
    };
};

const mapDispatchToProps = (dispatch: any) => {
    // do
    return {
        doSignIn: (payload) => {
            dispatch({ type: AUTH_ACTION.SIGN_IN.REQUEST, payload });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarBase);
