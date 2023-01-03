import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'

const CustomerCallRegistration = () => {


  const SearchCustomer = (e: React.SyntheticEvent<EventTarget>):void => {
    e.preventDefault()
  }

  return (
    <>
      <div className='card container p-5 shadow-md'>
        {/* Customer Call Number */}
        <section className='flex items-center justify-start'>
          <label className='px-2'>شماره تماس گیرنده:</label>
          <h4 className='px-2 font-VazirBold'>09197563415</h4>
        </section>

        {/* Call Registration Action Begin */}
        <section>
          <SelectAndLabel title='موضوع تماس' />
        </section>
        <form className='grid w-full grid-cols-2' onSubmit={(e) => SearchCustomer(e)}>
          <section className='flex flex-col'>
            <InputAndLabel title='کدملی' />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره پذیرش' />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره شاسی' />
          </section>
          <section className='flex flex-col'>
            <ActionButton title='جستجو' />
          </section>
        </form>
        {/* Call Registration Action End */}
      </div>
    </>
  )
}

export default CustomerCallRegistration
