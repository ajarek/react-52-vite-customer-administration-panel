import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

export const Form = (props) => {
 const { onSubmit, label, Name, Profession, Email, Phone, Address, Picture } = props
 
  const schema = yup.object().shape({
    name:yup.string().required() ,
    profession:yup.string().required() ,
    email:yup.string().email().required(),
    phone:yup.number().integer().min(9).required(),
    address:yup.string().required() ,
    picture:yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'form'}
    >
        <input
          type='text'
          placeholder='👤Name...'
           defaultValue={Name}
          {...register('name')}
          
        />     
      <p>{errors.name?.message}</p> 

      <input
          type='text'
          placeholder='👩🏻‍⚕️ Profession...'
          {...register('profession')}
           defaultValue={Profession}
        />
      <p>{errors.profession?.message}</p> 

      <input
        type='text'
        placeholder='✉️ Email...'
        {...register('email')}
         defaultValue={Email}
      />
      <p>{errors.email?.message}</p>

      <input
        type='phone'
        placeholder='📞 Phone...'
        {...register('phone')}
         defaultValue={Phone}
      />
      <p>{errors.phone?.message}</p>

      <input
          type='text'
          placeholder='🚩 Address...'
          {...register('address')}
           defaultValue={Address}
        />     
      <p>{errors.address?.message}</p> 

      <input
          type='text'
          placeholder='📷 htpps://Picture.png'
          {...register('picture')}
           defaultValue={Picture}
        /> 
      <p>{errors.picture?.message}</p> 

      <input
        type='submit'
         value={label}
      />
    </form>
  )
}
export default Form