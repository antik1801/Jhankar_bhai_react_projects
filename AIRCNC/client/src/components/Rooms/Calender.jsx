import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calender = ({value,handleSelect}) => {
  return (
    <DateRange
      rangeColors={['#f43f5e']} 
      ranges={[value]}
      onChange={handleSelect}
      date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
      minDate={value.startDate}
      maxDate={value.endData}
    />
  )
}

export default Calender