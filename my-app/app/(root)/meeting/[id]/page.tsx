import React from 'react'

const Meetings = ({ params }: { params: { id: string } }) => {
    return (
        <div>Meetings Room : #{params.id}</div>
    )
}

export default Meetings