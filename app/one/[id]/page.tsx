'use client';

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useParams } from 'next/navigation'
import React from 'react'

export default function Id() {
    const { id }: Params = useParams()
    return (
        <div>Id: {id}</div>
    )
}
