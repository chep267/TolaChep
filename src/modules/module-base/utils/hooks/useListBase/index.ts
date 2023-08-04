/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** types */
import type { ListHookStates, ListHookProps } from '@module-base/models';

const defaultState: ListHookStates = Object.freeze({
    disableEventKey: false, // có tắt phím mũi tên không, mặc định là không
    total: 0, // số phần tử
    itemSelect: 0, // vị trí đang select, mặc định là chưa chọn
    itemHover: 0, // ví trí đang hover, mặc định là chưa chọn
    idSelect: '', // id đang select, mặc định là chưa chọn
});

function useListBase(props: Partial<ListHookStates> = defaultState): ListHookProps {
    const [state, setState] = React.useState<ListHookStates>({
        ...defaultState,
        ...props,
    });

    const onSelect: ListHookProps['onSelect'] = React.useCallback(
        ({ itemSelect = 0, idSelect = '' }) =>
            setState((prev) => ({
                ...prev,
                itemSelect,
                itemHover: itemSelect,
                idSelect,
            })),
        []
    );

    const onKeyPress: ListHookProps['onKeyPress'] = React.useCallback((event) => {
        if (state.disableEventKey) {
            return;
        }

        if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            event.stopPropagation();

            setState((prev) => {
                /** xử lý với 3 case Enter, ArrowDown, ArrowUp
                 * Enter: select item đang hover
                 * ArrowDown: hover lên trên
                 * ArrowUp: hover xuống dưới
                 */
                if (event.key === 'Enter') {
                    if (prev.itemSelect !== prev.itemHover) {
                        return {
                            ...prev,
                            itemSelect: prev.itemHover,
                        };
                    }
                    return prev;
                }
                if (event.key === 'ArrowDown') {
                    return {
                        ...prev,
                        itemHover: prev.itemHover === prev.total ? 1 : prev.itemHover + 1,
                    };
                }
                if (event.key === 'ArrowUp') {
                    return {
                        ...prev,
                        itemHover: prev.itemHover > 1 ? prev.itemHover - 1 : prev.total,
                    };
                }
                return prev;
            });
        }
    }, []);

    const onRefresh: ListHookProps['onRefresh'] = React.useCallback(() => setState(() => ({ ...defaultState })), []);

    const onUpdate: ListHookProps['onUpdate'] = React.useCallback(
        (data = {}) =>
            setState((prev) => ({
                ...prev,
                ...data,
            })),
        []
    );

    return {
        ...state,
        onSelect,
        onKeyPress,
        onRefresh,
        onUpdate,
    };
}

export { useListBase };
