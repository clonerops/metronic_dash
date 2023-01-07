import {useState} from 'react'
// import Dialog from '../../../_cloner/helpers/components/Dialog'
import Modal from '../../../_cloner/helpers/components/Modal'
import ActionButton from '../../../_cloner/helpers/components/Modules/ActionButton'
import InputAndLabel from '../../../_cloner/helpers/components/Modules/InputAndLabel'
import SelectAndLabel from '../../../_cloner/helpers/components/Modules/SelectAndLabel'
import TextareaAndInput from '../../../_cloner/helpers/components/Modules/TextareaAndInput'
import {TablesWidget} from '../../../_cloner/helpers/components/TablesWidget'
import {Card5} from '../../../_cloner/partials/content/cards/Card5'

const initialValue = {
  nationalcode: '',
}

const CustomerCallRegistration = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [loading, setLoading] = useState(false)

  // Handle Value From Inputs
  const [values, setValues] = useState(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const SearchCustomer = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault()
    console.log(values.nationalcode)
    // setShowModal(true)
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
        <form
          className='grid w-full grid-cols-2 md:grid-cols-3'
          onSubmit={(e) => SearchCustomer(e)}
        >
          <section className='flex flex-col'>
            <InputAndLabel
              name='nationalcode'
              title='کدملی'
              valueData={values.nationalcode}
              onChangeData={handleChange}
            />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره پذیرش' />
          </section>
          <section className='flex flex-col'>
            <InputAndLabel title='شماره شاسی' />
          </section>
          <section className='flex flex-col' />
          <section className='flex flex-col' />
          <section className='flex flex-col'>
            <ActionButton title='جستجو' />
          </section>
        </form>
        {/* Call Registration Action End */}
      </div>
      {/* Customer Information Begin */}
      <div className='row g-6 g-xl-2 mt-5'>
        <div className='col-sm-6 col-xl-4'>
          <Card5 image='/media/svg/brand-logos/aven.svg' title='اطلاعات مشتری'>
            <form className='container grid grid-cols-1'>
              <section className='flex flex-col'>
                <InputAndLabel title='نام' />
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
            </form>
          </Card5>
        </div>
        <div className='col-sm-6 col-xl-8'>
          <Card5 image='/media/svg/brand-logos/twitch.svg' title='اطلاعات خودرو'>
            <form className='container grid grid-cols-1 md:grid-cols-2'>
              <section className='flex flex-col justify-between'>
                <InputAndLabel title='شماره شاسی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شماره موتور' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شماره پذیرش' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='نوع خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='مدل خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='رنگ خودرو' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='کیلومتر' required />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='شرکت سازنده' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='تاریخ شروع گارانتی' />
              </section>
              <section className='flex flex-col'>
                <InputAndLabel title='بسته خدمت' />
              </section>
              <section className='flex flex-col' />
              <section className='flex flex-col'>
                <ActionButton title='جستجو' />
              </section>
            </form>
          </Card5>
        </div>
      </div>
      {/* Customer Information End */}
      {/* <Dialog>
        <TablesWidget title='خودروها' />
        <TablesWidget title='خودروها' />
      </Dialog> */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TablesWidget title='خودروها' />
      </Modal>
    </>
  )
}

export default CustomerCallRegistration
