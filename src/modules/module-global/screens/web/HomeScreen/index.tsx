/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout } from 'antd';

/** components */
import { TolaSider, TolaHeader, TolaContent } from './components';

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
