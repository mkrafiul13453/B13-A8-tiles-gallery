"use client";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { div } from 'framer-motion/client';
import { authClient } from '../lib/auth-client';

const LogInPage = () => {
        const onSubmit = async (e) => {
            e.preventDefault();
            // const name = e.target.name.value;
            const email = e.target.email.value;
            // const image = e.target.image.value;
            const password = e.target.password.value;
            const { data, error } = await authClient.signIn.email({
                email, // user email address
                password, // user password -> min 8 characters by default
                callbackURL:"/"
            })
            alert("You Login Successfully ............");
            console.log({ data, error });

        };
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-blue-700 text-center m-5'>
                    Login</h1>
            </div>
            <div className=' flex justify-center items-center'>
                <Form onSubmit={onSubmit} className="flex lg:w-96 sm:w-60 h-96 flex-col gap-15 " >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            <Checkbox />
                            Login
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LogInPage;