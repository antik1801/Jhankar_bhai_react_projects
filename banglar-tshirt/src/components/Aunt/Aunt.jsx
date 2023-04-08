import React from 'react';
import Cousins from '../Cousins/Cousins';

const Aunt = ({ring}) => {
    return (
        <div>
            <h1>Aunt</h1>
            <p>Cousins</p>
            <section className='A-flex'>
                <Cousins>Abir</Cousins>
                <Cousins hasFriend={true} ring={ring}>Nibir</Cousins>
            </section>
        </div>
    );
};

export default Aunt;