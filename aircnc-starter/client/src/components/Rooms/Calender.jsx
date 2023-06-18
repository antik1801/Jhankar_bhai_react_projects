import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = ({value, handleSelect}) => {
  return (
    <DateRange
      rangeColors={['#f43f5e']}
      ranges={[value]}
      onChange={handleSelect}
      date={new Date()}
      direction='vertical'
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endDate}
    />
  )
}

export default DatePicker
