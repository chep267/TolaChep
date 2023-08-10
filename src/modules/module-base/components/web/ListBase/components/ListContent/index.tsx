/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { UpCircleFilled } from '@ant-design/icons';

/** components */
import {
    ListContentElementWrap,
    ListContentElement,
    ListContentEmptyElement,
    ListContentLoadingElement,
    ListContentButtonScroll,
} from '../Layout';
import ListItem from '../ListItem';
import ListSearch from '../ListSearch';
import { TextBase } from '@module-base/components/web';

/** utils */
import { baseMessage, useListBase } from '@module-base/utils';

/** constants */
import { emptyArray, emptyFunction } from '@module-base/constants';

/** types */
import type { ListBaseProps, ItemDataType } from '@module-base/models';

const ListContent = React.memo((props: Pick<ListBaseProps, 'searchProps' | 'contentProps'>) => {
    const { contentProps, searchProps } = props;
    const {
        disableEventKey = false,
        idSelect = '',
        loading = false,
        empty,
        data = emptyArray,
        renderItem,
        onSelect = emptyFunction,
    } = contentProps;

    const listHook = useListBase();
    const listRef = React.useRef<HTMLDivElement>(null);
    const [visibleScroll, setVisibleScroll] = React.useState(false);

    React.useEffect(() => {
        const update = { total: data.length, disableEventKey };
        listHook.onUpdate(update);
    }, [data]);

    React.useEffect(() => {
        if (listHook.idSelect !== idSelect) {
            listHook.onSelect({ idSelect });
        }
    }, [idSelect]);

    const onSelectItem = React.useCallback((item: ItemDataType, key: number) => {
        const id = typeof item === 'object' ? item.id : item;
        listHook.onSelect({ idSelect: id, itemSelect: key });
        onSelect(id);
    }, []);

    const renderList = () => {
        if (loading) {
            return <ListContentLoadingElement />;
        }

        if (data.length === 0) {
            return !empty || typeof empty === 'string' || typeof empty === 'number' ? (
                <ListContentEmptyElement>
                    {empty || (
                        <TextBase className="text-empty" message={baseMessage['module.base.component.tree.text.empty']} />
                    )}
                </ListContentEmptyElement>
            ) : (
                empty
            );
        }

        let count = 0;
        return data.map((item) => {
            count += 1;
            const key = typeof item === 'object' ? item.id : item;
            return (
                <ListItem
                    key={key}
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

    const onScroll = React.useCallback(() => {
        if (listRef.current) {
            const rangeScroll = (listRef.current.clientHeight * 30) / 100;
            if (listRef.current.scrollTop > rangeScroll && !visibleScroll) {
                setVisibleScroll(true);
            }
            if (listRef.current.scrollTop < rangeScroll && visibleScroll) {
                setVisibleScroll(false);
            }
        }
    }, [visibleScroll]);

    const onClickButtonScroll = React.useCallback(() => {
        if (listRef.current) {
            listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <ListContentElementWrap>
            <ListContentElement ref={listRef} onScroll={onScroll}>
                {searchProps ? <ListSearch {...searchProps} onKeyDown={listHook.onKeyPress} /> : false}
                {renderList()}
            </ListContentElement>
            <ListContentButtonScroll
                $visible={visibleScroll}
                onClick={onClickButtonScroll}
                shape="circle"
                icon={<UpCircleFilled style={{ color: '#f56a00' }} />}
            />
        </ListContentElementWrap>
    );
});
ListContent.displayName = 'ListContent';
export default ListContent;
