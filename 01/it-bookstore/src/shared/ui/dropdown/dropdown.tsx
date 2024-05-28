import {FC} from 'react'
import clsx from 'clsx'

import './dropdown.scss'

interface IDropdown {
    readonly labelElement: JSX.Element
    readonly isOpen?: boolean
    readonly content?: JSX.Element | JSX.Element[]
    readonly isArrow?: boolean
    readonly className?: string
}

export const Dropdown: FC<IDropdown> = (props) => {
    const { labelElement, isOpen, content, isArrow = false, className} = props

    let isOpenDropdown = isOpen ? 'dropdown_open' : 'dropdown_close'
    if(isOpen === undefined) {
        isOpenDropdown = 'dropdown_opening-state_hover'
    }

    return (
        <div
            className={clsx(
                'dropdown',
                isArrow && 'dropdown_with-arrow',
                isOpenDropdown,
                className
            )}
        >
            <div className='dropdown__label'>{labelElement}</div>
            <div className='dropdown__wrapper-content'>
                <div className='dropdown__content'>{content}</div>
            </div>
        </div>
    )
}