import {FC} from 'react'
import clsx from 'clsx'

import './iconButton.scss'

interface IIconButton {
    readonly Icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined
        }
    >
    readonly isCounterVisible?: boolean
    readonly counterTheme?: 'grey' | 'red'
    readonly counterValue?: number
    readonly onClick?: () => void
    readonly className?: string
}

export const IconButton: FC<IIconButton> = (props) => {
    const {
        Icon,
        isCounterVisible = true,
        counterTheme = 'grey',
        counterValue = 0,
        onClick,
        className
    }  = props

    return (
        <button
            type='button'
            className={clsx('icon-button', className)}
            onClick={onClick}>
            {isCounterVisible && (
                <div
                    className={`icon-button__counter icon-button__counter_theme_${counterTheme}`}
                >
                    {counterValue}
                </div>
            )}
            <Icon className='icon-button__icon' />
        </button>
    )
}