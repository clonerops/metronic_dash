import ActionButton from '../../helpers/components/Modules/ActionButton'
import SelectAndLabel from '../../helpers/components/Modules/SelectAndLabel'
import TextareaAndInput from '../../helpers/components/Modules/TextareaAndInput'
import {Card5} from '../content/cards/Card5'

const Guidance = () => {
  return (
    <Card5 title='ثبت اطلاعات راهنمایی' image='/media/svg/brand-logos/aven.svg'>
      <form>
        <section className='grid grid-cols-1 md:grid-cols-1'>
          <SelectAndLabel title='نتیجه تماس خروجی' width='w-[32rem]' />
        </section>
        <section className='grid grid-cols-2 md:grid-cols-2'>
          <SelectAndLabel title='عنوان اقدام' />
          <SelectAndLabel title='نتیجه اقدام' width='w-[24rem]' />
        </section>
        <section className='grid grid-cols-1 md:grid-cols-1'>
          <TextareaAndInput title='شرح اقدام' />
        </section>
        <section className='flex flex-end'>
          <ActionButton title='ثبت اطلاعات' />
        </section>
      </form>
    </Card5>
  )
}

export default Guidance
