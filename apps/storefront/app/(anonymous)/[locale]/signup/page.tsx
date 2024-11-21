'use client'

import { Input } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik'
import { SignupFormSchema, TSignupFormSchema } from './forms/signup.schema'
import { withZodSchema } from 'formik-validator-zod'
import { Routes } from '@/app/config/routes'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'

export default async function SignUpPage() {
  const trans = useTranslations('Authentication')
  const gTrans = useTranslations('Global')

  const formik = useFormik<TSignupFormSchema>({
    validateOnBlur: true,
    initialValues: {
      full_name: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password, full_name }, { setSubmitting }) => {},
    validate: withZodSchema(SignupFormSchema),
  })

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold text-black sm:text-5xl">
          {trans('SignUp.title')}
        </h1>
        <p className="text-sm text-gray-600 sm:text-xl">
          {trans('SignUp.description')}
        </p>
      </header>

      {/* Auth providers */}
      <div>
        <p className="text-sm text-gray-600 sm:text-xl">
          {trans('SignUp.register-using')}
        </p>
        <div className="mt-3 flex gap-5 sm:gap-7">
          <div className="w-full">
            <Link
              href=""
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-gray-800 ring-1 ring-gray-200 sm:gap-3 sm:p-4"
            >
              <Image
                src="/images/google-logo.png"
                width={30}
                height={30}
                alt=""
              />
              <span className="relative top-[2px] text-base font-bold sm:text-lg">
                Google
              </span>
            </Link>
          </div>
          <div className="w-full">
            <Link
              href=""
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-gray-800 ring-1 ring-gray-200 sm:gap-3 sm:p-4"
            >
              <Image
                src="/images/facebook-logo.svg"
                width={30}
                height={30}
                alt=""
              />
              <span className="relative top-[2px] text-base font-bold sm:text-lg">
                Facebook
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Email and password */}
      <form
        className="my-3 flex flex-col gap-5 sm:gap-7"
        onSubmit={formik.handleSubmit}
      >
        <p className="text-sm text-gray-600 sm:text-xl">
          {trans('SignUp.continue-using-email-password')}
        </p>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-xl">
              {gTrans('userForm.fullName.label')}
            </label>
            <Input
              placeholder=""
              id="full_name"
              type="text"
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-4 sm:text-lg"
              disabled={formik.isSubmitting}
              {...formik.getFieldProps('full_name')}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-xl">
              {gTrans('userForm.email.label')}
            </label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-4 sm:text-lg"
              placeholder=""
              id="email"
              type="email"
              disabled={formik.isSubmitting}
              {...formik.getFieldProps('email')}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-xl">
              {gTrans('userForm.password.label')}
            </label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-4 sm:text-lg"
              placeholder=""
              type="password"
              id="password"
              disabled={formik.isSubmitting}
              {...formik.getFieldProps('password')}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm">
            {trans.rich('SignUp.terms-conditions-acceptance', {
              terms: chunks => (
                <a href="" className="text-primary-600 underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="mt-2 flex w-full justify-center rounded-full bg-primary-700 py-3 text-base font-bold text-white sm:py-5 sm:text-lg"
        >
          {trans('SignUp.cta')}
        </button>
      </form>

      {/* Sign in */}
      <div className="inline-flex flex-col items-center sm:items-start">
        <p className="text-sm sm:text-base">
          {trans('SignUp.existing-account-prefix')}
        </p>
        <Link
          href={Routes.SignIn}
          className="font-bold text-primary-700 underline underline-offset-2"
        >
          {trans('SignUp.existing-account-signin')}
        </Link>
      </div>
    </>
  )
}
