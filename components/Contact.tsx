import React from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useState } from 'react';
import { FormEvent } from 'react';

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
        try {
            const response: EmailJSResponseStatus = await emailjs.send(
                'service_4wynsm3',
                'template_qccrj54',
                {
                    user_name: emailParams.user_name,
                    user_email: emailParams.user_email,
                    message: emailParams.message,
                },
                '22OB0HoooDVvKie8a'
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
        <div className='h-screen relative flex overflow-hiddens flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-8 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10'>
                Contact
            </h3>

            <div className='mx-auto max-w-screen-xl px-4 md:py-16 sm:px-6 lg:px-8 xl:mt-8'>
                <div className='grid grid-cols-1 gap-x-16  md:gap-y-8 lg:grid-cols-5'>
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-[12px] md:text-lg mx-3 my-2 mt-5 md:my-10 md:mt-20">
                            I am looking for full stack/ frontend opportunities in high impact and motivated team thats disrupting the culture. </p>

                        <p className="max-w-xl text-[12px] md:text-lg my-5 md:my-5 mx-3">
                            Shoot me a DM!
                        </p>

                    </div>

                    <div className="rounded-lg bg-gray-200 p-4 md:p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {/* <form className="space-y-4" onSubmit={handleSubmit(event)}> */}
                        <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit} id="myForm" >
                            <div>
                                <label className="sr-only" htmlFor='user_name' >Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-400 p-3 text-[12px] md:text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="user_name"
                                    name='user_name'
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor='user_email'>Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-[12px] md:text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    id="user_email"
                                    name='user_email'
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor='subject' >Subject</label>
                                <input
                                    className="w-full rounded-lg border-gray-600 p-3 text-[12px] md:text-sm"
                                    placeholder="Subject"
                                    type="text"
                                    id="subject"
                                    name='subject'
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor='message' >Message</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 md:p-3 text-[12px] md:text-sm"
                                    placeholder="Message"
                                    rows={4}
                                    id="message"
                                    name='message'
                                ></textarea>
                            </div>
                            <div className="mt-1 md:mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 ms:py-3 font-medium text-white "
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
    )
}

export default Contact