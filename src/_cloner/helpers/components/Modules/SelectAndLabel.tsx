import {FC} from 'react'

interface IProps {
  title: string
}

const SelectAndLabel: FC<IProps> = ({title}) => {
  return (
    <section className='flex items-center p-1 py-2'>
      <label className='inline-block w-[150px] pl-2 text-left font-IRANSans text-md'>{title}:</label>
      <select
        // name='status'
        // data-control='select2'
        // data-hide-search='true'
        className='form-select form-select-sm form-select-white w-[14rem]'
        defaultValue='Active'
      >
        <option value='Active'>Active</option>
        <option value='Approved'>In Progress</option>
        <option value='Declined'>To Do</option>
        <option value='In Progress'>Completed</option>
      </select>{' '}
    </section>
  )
}

export default SelectAndLabel
