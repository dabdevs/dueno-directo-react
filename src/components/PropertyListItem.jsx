import React from 'react'
import { PencilIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'

export default function PropertyListItem({property, onDelete}) {
  return (
    <div className='flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]'>
        <img 
            src={''} 
            alt={property.title} 
            className='w-full h-48 object-cover'
        />
        <h4 className='mt-4 text-lg font-bold'>{property.title}</h4>
        <div className='overflow-hidden flex-1'>{property.description}</div>
        <div className='flex justify-between items-center mt-3'>
            <TButton to={`${property.id}`}> 
                <PencilIcon className='w-5 h-5 mr-2'/>
                Edit 
            </TButton>

            <div className='flex items-center'>
                <TButton to={`/view/properties/${property.id}`} circle link>
                    <ArrowTopRightOnSquareIcon className='w-5 h-5'/>
                </TButton>

                {property.id && (
                    <TButton onClick={onDelete} circle link color='red'>
                        <TrashIcon className='w-5 h-5' />
                    </TButton>
                )}
            </div>
        </div>
    </div>
  )
}
