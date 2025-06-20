import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";

 

const Checkout = () => {
    const servise = useLoaderData();
    const {title,_id,price,img} = servise;
    const {user} = useContext(Authcontext)

    const handlesubmit = event => {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const date = form.date.value;
  const email = user?.email;
  
  const  booking = {
    customername: name,
    email,
    date,
    service :title,
    service_id: _id,
    price: price,
    img,
  };

  console.log(booking);

  fetch('http://localhost:5000/bookings',
    {
      method: 'POST',
      headers:
      {
        'content-type' : 'application/json'
      },

      body: JSON.stringify(booking)
    }
  )
  .then(res =>res.json())
  .then(data =>
  {
     console.log(data);
     if(data.insertedId)
     {
      alert('service book successfully');
     }
  }
  )
};

    return (
        <div>
            <h1> This is Checkout Page {title} </h1>

            <div>
                {/* Form div  */}

                <div className="hero bg-base-200 min-h-screen">
  <div className=" ">
     
    <div className="card bg-base-100 w-full       shrink-0 shadow-2xl">
      <form  onSubmit={handlesubmit}className="card-body">
        <div className="form-control grid grid-cols-2 gap-8">
          <div>
             <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"   className="input input-bordered" required />
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"   className="input input-bordered" required />
          </div>


            <div>
             <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">due Amoubt</span>
          </label>
          <input type="text"  defaultValue={'$'+ price} className="input input-bordered" required />
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Checkout;