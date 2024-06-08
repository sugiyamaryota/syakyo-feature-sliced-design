import { FC } from 'react'
import clsx from 'clsx'

import './loaderImage.scss'

interface ILoaderImage {
    width?: number
    height?: number
    className?: string
}

export const LoaderImage: FC<ILoaderImage> = (props) => {
    const {width = 250, height = 250, className} = props

    return (
        <div
            style={{width, height}}
            className={clsx('loader-image', className)}
        >
            <div className="loader-image__placeholder" />
        </div>
    )
}