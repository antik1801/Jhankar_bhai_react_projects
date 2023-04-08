import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h1>Myself</h1>
            <section>
                <Special ring={ring}>Special</Special>
            </section>
        </div>
    );
};

export default Myself;