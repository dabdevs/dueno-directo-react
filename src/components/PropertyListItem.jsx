import React, { useState } from 'react'
import { PencilIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'
import { Navigate } from 'react-router-dom'

export default function PropertyListItem({ property, onDelete }) {
    return (
        // <th className="px-4 py-3">Description</th>
        // <th className="px-4 py-3">Price</th>
        // <th className="px-4 py-3">Bedroom</th>
        // <th className="px-4 py-3">Bathrooms</th>
        // <th className="px-4 py-3">Country</th>
        // <th className="px-4 py-3">City</th>
        // <th className="px-4 py-3">Status</th>
        // <th className="px-4 py-3">Actions</th>
        <tr className="text-gray-700" key={property.id}>
            <td className="px-4 py-3 border">
                {property.title || 'N/A'}
            </td>
            <td className="px-4 py-3 text-xs  border">{property.description || 'N/A'}</td>
            <td className="px-4 py-3 text-ms  border">{property.price || 'N/A'}</td>
            <td className="px-4 py-3 text-ms  border">{property.bedrooms || 'N/A'}</td>
            <td className="px-4 py-3 text-ms  border">{property.bathrooms || 'N/A'}</td>
            <td className="px-4 py-3 text-ms  border">{property?.country?.name || 'N/A'}</td>
            <td className="px-4 py-3 text-ms  border">{property?.city?.name || 'N/A'}</td>
            <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1  leading-tight text-green-700 bg-green-100 rounded-sm"> {property.status} </span>
            </td>
            <td className="px-4 py-3 text-sm border">
                <a href='#' className='text-blue-500 mx-2 btn font-semibold'>View</a>
                <a href='#' className='text-orange-400 mx-2 btn font-semibold'>Edit</a>
                <a href='#' className='text-red-800 mx-2 font-semibold font'>Delete</a>
            </td>
        </tr>
    )
}


