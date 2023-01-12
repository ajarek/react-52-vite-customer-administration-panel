import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

export const Form = ({ onSubmit, label }) => {
  const schema = yup.object().shape({
    name:yup.string().required() ,
    email:yup.string().email().required(),
    phone:yup.number().integer().min(9)
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
          {...register('name')}
        />
     
      <p>{errors.name?.message}</p> 
      <input
        type='text'
        placeholder='✉️Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <input
        type='phone'
        placeholder='📞Phone...'
        {...register('phone')}
      />
      <p>{errors.phone?.message}</p>
      <input
        type='submit'
        value={label}
      />
    </form>
  )
}
export default Form