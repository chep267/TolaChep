/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
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
