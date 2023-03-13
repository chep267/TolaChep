/**
 * @author
 */

import React, { MouseEvent } from 'react';

export default function FileBase(props: any) {
    const { url = '', name = 'file.txt' } = props;

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
        <div>
            <span onClick={onDownload}>{name}</span>
        </div>
    );
}
