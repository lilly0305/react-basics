import loginPage from 'components/commons/images/painting10.jpg';
import 'components/commons/scss/login.scss';

export const LoginPage = () => {
  const inputList =[
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'email',
      type: 'email'
    },
    {
      name: 'password',
      type: 'password'
    }
  ]

  return(
    <section className="login-wrap">
      <h1 className='subpage-title'>Log<strong>i</strong>n</h1>

      <div className='webWidth'>
        <figure>
          <img src={loginPage} alt="login"/>
        </figure>

        <form>
          {
            inputList.map((input) => (
              <div className='input-item'>
                <input type={input.type} name={input.name} id={input.name} required />
                <label htmlFor={input.name}>{input.name}</label>
              </div>
            ))
          }
          
          <input type="submit" value="LOGIN"/>
        </form>
      </div>
    </section>
  )
}