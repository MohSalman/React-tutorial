import { useState } from 'react'
import Button from './../../Components/Forms/Buttons/Button'
import Input from './../../Components/Forms/Input'

function Home(props) {

  const [email, setEmail] = useState('hello')
  const hello = () => {
    alert("hello")
  }
  const bye = () => {
    alert("bye")
  }

  const changeEmail = (event)=>{
    console.log("input value", event)
    setEmail(event.target.value)
  }
  return (
    <div className="container mb-3">
      <Button btnClickEvent={hello} btnText="hello" btnclassName="button-primary" />
      <Button btnClickEvent={bye} btnText="bye" btnclassName="button-secondary" />

      <div className="mb-3">
        <label>Name</label>
        <Input 
          inputType="text"
          inputclassName="text-class"
          inputPlaceholder="name"
          // inputValue="hello"
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <Input 
          inputType="email"
          inputclassName="email-class"
          inputPlaceholder="Email"
          inputValue={email}
          inputChangeEvent={changeEmail}
        />
      </div>
      <div className="mb-3">
        <label>phone</label>
        <Input 
          inputType="phone"
          inputclassName="phone-class"
          inputPlaceholder="phone"
          // inputValue="hello"
          
        />
      </div>
    </div>
  );
}

export default Home;
