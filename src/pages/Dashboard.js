import React from 'react';
import Header from '../sectionBlock/Header';
import {InvestorCard} from '../component/cards';
import Navbar from '../sectionBlock/Navigation/Navbar';
// import {useForm} from "react-hook-form";
// import axios from "axios";
// import {toast} from "react-toastify";

const Dashboard = () => {
  // const {register, handleSubmit, formState: {errors}} = useForm();
  // const useRegisterNewUser = async (dataInputByUser) => {
  //   const additionalValues = {PERSONA_I_CODIGO: 1}
  //   Object.assign(dataInputByUser, additionalValues);

  //     await axios
  //       .post('https://mgm.solocursos.top/public/api/v1/register', dataInputByUser)
  //       .then((res) =>
  //       {
  //         toast('Usuario ' + res.data.user.CREDENCIAL + ' creado correctamente.')
  //         localStorage.setItem('token', res.data.token);
  //         console.log(res)
  //       }
  //       )


  // };
  // const handleError = (errors) => {}

  // const registerOptions = {
  //   CREDENCIAL: { required: "Nombre de usuario es requerido" },
  //   password: {
  //     required: "Se requiere una clave para su usuario",
  //     minLength: {
  //       value: 6,
  //       message: "La clave de tener al menos 6 caracteres"
  //     }
  //   }
  // }

  return (
    <>
      <Header pageTitle={`Dash board`} pageDesc ={`General indicators`} displaySearch={`show`} />
      <Navbar />
      <main className='main dashboard'>
        <div className="cards grid-container">   
          <InvestorCard key={1} color={`primary-color`}  title={`Investors`} text={`271`} miniText={`+ 0,7% `} miniDisplay={`show`}/>
          <InvestorCard key={2} color={`secondary-color`}  title={`Projects`} text={`69`} miniText={`- 1,7% `} miniDisplay={`show`} rotateArrowIcon={`down`}/>
          <InvestorCard key={3} color={`tartiary-color`}  title={`New investors`} text={`5`} miniText={`+ 1% `} miniDisplay={`show`}/>
        </div>

        {/* <div className={"Development-Purposes"}>
          <h1>Only just for Development purposes</h1>
          <h2>Login</h2>
          <h3>Create User</h3>
          <form onSubmit={handleSubmit(useRegisterNewUser, handleError)}>
            <div>
              <label>CREDENCIAL</label>
              <input name={"CREDENCIAL"} autoComplete={"nombre-de-usuario"} {...register('CREDENCIAL', registerOptions.CREDENCIAL)} />
              <small className={"text-danger"}>
                {errors?.CREDENCIAL && errors.CREDENCIAL.message}
              </small>
            </div>
            <div>
              <label>CONTRASEÑA</label>
              <input type="password" name={"password"} autoComplete={"current-password"} {...register('password', registerOptions.password)} />
              <small className={"text-danger"}>
                {errors?.password && errors.password.message}
              </small>
            </div>
            <button>Create User</button>
          </form>
        </div> */}

      </main>
    </>
  )
}

export default Dashboard;