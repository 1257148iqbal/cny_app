import moment from 'moment';

/*=============================================================
|                          Date                               |
=============================================================*/
/**
 * Get Todate Date
 * @param format
 * @returns {string}
 */
export const getTodayDate = (format = 'YYYY-MM-DD') => {
  return moment().format(format);
};

/**
 * Get Tomorrow Date
 * @returns {string}
 */
export const getTomorrowDate = () => {
  return moment()
    .add(1, 'day')
    .format('YYYY-MM-DD');
};

/**
 * Get New Date with additional days
 * @param no. of days
 * @param format
 * @returns {string}
 */
export const getNewDate = (currdate, noOfDays, format = 'YYYY-MM-DD') => {
  return moment(currdate)
    .add(noOfDays, 'days')
    .format(format);
};

/**
 * Get New Date Before
 * @param no. of days
 * @param format
 * @returns {string}
 */
export const getNewDateBefore = (currdate, noOfDays, format = 'YYYY-MM-DD HH:mm:ss') => {
  const _date = moment(currdate)
    .subtract(noOfDays, 'days')
    .format(format);
  return _date;
};

/**
 * Is Today
 * @param date
 * @returns {bool}
 */
export const isToday = date => {
  return moment().isSame(date, 'day');
};

/**
 * Is Same Date
 * @param dateA
 * @param dateB
 * @returns {bool}
 */
export const isDatesSame = (dateA, dateB) => {
  return moment(dateA).isSame(dateB, 'day');
};

/**
 * Is Same After
 * @param date
 * @returns {bool}
 */
export const isDateAfter = date => {
  const todayDate = getTodayDate('dddd, MMMM DD YYYY, hh:mm a');
  return moment(todayDate).isAfter(date);
};

/**
 * Get Date With Desire Format
 * @param date
 * @param format
 * @returns {string}
 */
export const getDateinDesiredFormat = (date, format) => {
  return moment(date).format(format);
};

/**
 * Get Date Elements
 * @param date
 * @returns {Object}
 */
export const getDateElements = date => {
  const dateString = moment(date).format('dddd, MMMM DD YYYY, hh:mm A');
  const dateSections = dateString.split(',');
  const day = dateSections[0];
  const time = dateSections[2];
  const datePart = dateSections[1].trim().split(' ');
  return {
    day,
    time,
    date: {
      dateString: dateSections[1],
      month: datePart[0],
      date: datePart[1],
      year: datePart[2]
    }
  };
};

/**
 * Make JS Date Object
 * @param date
 * @returns {Object}
 */
export const makeJSDateObject = date => {
  if (date) {
    return new Date(date.getTimeFromDate());
  }
  return date;
};

/**
 * Get Day
 * @param date
 * @returns {Object}
 */
export const getDay = date => {
  return moment(date).format('DD');
};

/**
 * Get Formatted Date
 * @param date
 * @param format
 * @returns {string}
 */
export const getFormattedDate = (date, format = 'DD-MM-YYYY') => {
  if (moment(date, 'YYYY-MM-DD').isValid()) {
    return moment(date).format(format);
  }
  return '';
};

/**
 * Check Is dateTime of Tomorrow
 * @param inputDateTime
 * @returns {boolean}
 */
export const isTomorrow = inputDateTime => {
  const tomorrow = moment()
    .add(1, 'days')
    .format('YYYY-MM-DD');

  return moment(inputDateTime).isSame(tomorrow, 'day');
};

/**
 * Check Is dateTime of Yesterday
 * @param inputDateTime
 * @returns {boolean}
 */
export const isYesterday = inputDateTime => {
  const yesterday = moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD');

  return moment(inputDateTime).isSame(yesterday, 'day');
};

/**
 * Get Custom Date Time
 * @param value
 * @param unit
 * @param format
 * @returns {string}
 */
export const getCustomDateTime = (value = 0, unit = 'days', format = 'YYYY-MM-DD') => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment()
      .add(value, unit)
      .format(format);
  }
};

/**
 * Get Date Text
 * @param date
 * @returns {string}
 */
export const getDateText = date => {
  if (isToday(date)) {
    return 'Today';
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    return date;
  }
};

export const formattedDateTime = (dateTime, format = 'DD-MMM-yyyy HH:mm:ss') => {
  return moment(dateTime).format(format);
};

export const formattedDate = (date, format = 'DD-MMM-yyyy') => {
  return moment(date).format(format);
};

export const serverDate = date => {
  return moment(date).format('yyyy-MM-DD');
};

export const serverDateTime = date => {
  return moment(date).format('yyyy-MM-DD HH:mm:ss');
};

export const isSameDate = (oldDate, newDate) => {
  const _oldDate = moment(oldDate, 'yyyy-MM-DD');
  const _newDate = moment(newDate, 'yyyy-MM-DD');
  return _oldDate.isSame(_newDate);
};

export const fullMonthYear = time => {
  return moment(time).format('MMMM yyyy');
};
/*=============================================================
|                          Time                               |
=============================================================*/

export const getFloorTime = time => {
  return moment(time, 'HH:mm:ss')
    .startOf('hour')
    .format('HH:mm:ss');
};

export const getTimeBefore = (time, minutes) => {
  return moment(time, 'HH:mm:ss')
    .subtract(minutes, 'minutes')
    .format('HH:mm:ss');
};

export const timeFromNow = date => {
  const timestamp = moment(date).format('X');
  const newDate = moment.unix(timestamp);
  return moment(newDate).fromNow();
};

export const getTimeFromDate = (date, format = 'HH:mm:ss') => {
  return moment(date).format(format);
};

export const getTime = (time, format = 'HH:mm:ss') => {
  return moment(new Date(`0000-01-01 ${time}`), 'HH:mm:ss').format(format);
};

export const getTimeDiffString = date => {
  const postDate = moment(date, 'ddd MMM DD YYYY kk:mm:ss Z');
  const currentDate = moment(new Date());
  const duration = moment.duration(currentDate.diff(postDate));
  const minutes = duration.asMinutes() | 0;
  const hours = duration.asHours() | 0;

  switch (true) {
    case minutes === 0:
      return 'Just now';
    case minutes < 60:
      return `${minutes} min`;
    case hours < 24:
      return `${hours} hours`;
    default:
      return postDate.format('DD MMM, YYYY');
  }
};
export const getTimeDifference = (fromDateTime, toDateTime, dutarionType: 'asHours' | 'asMinutes' | 'asSeconds') => {
  const _from = moment(new Date(fromDateTime));
  const _to = moment(new Date(toDateTime));
  const duration = moment.duration(_from.diff(_to));
  switch (dutarionType) {
    case 'asHours':
      return duration.asHours();
    case 'asMinutes':
      return duration.asMinutes();
    case 'asSeconds':
      return duration.asSeconds();

    default:
      return duration.asSeconds();
  }
};

export const time24 = time => {
  return time == null ? '' : moment(time).format('HH:mm:ss');
};

export const datesFromMonth = (date, format = 'yyyy-MM-DD') => {
  const startDate = moment(date)
    .startOf('month')
    .format(format);
  const endDate = moment(date)
    .endOf('month')
    .format(format);
  return { startDate, endDate };
};
