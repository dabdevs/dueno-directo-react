
import PageComponent from "../components/PageComponent";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import axios from "../rest-api/axios";
import PropertyListItem from "../components/PropertyListItem";
import AuthContext from "../contexts/AuthProvider";

export default function Properties() {
    const { auth } = useContext(AuthContext)
    const [properties, setProperties] = useState()

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getProperties = async () => {
            try {
                const { data } = await axios.get('properties', {
                    headers: { "Authorization": `Bearer ${auth.token}` },
                    signal: controller.signal,
                    withCredentials: true
                })

                isMounted && setProperties(data)

                // const instance = new Datatable(document.getElementById('datatable'), data)

                // document.getElementById('datatable-search-input').addEventListener('input', (e) => {
                //     instance.search(e.target.value);
                // });
            } catch (err) {
                isMounted = false
                if (err?.response?.data?.message) {
                    alert(err?.response?.data?.message)
                }
            }
        }

        getProperties()

        return () => {
            isMounted = false,
                controller.abort()
        }
    }, [])

    const onDelete = () => {
        console.log('on delete click')
    }

    function dropdownFunction(element) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
        list.classList.add("target");
        for (i = 0; i < dropdowns.length; i++) {
            if (!dropdowns[i].classList.contains("target")) {
                dropdowns[i].classList.add("hidden");
            }
        }
        list.classList.toggle("hidden");
    }

    return (
        <>
            <PageComponent title={'Properties'} buttons={
                <TButton to="/properties/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create
                </TButton>
            }>

                <div className="hidden w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3 text-center">Title</th>
                                    <th className="px-4 py-3 text-center">Description</th>
                                    <th className="px-4 py-3 text-center">Price</th>
                                    <th className="px-4 py-3 text-center">Bedrooms</th>
                                    <th className="px-4 py-3 text-center">Bathrooms</th>
                                    <th className="px-4 py-3 text-center">Country</th>
                                    <th className="px-4 py-3 text-center">City</th>
                                    <th className="px-4 py-3 text-center">Status</th>
                                    <th className="px-4 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mb-3 hidden">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            id="datatable-search-input"
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon1" />
                    </div>
                </div>

                <div class="w-full hidden">
                    <div class="px-4 md:px-10 py-4 md:py-7">
                        <div class="flex items-center justify-between">
                            <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
                            <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                                <p>Sort By:</p>
                                <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                                    <option class="text-sm text-indigo-800">Latest</option>
                                    <option class="text-sm text-indigo-800">Oldest</option>
                                    <option class="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div class="sm:flex items-center justify-between">
                            <div class="flex items-center">
                                <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
                                    <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Done</p>
                                    </div>
                                </a>
                                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Pending</p>
                                    </div>
                                </a>
                            </div>
                            <button onclick="popuphandler(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p class="text-sm font-medium leading-none text-white">Add Task</p>
                            </button>
                        </div>
                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full whitespace-nowrap">
                                <thead>
                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th className="px-4 py-3 text-center">Title</th>
                                        <th className="px-4 py-3 text-center text-ellipsis">Description</th>
                                        <th className="px-4 py-3 text-center">Price</th>
                                        <th className="px-4 py-3 text-center">Bedrooms</th>
                                        <th className="px-4 py-3 text-center">Bathrooms</th>
                                        <th className="px-4 py-3 text-center">Country</th>
                                        <th className="px-4 py-3 text-center">City</th>
                                        <th className="px-4 py-3 text-center">Status</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {properties?.data?.map(property => (
                                        <PropertyListItem property={property} key={property.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Title</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-left">Price</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Bedrooms</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Bathrooms</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Country</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">City</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Status</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                                <div class="font-semibold text-center">Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                        {properties?.data?.map(property => (
                            <PropertyListItem property={property} key={property.id} />
                        ))}
                    </tbody>
                </table>
            </PageComponent>
        </>
    )
}