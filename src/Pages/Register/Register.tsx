import { SignupForm } from '@/components/signup-form';
import React from 'react';

const Register = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-secondary via-white to-accent w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
    );
};

export default Register;