import dayjs from 'dayjs'


const timeFormat = (timeStamp, format) => {
    if (!timeStamp) {
        return ''
    }
    return dayjs(timeStamp).format(format)
}

export {
    timeFormat
}