import React from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useState } from 'react';
import { FormEvent } from 'react';
import Wrapper from './Wrapper';

type Props = {}

// Define the email parameters
interface EmailParams {
    user_name: string;
    user_email: string;
    message: string;
}

const Contact = (props: Props) => {

    const [success, setSuccess] = useState<boolean | null>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const emailParams: EmailParams = {
            user_name: form.user_name.value,
            user_email: form.user_email.value,
            message: form.message.value,
        };

        sendEmail(emailParams);
        form.reset();
    }

    async function sendEmail(emailParams: EmailParams) {
        const emailJSServiceID = process.env.EMAILJS_SERVICE_ID!
        const emailJSTemplateID = process.env.EMAILJS_TEMPLATE_ID!
        const emailJSPublicKey = process.env.EMAILJS_PUBLIC_KEY!


        try {
            const response: EmailJSResponseStatus = await emailjs.send(
                emailJSServiceID,
                emailJSTemplateID,
                {
                    user_name: emailParams.user_name,
                    user_email: emailParams.user_email,
                    message: emailParams.message,
                },
                emailJSPublicKey
            )
            console.log('Email sent!', response);
            setSuccess(true);
            //form.target.reset();

        } catch (error) {
            setSuccess(false);
            console.error('Error sending email: ', error)
        }
    };

    return (
        <Wrapper className="">
            {/* <div className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto text-left overflow-hiddens justify-evenly'> */}
            <div className='flex flex-col items-center h-screen'>

                {/* <h3 className='absolute ml-6 top-[3rem] md:top-24 uppercase tracking-[20px] text-gray-400 text-2xl md:text-[2.5rem] sm:text-3xl xl:top-22'>Contact</h3> */}
                <h1 className='uppercase h-1/6 tracking-[20px] flex jusify-center items-center text-gray-400 text-xl sm:text-[2rem] md:text-[2rem]'>CONTACT</h1>


                <div className='px-4 h-5/6' >
                    <div className='grid grid-cols-1 gap-x-16 md:gap-y-8 lg:grid-cols-5'>
                        <div className="lg:col-span-2 lg:py-12 lg:leading-[3rem]">
                            <p className=" text-[0.8rem] md:text-lg mx-3 my-9 mt-[5rem] md:my-10 md:mt-20 xl:mt-[7rem]">
                                I am looking for frontend/full stack opportunities in high impact and motivated team thats disrupting the culture. </p>

                            <p className=" text-[0.8rem] md:text-lg my-9 md:my-5 mx-3">
                                Shoot me a DM!
                            </p>

                        </div>

                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg md:p-8 lg:col-span-3 lg:p-12 lg:mt-14">
                            {/* <form className="space-y-4" onSubmit={handleSubmit(event)}> */}
                            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit} id="myForm" >
                                <div>
                                    <label className="sr-only" htmlFor='user_name' >Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-400 p-3 text-[0.8rem] md:text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="user_name"
                                        name='user_name'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor='user_email'>Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-[0.8rem] md:text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="user_email"
                                        name='user_email'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor='subject' >Subject</label>
                                    <input
                                        className="w-full rounded-lg border-gray-600 p-3 text-[0.8rem] md:text-sm"
                                        placeholder="Subject"
                                        type="text"
                                        id="subject"
                                        name='subject'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor='message' >Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 md:p-3 text-[0.8rem] md:text-sm"
                                        placeholder="Message"
                                        rows={4}
                                        id="message"
                                        name='message'
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-1 md:mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 ms:py-3 font-medium text-white text-[0.8rem] "
                                    >
                                        Send
                                    </button>
                                    {success && "Your message has been sent! I will get back to you asap."}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact