import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import PageComponent from '../components/PageComponent'

export default function PropertyForm() {
  return (
    <>
      <PageComponent title={'Create property'}>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2> */}
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Describe your property the best way possible.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Ttitle
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">How would you describe your property?</p>
                </div>

                <div>
                  <label htmlFor="property-type" className="block text-sm font-medium leading-6 text-gray-900">
                    Property Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="property-type"
                      name="property_type"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Appartment</option>
                      <option>House</option>
                      <option>Condo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="price"
                      id="price"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Is the price negotiable?</legend>
                  <div className="mt-2 flex">
                    <div className="flex mx-2 my-1 items-center gap-x-3">
                      <input
                        id="negotiable-no"
                        name="negotiable"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="negotiable-no" className="block text-sm font-medium leading-6 text-gray-900">
                        No
                      </label>
                    </div>
                    <div className="flex mx-2 my-1 items-center gap-x-3">
                      <input
                        id="negotiable-yes"
                        name="negotiable"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="negotiable-yes" className="block text-sm font-medium leading-6 text-gray-900">
                        Yes
                      </label>
                    </div>
                  </div>
                </fieldset>

                {/* <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div> */}

                {/* <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Property location</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Tell us where your property is located.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                
                <div className="sm:col-span-2">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <select
                      id="city"
                      name="city"
                      autoComplete="city-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Buenos Aires</option>
                      <option>Santiago</option>
                      <option>New York</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="neighborhood" className="block text-sm font-medium leading-6 text-gray-900">
                    Neighborhood <span className='text-thin'>(optional)</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="neighborhood"
                      id="neighborhood"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Property Details</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Write all characteristics about the property.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

                <div className="sm:col-span-2">
                  <label htmlFor="bedrooms" className="block text-sm font-medium leading-6 text-gray-900">
                    Bedrooms
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="bedrooms"
                      id="bedrooms"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="bathrooms" className="block text-sm font-medium leading-6 text-gray-900">
                    Bathrooms
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="bathrooms"
                      id="bathrooms"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">
                    Area
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="area"
                      id="area"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="bathrooms" className="block text-sm font-medium leading-6 text-gray-900">
                    Bathrooms
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="bathrooms"
                      id="bathrooms"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Property Contact */}
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Property Contact</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Enter your contact informations.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

                <div className="sm:col-span-2">
                  <label htmlFor="bedrooms" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={0}
                      name="bedrooms"
                      id="bedrooms"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      min={0}
                      name="email"
                      id="email"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="get-notified-by" className="block text-sm font-medium leading-6 text-gray-900">
                    Receive notifications by
                  </label>
                  <div className="mt-2">
                    <select
                      id="get-notified-by"
                      name="get_notified_by"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Phone</option>
                      <option>Email</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </PageComponent>
    </>
  )
}


