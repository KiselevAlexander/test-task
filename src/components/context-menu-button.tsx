import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import './context-menu-button.scss';

type TContextMenuButtonProps = {
    onClick: MouseEventHandler,
}
export const ContextMenuButton = React.forwardRef<HTMLButtonElement, TContextMenuButtonProps>((
    { onClick },
    ref,
) => (
    <button
        ref={ref}
        className='context-menu-button'
        onClick={onClick}
    >
        <FontAwesomeIcon icon={faEllipsisVertical}/>
    </button>
))
