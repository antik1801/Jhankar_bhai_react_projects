import React from 'react';

const RoomReservations = () => {
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ 200</div>
                <div className='font-light text-neutral-600 night'>night</div>
            </div>
            <hr />
            <div>Calender</div>
        </div>
    );
};

export default RoomReservations;