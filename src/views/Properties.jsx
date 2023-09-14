import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import PropertyListItem from "../components/PropertyListItem";

export default function Properties() {
    const {properties} = useStateContext()
    
    const onDelete = () => {
        console.log('on delete click')
    }

    return (
        <>
            <PageComponent title={'Properties'} >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {properties.map(property => (
                        <PropertyListItem property={property} onDelete={onDelete} key={property.id} />
                    ))}
                </div>
            </PageComponent>
        </>
    )
}