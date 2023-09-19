import React, { useState } from 'react'
import { PencilIcon, ArrowTopRightOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'
import { Navigate } from 'react-router-dom'

export default function PropertyListItem({ property, onDelete }) {
    return (
        <tr tabindex="0" className="focus:outline-none h-16 border border-gray-100 rounded" key={property.id}>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                    <div class="font-medium text-gray-800">{property?.title || 'N/A'}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.price || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.bedrooms || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.bathrooms || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.country?.name || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.city?.name || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{property.status || 'N/A'}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">Actions</div>
            </td>
        </tr>
    )
}


