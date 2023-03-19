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
                d="M8.954 3.156c.16-.783 1.158-1.05 1.688-.452l3.466 3.912c.21.238.527.357.845.319l5.238-.628c.802-.096 1.361.76.947 1.447l-2.708 4.493a.955.955 0 0 0-.05.896l2.191 4.733c.336.724-.316 1.52-1.103 1.346l-5.14-1.135a.985.985 0 0 0-.875.235l-3.884 3.553c-.594.543-1.556.18-1.628-.615l-.468-5.195a.955.955 0 0 0-.491-.75L2.39 12.777c-.703-.388-.646-1.408.096-1.725l4.85-2.076a.973.973 0 0 0 .573-.699l1.045-5.12Z"
                fill="#595959"
                stroke="#595959"
                strokeWidth={1.5}
            />
        </svg>
    );
}
