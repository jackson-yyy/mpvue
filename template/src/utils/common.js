import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export {
    dayjs
}

export function isYesterday(time) {
    let newDay = dayjs().format('D')
    let oldDay = dayjs(time).format('D')
        //   let oldMonth = dayjs(time).format('M')
    let oldMonthDays = dayjs(time).daysInMonth()
    return newDay - oldDay == 1 || newDay == 1 && oldDay == oldMonthDays
}

export function randomNumber(n) {
    let rnd = "";
    for (let i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}

export function priceTransfer(number) {
    return (number / 100).toFixed(2)
}

export function scrollToBottom(className) {

    wx
        .createSelectorQuery()
        .select(className)
        .boundingClientRect(function(rect) {
            if (!rect) {
                return
            }
            wx.pageScrollTo({
                scrollTop: rect.height,
                // duration: 300
            })
        })
        .exec()
}

