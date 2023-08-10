/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';

/** components */
import { MessengerLeft } from '../Layout';
import ListBase, { ListItemBase } from '@module-base/components/web/ListBase';

/** constants */
import { SCREEN } from '@module-global/constants';

const dataTest = Array.from({ length: 20 }, (_, i) => `${i}`);
function ThreadList({ $colorBg }: { $colorBg: string }) {
    const navigate = useNavigate();
    const [isSearching, setIsSearching] = React.useState(false);
    const [data, setData] = React.useState(dataTest);

    const onSearch = React.useCallback((searchKey: string) => {
        setData(() => (searchKey ? dataTest.filter((value) => value.includes(searchKey)) : dataTest));
        setIsSearching(false);
    }, []);

    const onSelect = React.useCallback((threadId: string) => {
        navigate(`${SCREEN.MESSENGER}/${threadId}`);
    }, []);

    const renderItem = React.useCallback(
        (item: string) => <ListItemBase nameProps={{ primaryText: `Tola Chep ${item}`, secondText: 'tola' }} />,
        []
    );

    return (
        <MessengerLeft $colorBg={$colorBg}>
            <ListBase
                titleProps={{
                    title: <Typography.Title>Chat</Typography.Title>,
                }}
                searchProps={{ onLoading: setIsSearching, onChangeValue: onSearch }}
                contentProps={{
                    data,
                    loading: isSearching,
                    onSelect,
                    renderItem,
                }}
            />
        </MessengerLeft>
    );
}

export default ThreadList;
