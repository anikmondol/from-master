import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  

  const handleSingUpSubmit = data => {
    console.log('sign up data', data);
}
  const handUpdateProfile = data => {
    console.log('update profile', data);
}

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sing Up'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>please sing up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Sing Up'} handleSubmit={handUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
