import {useState} from 'react'
import Modal from '../../../_cloner/helpers/components/Modal'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import TextareaAndInput from '../../../_cloner/helpers/components/Modules/TextareaAndInput'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'

const CustomerCallRegistration = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)

  const SearchCustomer = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <>
      <div className='card container p-5 shadow-lg'>
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
      {/* Customer Information Begin */}
      <div className='row g-6 g-xl-9 mt-5'>
        <div className='col-sm-6 col-xl-6'>
          <Card5 image='/media/svg/brand-logos/aven.svg' title='اطلاعات مشتری'>
            <section className='container grid grid-cols-1'>
              <section className='flex flex-col'>
                <InputAndLabel title='نام و نام خانوادگی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='کدملی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='استان' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شهر' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تلفن ثابت' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تلفن همراه' />
              </section>
              <section className='flex flex-col'>
                <TextareaAndInput title='توضیحات' />
              </section>
              {/* <section className='flex flex-col'>
                <InputAndLabel title='نام و نام خانوادگی' />
              </section> */}
            </section>
          </Card5>
        </div>
        <div className='col-sm-6 col-xl-6'>
          <Card5 image='/media/svg/brand-logos/twitch.svg' title='اطلاعات خودرو'>
            Hello
          </Card5>
        </div>
      </div>
      {/* Customer Information End */}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        Hello world
      </Modal>
    </>
  )
}

export default CustomerCallRegistration
