import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';


type Props = {}

const Contact2 = (props: Props) => {

    const [success, setSuccess] = useState<boolean | null>(null)
    const form = useRef<HTMLFormElement>()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4wynsm3', 'template_qccrj54', form.current, '22OB0HoooDVvKie8a')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent!");
                setSuccess(true)
                e.target.reset();
            }, (error) => {
                setSuccess(false)
                console.log(error.text);
            });
    };

    return (
        <div className='h-screen relative flex overflow-hiddens flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10'>
                Contact
            </h3>

            <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg mx-3 my-10 mt-20">
                            I am looking for full stack/ frontend opportunities in high impact and motivated team thats disrupting the culture. </p>

                        <p className="max-w-xl text-lg my-5 mx-3">
                            Shoot me a DM!
                        </p>

                    </div>

                    <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                            <div>
                                <label className="sr-only" >Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-400 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name='user_name'
                                />
                            </div>

                            <div>
                                <label className="sr-only" >Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    name='user_email'
                                />
                            </div>
                            <div>
                                <label className="sr-only" >Subject</label>
                                <input
                                    className="w-full rounded-lg border-gray-600 p-3 text-sm"
                                    placeholder="Subject"
                                    type="text"
                                    id="subject"
                                    name='subject'
                                />
                            </div>
                            <div>
                                <label className="sr-only" >Message</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                    name='message'
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white "
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

export default Contact2