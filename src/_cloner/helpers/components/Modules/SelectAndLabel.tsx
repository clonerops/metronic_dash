import {FC} from 'react'

interface IProps {
  title: string
}

const SelectAndLabel: FC<IProps> = ({title}) => {
  return (
    <section className='flex items-center p-5'>
      <label className='font-IRANSans inline-block pl-2 text-left text-md'>{title}:</label>
      <select
        // name='status'
        // data-control='select2'
        // data-hide-search='true'
        className='form-select form-select-sm form-select-white w-150px'
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
