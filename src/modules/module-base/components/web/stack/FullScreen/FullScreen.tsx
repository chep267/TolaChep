/**
 */

import React, { MouseEvent } from 'react';
// import iconDownload from '../../../messenger/assets/images/iconDownload.svg';

function FullScreen(props: any) {
    const { url, name, onClose } = props;

    const onItemClick = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const onDownload = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(this.response);
            const tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = name;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        };
        xhr.send();
    };

    return (
        // <Container role="presentation" onClick={onClose}>
        //     <BtnClose onClick={onClose}>X</BtnClose>
        //     <BtnDownLoad onClick={onDownload}>{/*<img src={iconDownload} alt="" loading="lazy" />*/}</BtnDownLoad>
        //     <div>
        //         {/*<img src={url} alt="" onClick={onItemClick} title={name} />*/}
        //         <button onClick={onDownload}>{/*<img src={iconDownload} alt="" loading="lazy" />*/}</button>
        //     </div>
        // </Container>
        <div />
    );
}

export default FullScreen;
