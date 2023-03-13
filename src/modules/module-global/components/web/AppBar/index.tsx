/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** components */
import AppBarItem from './AppBarItem';
import { AppBar, ListApp } from './styles';

/** utils */
import { useGlobalUI } from '@module-global/utils';

const AppIds = [
    {
        key: '1',
        name: 'New Feed',
        path: '/feed',
    },
    {
        key: '2',
        name: 'Messenger',
        path: '/messenger',
    },
    {
        key: '3',
        name: 'Not Found',
        path: '/404',
    },
];

function AppBarBase(props: any) {
    const { className, appIds = AppIds } = props;
    const { appBar } = useGlobalUI();
    const { visible } = appBar;

    return (
        <AppBar className={className} visibleAppBar={visible}>
            <ListApp>
                {appIds.map((app) => (
                    <AppBarItem key={app.key} name={app.key} title={app.name} path={app.path} />
                ))}
            </ListApp>
        </AppBar>
    );
}

export default AppBarBase;
