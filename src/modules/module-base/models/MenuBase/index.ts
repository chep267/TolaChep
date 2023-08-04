/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { ReactNode } from 'react';
import type { MenuProps, MenuRef } from 'antd';
import type { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import type { MessageDescriptor } from '@formatjs/intl/src/types';

type MenuAntdType = Required<MenuProps>['items'][number];
type MenuBaseRef = MenuRef;
type MenuBaseType =
    | {
          label: ReactNode;
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
          type?: 'group';
      }
    | {
          message: MessageDescriptor;
          messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
          type: 'intl';
      }
    | {
          type: 'divider';
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
      };
interface MenuBaseProps extends Omit<MenuProps, 'items'> {
    items: MenuBaseType[];
}

export type { MenuAntdType, MenuBaseProps, MenuBaseType, MenuBaseRef };
