import { FC } from "react";
import clsx from "clsx";

import './title.scss'

interface ITitle {
    readonly children: string
    readonly className?: string
}

export const Title: FC<ITitle> = (props) => {
    const { children, className} = props;

    return (
        <div className={clsx('title', className)}>
            <h2 className="title__content">{children}</h2>
            <div className="title__line" />
        </div>
    )
}