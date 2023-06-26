/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 10/11/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';

// styles
import styles from '../../styles/index.local.less';

// utils
import { ListItemProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const ListItem = React.memo((props: ListItemProps) => {
    const { item, index, isHovered, isSelected, onClick, renderItem } = props;
    const itemRef: React.RefObject<HTMLElement> = React.useRef(null);

    React.useEffect(() => {
        if (isHovered && itemRef.current && itemRef.current.scrollIntoView) {
            itemRef.current.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' });
        }
    }, [isHovered]);

    React.useEffect(() => {
        if (isSelected) {
            handleClick();
        }
    }, [isSelected]);

    const handleClick = React.useCallback(() => {
        if (typeof onClick === 'function') {
            onClick(item, index);
        }
    }, []);

    return (
        <Button
            ref={itemRef}
            type="default"
            className={classnames(
                styles['list-base-content-item'],
                'list-base-content-item',
                { [`${styles['list-base-content-item-hover']}`]: isHovered },
                { [`${styles['list-base-content-item-select']}`]: isSelected }
            )}
            onClick={handleClick}>
            {typeof renderItem === 'function' ? renderItem(item, index) : item}
        </Button>
    );
});

ListItem.displayName = 'ListItem';
export default ListItem;
