
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import PropertyListItem from "../components/PropertyListItem";
import TButton from "../components/core/TButton";
import { PlusCircleIcon } from "@heroicons/react/24/outline";


export default function Properties() {
    const {properties} = useStateContext()

    const onDelete = () => {
        console.log('on delete click')
    }

    return (
        <>
            <PageComponent title={'Properties'} buttons={
                <TButton to="/properties/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2"/>
                    Create 
                </TButton>
            }>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {properties.data?.map(property => (
                        <PropertyListItem property={property} onDelete={onDelete} key={property.id} />
                    ))}
                </div>
            </PageComponent>
        </>
    )
}