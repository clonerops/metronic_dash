import {FC} from 'react'

interface IProps {
  title: string
}

const ActionButton: FC<IProps> = ({title}) => {
  return (
    // <button className='font-IRANSans w-[10rem] rounded-lg border border-indigo-300 bg-indigo-700 p-3 text-white'>
    //   {title}
    // </button>
    <section className='flex items-center p-2'>
      <label className='font-IRANSans text-md inline-block w-[150px] pl-2 text-left' />
      <input
        type='submit'
        value='جستجو'
        className='font-IRANSans text-white bg-indigo-500 float-left m-0 inline-block w-[20rem] rounded-md border border-gray-400 p-2 text-lg outline-none'
      />
    </section>
  )
}

export default ActionButton
