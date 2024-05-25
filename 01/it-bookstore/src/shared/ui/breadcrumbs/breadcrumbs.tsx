import { FC } from "react";
import {Params, useMatches} from 'react-router-dom'
import clsx from 'clsx'
import Home from 'shared/assets/icons/home.svg'

import './breadcrumbs.scss'

export interface IMatches {
    id: string
    pathname: string
    params: Params<string>
    data: unknown
    handle: {
        crumb: (param?: IMatches) => React.ReactNode
    }
}

interface IBreadcrumbs {
    className?: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = (props) => {
    const { className } = props

    // @ts-ignore
    const matches: IMatches[] = useMatches()

    const crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) =>
            typeof match.handle.crumb === 'function'
                ? match.handle.crumb(match)
                : match.handle.crumb
        )

    return (
        <div className={clsx('breadcrumbs', className)}>
            <Home className="breadcrumbs__img" />
            <ul className="breadcrumbs__list">
                {crumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumbs__item">
                        {crumb}
                    </li>
                ))}
            </ul>
        </div>
    )
}