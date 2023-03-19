/**
 * @author
 */

import React, { useState } from 'react';
import AVATAR_DEFAULT from '../../../../assets/images/avatar.png';
import imgLoading from '../../../../assets/gif/imgLoading.gif';

export default function VideoBase(props: any) {
    const { url = AVATAR_DEFAULT, size = 200, name, type } = props;
    const [isLoading, setIsLoading] = useState(true);

    const onLoadingSuccess = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading ? (
                <img
                    src={imgLoading}
                    alt={name}
                    width={size}
                    height={size}
                    // className={styles.video}
                />
            ) : null}
            <video
                // className={`${styles.video} ${isLoading ? styles.hidden : ''}`}
                autoPlay
                loop
                controls
                width={size}
                height={size}
                onLoadedData={onLoadingSuccess}>
                <source src={url} type={type} />
            </video>
        </div>
    );
}
