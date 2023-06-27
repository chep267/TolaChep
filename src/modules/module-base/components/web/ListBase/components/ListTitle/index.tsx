/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

// styles
import styles from '@snw-components/web-antd-custom/ListBase/styles/index.local.less';

// utils
import type { ListTitleProps } from '@snw-components/web-antd-custom/ListBase/utils/type';

const ListTitle = React.memo(
    (props: ListTitleProps) => {
        const { title } = props;

        return !title
            ? null
            : ((typeof title === 'string' || typeof title === 'number' ? (
                  <div className={classnames(styles['list-base-title'], 'list-base-title')}>
                      <span>{title}</span>
                  </div>
              ) : (
                  title
              )) as React.ReactElement);
    },
    (prev, next) => prev.title === next.title
);

ListTitle.displayName = 'ListTitle';
export default ListTitle;
