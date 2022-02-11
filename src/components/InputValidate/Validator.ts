import { string } from 'prop-types';

export const maxLength = (max: number, value: string) => {
    return value && value.length > max
}
export const minLength = (min: number, value: string) => {
    return value.length < min
}


export const isNumber = (value: string) => {
    // return Number(value) !== 'n'
}

export const validate = (value: any, min: number, max: number, name: string ,type?:string) => {
    if (!value) {
        return 'Required'
    }
    // if ((name==="phone" || type ==="phone") && !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(value) ) {
    // if ((name==="phone" || type ==="phone") && !/^\d[\d\(\)\ -]{4,14}\d$/i.test(value) ) {
    if ((name==="phone" || type ==="phone") && !/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.test(value) ) {
        return 'Invalid number'
    }
    if (!isFinite(value) && (type && type ==='number')) {
         return 'ok, try to enter the number'
    }
    if ((name==="email" || type ==="email") && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ) {
        return 'Invalid email address'
    }

    if (minLength(min, value)) {
        return `Must be ${min} characters or more`
    }
    if(maxLength(max, value)){
        return `Must be ${max} characters or less`
    }

    if(name === 'date') {
        let nowDate = new Date();
        let yearNow = Number((nowDate.getFullYear()).toString().slice(0, 2));
        const monthCard = Number(value.slice(0, 2))
        const yearCard = Number(value.slice(2, 4))
        if(monthCard>12){return 'month can be !>12'}
        if (monthCard <= 12 && yearCard >= yearNow) {
            return ''
        } else {
            return 'maybe your card is expired'
        }
    }
    return ''
}
