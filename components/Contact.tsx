import React from 'react'
import { useForm } from "react-hook-form";

type Props = {}

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

const Contact = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
    return (
        <div className='h-screen relative flex overflow-hiddens flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have just what you need. 
                    <span className='text-gray-400 underline'>Lets talk</span>
                </h4>

                <form onSubmit={onSubmit} action="" className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2 '>
                        <input {...register("name")} placeholder='Name' className='contactInput' type="text" /><input  {...register("email")}placeholder='Email'className='contactInput' type="email" />
                    </div>
                    <input {...register("subject")} placeholder='Subject'  className='contactInput' type="text" />
                    <textarea {...register("message")} placeholder='Message'  className='contactInput' />
                    <button className='bg-black py-5  px-10 rounded-md text-white font-bold text-lg'>Submit</button>
                    {/* TODO: send email to myslef */}
                </form>

            </div>
        </div>
    )
}

export default Contact