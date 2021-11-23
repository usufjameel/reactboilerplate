import moment from "moment";

let pluralize = require('pluralize')

class DateHelper {
    static getDisplayDate(date: any) {
        return moment(new Date(date)).format('YYYY-MM-DD')
    }

    static getServerDate(date: any) {
        return moment(new Date(date)).format('YYYY/MM/DD')
    }

    static getDisplayDate2(date: any) {
        return moment(new Date(date)).utcOffset(+660).format('DD MMM YYYY - hh:mm a')
    }

    static getDisplayDate3(date: any) {
        return moment(new Date(date)).utcOffset(+660).format('DD MMM YYYY')
    }

    static getDate(date: any) {
        return moment(date, 'YYYY-MM-DD').toDate()
    }

    static addDays(date: any, days: number) {
        return moment(date).add(days, 'days').toDate()
    }

    static getDuration(startDate: any, endDate: any) {
        let start = moment(new Date(startDate))
        let end = moment(new Date(endDate))
        let days = end.diff(start, 'day')

        return days + " " + pluralize("day", days)
    }

    static getDurationFromNow(date: any) {
        let start = moment(new Date(date))
        let end = moment(new Date())
        let years = end.diff(start, 'year')
        return years + " " + pluralize("year", years)
    }

}

export default DateHelper
