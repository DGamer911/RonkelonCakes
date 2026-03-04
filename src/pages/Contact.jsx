import React from "react";

function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="h-[calc(100vh-60px)] flex">
      <div className="bg-blue-200 h-full w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Reach Out To Us Today</h1>
          <p className="mt-4">
            Get in touch with us today if you have any issue or complaints.
          </p>
        </div>
      </div>
      <div className="bg-white w-1/2 px-[40px] flex h-full items-center justify-center">
        <form action="" className="grid grid-cols-2 gap-4" onSubmit={handleClick}>
          <div>
            <label htmlFor="" className="block mb-2">
              First Name
            </label>
            <input type="text" className="border border-slate-400 px-1 py-2 rounded-lg w-full" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          </div>
          <div>
            <label htmlFor="" className="block mb-2">
              Last Name
            </label>
            <input type="text" className="border border-slate-400 px-1 py-2 rounded-lg w-full" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-2">
              Email Address
            </label>
            <input type="text" className="border border-slate-400 px-1 py-2 rounded-lg w-full" value={formData.email} onChange={(e)=> setFormData({...formData, email:e.target.value})} />
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-2">
              Message
            </label>
            <textarea className="border border-slate-400 px-1 py-2 rounded-lg w-full" rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          </div>
          <button type="submit" className="w-full col-span-2 py-2 rounded-lg bg-blue-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
