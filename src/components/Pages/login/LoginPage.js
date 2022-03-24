import loginPage from 'components/commons/images/painting10.jpg';
import 'components/Pages/scss/login.scss';

export const LoginPage = () => {
  const inputList =[
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'email',
      type: 'text'
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
          <div className='input-list'>
          {
            inputList.map((input) => (
              <div className='input-item'>
                <input
                  type={input.type} 
                  name={input.name} 
                  id={input.name} 
                  required
                  autoComplete="off"
                />
                <label htmlFor={input.name}><span>{input.name}</span></label>
              </div>
            ))
          }
          </div>

          <div className='submit-wrap'>
            <input type="submit" value="LOGIN" onClick={(e) => e.preventDefault()}/>
          </div>
        </form>
      </div>
    </section>
  )
}