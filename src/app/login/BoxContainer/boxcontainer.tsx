import React, {useState} from "react";

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
                    <input name="portal-ID" value={ID} onChange={onChange} />
                    <input name="portal-PD" value={password} onChange={onChange} />
                    <button name="login-btn"/>
                </form>
            </div>
        </div>
    );
};

export default boxcontainer;