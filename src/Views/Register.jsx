import React from 'react';
import '../Components/Component.css'
import From from '../Components/Form'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const postData = async (data) => {
        // 分割代入
        const { firstName, lastName } = data;
         try {
             const response = await axios.post('https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud', {
                 firstName,
                 lastName,
             });
             console.log(response.data);
             navigate('/');
         } catch (error) {
             console.error('Error posting data:', error);
         }
    };

  return (
    <div className='register'>
        <h1 className='page-Title'>Register</h1>
        <div className="form">
            <form onSubmit={handleSubmit(postData)}>
                <From
                    label="名前"
                    type="text"
                    placeholder="名前を入力してね"
                    register={register('firstName', { required: '名前を入力してください' })}
                    errorMessage={errors.firstName && errors.firstName.message}
                />
                <From
                    label="メールアドレス"
                    type="email"
                    placeholder="メールアドレスを入力してね"
                    register={register('lastName', { required: '名字を入力してください' })}
                    errorMessage={errors.lastName && errors.lastName.message}
                />
                <From
                    label="パスワード"
                    type="password"
                    placeholder="パスワードを入力してね"
                    register={register('lastName', { required: '名字を入力してください' })}
                    errorMessage={errors.lastName && errors.lastName.message}
                />
                <From
                    label="パスワード(確認用)"
                    type="passward"
                    placeholder="確認用パスワードを入力してね"
                    register={register('lastName', { required: '名字を入力してください' })}
                    errorMessage={errors.lastName && errors.lastName.message}
                />
                <div className='float-r'>
                    <Button color="primary" type="submit">送信</Button>
                </div>
            </form>
         </div>
    </div>
  )
}

export default Register