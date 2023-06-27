/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import classnames from 'classnames';
import { Button, Spin } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';

// components
import ListItem from '@snw-components/web-antd-custom/ListBase/components/ListItem';

// styles
import styles from '@snw-components/web-antd-custom/ListBase/styles/index.local.less';

// utils
import type { ListContentProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const ListContent = React.memo((props: ListContentProps) => {
    const {
        disableEventKey = false,
        idSelect = '',
        contentClassName,
        loading,
        empty,
        data,
        renderItem,
        onSelect,
        listHook,
    } = props;
    const ElementScroll = React.useRef<HTMLDivElement>(null);
    const [visibleScroll, setVisibleScroll] = React.useState(false);

    // @ts-ignore
    const dataSize = (data && (data.length || data.size)) || 0;

    React.useEffect(() => {
        const update = { total: dataSize, disableEventKey };
        listHook.onUpdate(update);
    }, [data]);

    React.useEffect(() => {
        if (listHook.idSelect !== idSelect) {
            listHook.onSelect({ idSelect });
        }
    }, [idSelect]);

    const onSelectItem = React.useCallback((id: string, key: number) => {
        listHook.onSelect({ idSelect: id, itemSelect: key });
        if (typeof onSelect === 'function') {
            onSelect(id);
        }
    }, []);

    const renderList = () => {
        if (loading) {
            return <Spin className={classnames(styles['list-base-empty'], 'list-base-empty')} />;
        }

        if (!data || !dataSize) {
            return !empty || typeof empty === 'string' ? (
                <div className={classnames(styles['list-base-empty'], 'list-base-empty')}>
                    <span>{empty || 'Danh sách trống'}</span>
                </div>
            ) : (
                empty
            );
        }

        let count = 0;
        return data.map((item) => {
            count += 1;
            return (
                <ListItem
                    key={item}
                    item={item}
                    index={count}
                    isHovered={listHook.itemHover === count}
                    isSelected={listHook.itemSelect === count || listHook.idSelect === item}
                    renderItem={renderItem}
                    onClick={onSelectItem}
                />
            );
        });
    };

    const onScroll = () => {
        if (ElementScroll.current) {
            const rangeScroll = (ElementScroll.current.clientHeight * 30) / 100;
            if (ElementScroll.current.scrollTop > rangeScroll && !visibleScroll) {
                setVisibleScroll(true);
            }
            if (ElementScroll.current.scrollTop < rangeScroll && visibleScroll) {
                setVisibleScroll(false);
            }
        }
    };

    const onClickButtonScroll = () => {
        if (ElementScroll.current) {
            ElementScroll.current.scrollTop = 0;
        }
    };

    return (
        <div className={classnames(styles['list-base-content'], contentClassName, 'list-base-content')}>
            <div
                ref={ElementScroll}
                onScroll={onScroll}
                className={classnames(styles['list-base-content-absolute'], 'list-base-content-absolute')}>
                {renderList()}
            </div>
            <Button
                onClick={onClickButtonScroll}
                className={classnames(styles['list-base-buttonScroll'], 'list-base-buttonScroll', {
                    [styles['list-base-buttonScroll-hidden']]: !visibleScroll,
                })}
                shape="circle"
                icon={<UpCircleFilled />}
            />
        </div>
    );
});
ListContent.displayName = 'ListContent';
export default ListContent;
