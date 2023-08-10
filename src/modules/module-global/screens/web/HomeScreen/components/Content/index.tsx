/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout } from 'antd';

/** components */
import { ContentLayout } from '../Layout';

export default function TolaContent(props: { element: React.ReactElement }) {
    const { element } = props;

    return (
        <Layout>
            <ContentLayout>{element}</ContentLayout>
        </Layout>
    );
}
