import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from 'shared/ui/button'
import { Title } from 'shared/ui/title'

import './productCategory.scss'

interface IProductCategory {
    readonly title: string
    readonly children: JSX.Element
    readonly className?: string
}

export const ProductСategory: FC<IProductCategory> = (props) => {
    const { title, children, className } = props

    const navigate = useNavigate()

    const goToCategoryPage = (): void => {
        navigate(`/books/${title}`)
    }

    return (
        <div className={clsx('product-category _ container', className)}>
            <div className='product-category__header'>
                <Title>{title}</Title>
                <Button theme='transparent-grey' onClick={goToCategoryPage}>
                    SEE MORE
                </Button>
            </div>
            {children}
        </div>
    )
}