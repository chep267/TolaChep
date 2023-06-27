/**
 * @author
 */

import * as React from 'react';
import AVATAR_DEFAULT from '../../../../assets/images/avatar.png';
import FullScreen from '../FullScreen/FullScreen';
import imgLoading from '../../../../assets/gif/imgLoading.gif';

export default function ImageBase(props: any) {
    const { url = AVATAR_DEFAULT, size = 40, name } = props;
    const [isLoading, setIsLoading] = React.useState(true);
    const [isShowImage, setIsShowImage] = React.useState(false);

    const onFullScreen = () => {
        setIsShowImage(true);
    };

    const outFullScreen = () => {
        setIsShowImage(false);
    };

    const onLoadingSuccess = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isShowImage ? <FullScreen url={url} name={name} onClose={outFullScreen} /> : null}
            {isLoading ? <img src={imgLoading} alt={name} width={size} height={size} /> : null}
            <img
                src={url}
                alt={name}
                width={size}
                height={size}
                // className={`${styles.image} ${isLoading ? styles.hidden : ''}`}
                onLoad={onLoadingSuccess}
                onClick={onFullScreen}
            />
        </div>
    );
}
