/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Layout } from 'antd';

import TolaSider from './Sider';
import TolaHeader from './Header';
import TolaContent from './Content';

export default function MainScreen(props: { element: React.ReactElement }) {
    const { element } = props;
    return (
        <Layout>
            <TolaHeader />
            <Layout hasSider>
                <TolaSider />
                <TolaContent element={element} />
            </Layout>
        </Layout>
    );
}
