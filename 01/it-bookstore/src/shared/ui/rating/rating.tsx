import { FC } from "react";
import {Rating as ReactiveRating, Star} from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

interface IRating {
    readonly value: number
    readonly maxWidth?: number
    readonly className?: string
}

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#f59e0b',
    inactiveFillColor: '#ffedd5'
}

export const Rating: FC<IRating> = (props) => {
    const {value, maxWidth = 110, className} = props

    return (
        <ReactiveRating
            style={{maxWidth}}
            value={value}
            itemStyles={ratingStyles}
            readOnly
            className={className}
        />
    )
}