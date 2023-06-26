/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { ReactNode, useRef } from 'react';

/** components */
// import { Menu } from '@mui/material';

/** utils */
import { emptyFunction, emptyObject } from '@module-base/constants';

interface ButtonProps {
    className?: string;
    style?: object;
    menuId?: string;
    menu?: any;
    children?: ReactNode;
    onCloseMenu?(event: any): void;
}

function MenuList(props: ButtonProps) {
    const { className = '', style = emptyObject, menuId = '', children, onCloseMenu = emptyFunction, menu } = props;

    const MenuProps: any = useRef({
        PaperProps: {
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,

                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
        },
        transformOrigin: { horizontal: 'right', vertical: 'top' },
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
    });

    return (
        // <Menu
        //     id={menuId}
        //     className={className}
        //     style={style}
        //     anchorEl={menu}
        //     open={Boolean(menu)}
        //     onClose={onCloseMenu}
        //     PaperProps={MenuProps.current.PaperProps}
        //     transformOrigin={MenuProps.current.transformOrigin}
        //     anchorOrigin={MenuProps.current.anchorOrigin}>
        //     {children}
        // </Menu>
        null
    );
}

export default MenuList;
