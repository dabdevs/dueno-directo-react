
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

        const getProperties = () => {
            axios.get('properties', {
                headers: { "Authorization": `Bearer ${auth.token}` },
                signal: controller.signal,
                withCredentials: true
            }).then(({ data }) => {
                console.log(data)
                isMounted && setProperties(data)
            }).catch((err) => {
                console.log(err)
                isMounted = false
                if (err?.response?.data?.message) {
                    alert(err?.response?.data?.message)
                }
            })
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

                {/* <div className="w-full hidden">
                    <div className="px-4 md:px-10 py-4 md:py-7">
                        <div className="flex items-center justify-between">
                            <p tabindex="0" className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
                            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                                <p>Sort By:</p>
                                <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                                    <option className="text-sm text-indigo-800">Latest</option>
                                    <option className="text-sm text-indigo-800">Oldest</option>
                                    <option className="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
                                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                        <p>All</p>
                                    </div>
                                </a>
                                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Done</p>
                                    </div>
                                </a>
                                <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                        <p>Pending</p>
                                    </div>
                                </a>
                            </div>
                            <button onclick="popuphandler(true)" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Add Task</p>
                            </button>
                        </div>
                        <div className="mt-7 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
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
                </div> */}

                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Title</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Price</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Bedrooms</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Bathrooms</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Country</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">City</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Status</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                        {properties?.data?.map(property => (
                            <PropertyListItem property={property} key={property.id} />
                        ))}
                    </tbody>
                </table>
            </PageComponent>
        </>
    )
}