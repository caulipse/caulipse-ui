import React, {useState} from "react";
import './BoxContainer.scss';


const BoxContainer = (): JSX.Element => {
    type MyFormProps = {
        onSubmit: (form: {name: string; description: string}) => void
      };

      // onSubmit을 비구조할당하여 받고 type은 MyFormProps
    const [form, setForm] = useState({
        ID: '',
        password: ''
        })

    const {ID, password} = form;


    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setForm({
          ...form,
         [name]: value,
        })
      }

    return(
        <div>
            <div className="portal">
                <form>
                    <input type="email" className="portal-ID" value={ID} onChange={onChange} placeholder="포탈 아이디"/>
                    <input type="password" className="portal-PD" value={password} onChange={onChange} placeholder="비밀번호"/>
                </form>
                <button type="button" id="login-btn">로그인</button>

            </div>
        </div>
    );
};

export default BoxContainer;
