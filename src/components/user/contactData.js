import './style/contactData.css'

function ContactData() {
  return (
    <div className='row justify-content-center my-4 m-0'>
      <div className='col-3 order-col'>
        <h5 className='text-center mt-4'>Enter your Contact Data</h5>
        <br />
        <form action="/">
          <input type={"text"} placeholder="Your Name" className='form-control' required />
          <br />
          <input type={"text"} placeholder="Street" className='form-control' required />
          <br />
          <input type={"text"} placeholder="Zip Code" className='form-control' required />
          <br />
          <input type={"text"} placeholder="Country" className='form-control' required />
          <br />
          <input type={"email"} placeholder="Email" className='form-control' required />
          <br />
          <select className='form-select'>
            <option>Fastest</option>
            <option>Cheapest</option>
          </select>
          <br />
          <div className='text-center mb-4'>
            <button type='submit' className='order'>ORDER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ContactData };
