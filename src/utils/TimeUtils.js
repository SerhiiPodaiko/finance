export default class TimeUtils {
    static now() {
        return TimeUtils.format(new Date());
    }

    static weekAgo() {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        return TimeUtils.format(date);
    }

    static monthAgo() {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        return TimeUtils.format(date);
    }

    static yearAgo() {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 1);
        return TimeUtils.format(date);
    }

    static format(date) {
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear().toString();
        day = day.length !== 2 ? '0' + day : day;
        month = month.length !== 2 ? '0' + month : month;
        return year + month + day;
    }
}
