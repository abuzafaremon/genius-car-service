import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
  };
  return (
    <div className='py-5 text-center'>
      <h3>Please add service</h3>

      <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' className='form-control mb-2' {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder='Description' className='form-control mb-2' {...register("description")} />
        <input placeholder='Price' className='form-control mb-2' type="number" {...register("price")} />
        <input placeholder='Photo Url' className='form-control mb-2' type="text" {...register("img")} />
        <input className='w-100 btn btn-primary' type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;