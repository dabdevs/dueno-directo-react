import React, { useState } from 'react'
import { PencilIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'
import { Navigate } from 'react-router-dom'

export default function PropertyListItem({ property, onDelete }) {
    return (
        <tr tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded" key={property.id}>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={property?.photos[0]?.path} width="40" height="40" alt={property.title} /></div>
                    <div className="font-medium text-gray-800">{property?.title || 'N/A'}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.price || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.bedrooms || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.bathrooms || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.country?.name || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.city?.name || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{property.status || 'N/A'}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">Actions</div>
            </td>
        </tr>
    )
}


