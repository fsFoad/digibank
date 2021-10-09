import * as jmoment from 'jalali-moment';

export class DateUtil {
    constructor() {}

    static persianDateNow(separator?: string) {
        const now = new Date();
        const m = jmoment(now);
        m.locale('fa');
        if (separator) {
            return m.format('jYYYY' + separator + 'jMM' + separator + 'jDD');
        } else {
            return m.format('jYYYY/jMM/jDD').replace(/\//g, '');
        }
    }
}