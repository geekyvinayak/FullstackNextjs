import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div >
            <div>Sorry! Requested page is not available.</div>
            <Link href="/">Return to HomePage</Link>
        </div> 
    )
}

export default NotFound