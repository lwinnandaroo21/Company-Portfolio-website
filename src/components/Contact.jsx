import React, { useState } from "react";
import Container from "./Container";
import { CREATE_CONTACT } from "../gql/Email";
import { useMutation } from "@apollo/client";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [error, setErrors] = useState({});

    const handleChange = (value, field) => {
        const errorObject = { ...error };
        if (!field) {
            errorObject[field] = `${field.charAt(0).toUpperCase() + field.slice(1)
                } is required`;
        } else {
            errorObject[field] = "";
        }
        setErrors(errorObject);

        switch (field) {
            case "name":
                setName(value);
                break;

            case "email":
                setEmail(value);
                break;

            case "description":
                setDescription(value);
                break;
        }
    }


    const [create_contact] = useMutation(CREATE_CONTACT, {
        onError: (err) => {
            console.log("Error on server", err);
            alert("Error on Server");
        },
        onCompleted: (result) => {
            setName("");
            setEmail("");
            setDescription("");
            alert("Contact is Successful.")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorObject = {};
        let isError = false;

        if (!name) {
            isError = true;
            errorObject.name = "Name is required!";
        }
        if (!email) {
            isError = true;
            errorObject.email = "Email is required!";
        }
        if (!description) {
            isError = true;
            errorObject.description = "Description is required!";
        }
        if (isError) {
            setErrors(errorObject);
            return;
        }

        await create_contact({
            variables: {
                company_name: name,
                email: email,
                description: description,
            }
        });
    }
    return (
        <div className="bg-secondary py-32 md:py-44" id="contact">
            <Container>
                <div className="w-full h-[500px] lg:h-[400px] flex">
                    <div className="grid md:grid-cols-12">
                        <div className="flex col-span-6 justify-center">
                            <div className="flex flex-col text-text-color text-xl leading-10 tracking-wider p-6">
                                <h1 className="text-2xl font-medium mb-2">Let’s Talk</h1>
                                <p className="">Ready to discuss your marketing goals in detail? Schedule a consultation with our experts. </p>
                            </div>
                        </div>

                        <div className="col-span-6 flex justify-center">
                            <div className="flex flex-col text-text-color text-xl leading-10 tracking-wider p-6">
                                <h1 className="text-2xl font-medium mb-2">Contact Us</h1>
                                <p >+959 40978 0022</p>
                                <p >E 1-12, The Secretariat Yangon,Thein Phyu Road, Botahtaung Township, Yangon</p>
                            </div>
                        </div>




                        {/* <div className="w-full col-span-6">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-xl font-medium text-text-color tracking-wider">Name</label>
                            <input type="text" id="name" className="border text-lg rounded-md block w-full p-2.5 bg-transparent text-text-color" required value={name}
                                onChange={(e) => handleChange(e.target.value, "name")}/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-xl font-medium text-text-color tracking-wider">Email</label>
                            <input type="email" id="email" className="border text-lg rounded-md block w-full p-2.5 bg-transparent text-text-color" required value={email}
                                onChange={(e) => handleChange(e.target.value, "email")}/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-xl font-medium text-text-color tracking-wider">Description</label>
                            <textarea rows={5} type="text" id="description" className="border text-lg rounded-md block w-full p-2.5 bg-transparent text-text-color" required value={description}
                                onChange={(e) => handleChange(e.target.value, "description")}/>
                        </div>
                        <button type="submit" className="font-medium rounded-md text-xl md:px-16 px-5 py-2.5 text-center float-right tracking-wider btnContact" onClick={handleSubmit}>Send</button>
                    </form>
                </div> */}

                        <div className="w-full col-span-6">
                            <div className="grid grid-cols-12">

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Contact;