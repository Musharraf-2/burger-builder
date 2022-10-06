const Login = () => (
  <div className='row justify-content-center my-4'>
    <div className='col-3 order-col'>
      <h5 className='text-center mt-4'>Login</h5>
      <br />
      <form action="/">
        <input type={"email"} placeholder="Email address" className='form-control' required />
        <br />
        <input type={"password"} placeholder="Password" className='form-control' required />
        <br />
        <div className='text-center mb-4'>
          <button type='submit' className='order'>Login</button>
        </div>
      </form>
    </div>
  </div>
)

export { Login };
