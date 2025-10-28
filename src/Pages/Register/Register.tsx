import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/Hooks/UseAuth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const auth = useAuth();
  const createUser = auth?.createUser ?? (() => Promise.resolve(null));
  const updateUserProfile = auth?.updateUserProfile ?? (() => Promise.resolve());
  const loading = auth?.loading ?? false;
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: any; }) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const photoURL = (form.elements.namedItem('photoURL') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    console.log(name, photoURL, email, password);

    try {
      // Registration logic here
      const result = await createUser(email, password);
      navigate('/');

      await updateUserProfile(name, photoURL);
      console.log('User registered successfully:', result.user);
    } catch (error) {
      console.log('Registration error:', error);
    }
  }

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-secondary via-white to-accent w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input className="bg-input-background" name='name' id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="URL">PhotoURL</FieldLabel>
              <Input
                className="bg-input-background"
                id="photoURL"
                name='photoURL'
                type="url"
                placeholder="http://example.com/photo.jpg"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                className="bg-input-background"
                id="email"
                type="email"
                name='email'
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input className="bg-input-background" name='password' id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            {/* <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input className="bg-input-background" id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field> */}
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
      </div>
    </div>
    );
};

export default Register;