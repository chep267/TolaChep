/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

export default function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props} viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.29 2.147a.795.795 0 0 1 .92 0l9 6.512c.183.132.29.335.29.55v10.233c0 .678-.29 1.329-.805 1.809-.516.48-1.216.749-1.945.749H15.5V12c0-.385-.336-.698-.75-.698h-6c-.414 0-.75.313-.75.698v10H4.75c-.73 0-1.429-.27-1.945-.75A2.47 2.47 0 0 1 2 19.443V9.209c0-.215.107-.418.29-.55l9-6.512Z"
                fill="#595959"
            />
        </svg>
    );
}
