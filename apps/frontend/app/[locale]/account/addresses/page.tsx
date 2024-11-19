import { Input, Select } from '@headlessui/react'
import {
  ArrowDown01Icon,
  LocationAdd01Icon,
  RoadLocation01Icon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import React from 'react'

export default async function YourAddressesPage() {
  const t = useTranslations('AccountSettings.addresses')
  const gTrans = useTranslations('Global')

  return (
    <div>
      <header className="my-3 flex items-center gap-2 sm:mb-10 sm:mt-5">
        <RoadLocation01Icon
          size={30}
          className="relative top-[-2px]"
          strokeWidth={2}
        />
        <h1 className="text-2xl font-bold sm:text-3xl">{t('title')}</h1>
      </header>
      <div className="mt-6">
        <ul className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
          <li className="flex flex-col gap-5 rounded-lg p-4 ring-1 ring-gray-200 sm:w-1/2">
            {/* Name of the address */}
            <div className="w-full border-b border-dashed border-gray-200 pb-5">
              <div className="relative flex w-full flex-col">
                <Input
                  className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                  placeholder="Name your address"
                />
              </div>
            </div>

            {/* Name */}
            <div className="w-full">
              <div className="relative flex w-full flex-col">
                <label className="text-sm sm:text-base">
                  {gTrans('userForm.fullName.label')}
                </label>
                <Input
                  className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row">
              {/* Email address */}
              <div className="w-full">
                <div className="relative flex w-full flex-col">
                  <label className="text-sm sm:text-base">
                    {gTrans('userForm.email.label')}
                  </label>
                  <Input
                    className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className="w-full">
                <div className="relative flex w-full flex-col">
                  <label className="text-sm sm:text-base">
                    {gTrans('userForm.phone-number.label')}
                  </label>
                  <Input
                    className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Street name and house number */}
            <div className="w-full">
              <div className="relative flex w-full flex-col">
                <label className="text-sm sm:text-base">
                  {gTrans('userForm.address.street.label')}
                </label>
                <Input
                  className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex gap-5">
              {/* City */}
              <div className="w-full">
                <div className="relative flex w-full flex-col">
                  <label className="text-sm sm:text-base">
                    {gTrans('userForm.address.city.label')}
                  </label>
                  <Input
                    className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Postal code */}
              <div className="w-full">
                <div className="relative flex w-full flex-col">
                  <label className="text-sm sm:text-base">
                    {gTrans('userForm.address.postal-code.label')}
                  </label>
                  <Input
                    className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="w-full">
              <h6 className="text-sm sm:text-base">
                {gTrans('userForm.address.country.label')}
              </h6>
              <div className="relative flex w-full items-center rounded-lg ring-1 ring-gray-200">
                <Select className="block w-full appearance-none rounded-lg border-none px-3 py-2 text-base outline-none sm:py-3 sm:text-lg">
                  <option selected value="">
                    {gTrans('userForm.address.country.placeholder')}
                  </option>
                  <option value="active">France</option>
                  <option value="paused">Germany</option>
                  <option value="delayed">Ivory Coast</option>
                  <option value="canceled">Cameroun</option>
                </Select>
                <ArrowDown01Icon
                  className="pointer-events-none mr-3"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        </ul>

        <button className="mt-6 flex w-fit items-center gap-2 rounded-full bg-accent-800 px-5 py-3 font-bold text-white">
          <span>{gTrans('userForm.address.create.label')}</span>
          <LocationAdd01Icon size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
