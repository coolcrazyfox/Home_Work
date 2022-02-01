import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, className,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?options.map((o, j) => {
        return <option className={s.option} key={o +'-'+j} value={o}>{o}</option>

    }):[]; // map options with key : string[]

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
         onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const finalSelectClassName = s.select + (className? ''+ className: ""
    )

    return (
        <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
