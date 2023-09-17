
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import axios from "../rest-api/axios";
import PropertyListItem from "../components/PropertyListItem";
import AuthContext from "../contexts/AuthProvider";

export default function Properties() {
    const { auth } = useContext(AuthContext)
    const [properties, setProperties] = useState() 
    const token = auth.token
    
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getProperties = async () => {
            try {
                const {data} = await axios.get('/properties', {
                    headers: { "Authorization": `Bearer ${token}` },
                    signal: controller.signal,
                    withCredentials: true
                })

                console.log('Properties:', data)
    
                isMounted && setProperties(data)
            } catch (err) {
                console.log(err)
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

    return (
        <>
            <PageComponent title={'Properties'} buttons={
                <TButton to="/properties/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create
                </TButton>
            }>
                {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {properties?.data?.map(property => (
                        <PropertyCardItem property={property} onDelete={onDelete} key={property.id} />
                    ))}
                </div> */}

                
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Description</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Bedrooms</th>
                                    <th className="px-4 py-3">Bathrooms</th>
                                    <th className="px-4 py-3">Country</th>
                                    <th className="px-4 py-3">City</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {properties?.data?.map(property => (
                                    <PropertyListItem property={property} key={property.id}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </PageComponent>
        </>
    )
}