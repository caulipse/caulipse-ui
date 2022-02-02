import React, {useState} from "react";
import './boxcontainer.scss';

const boxcontainer = (): JSX.Element => {
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
                    <input className="portal-ID" value={ID} onChange={onChange} />
                    <input className="portal-PD" value={password} onChange={onChange} />
                    <button
                     type="button"
                     className="login-btn">로그인</button>
                </form>
            </div>
        </div>
    );
};

export default boxcontainer;