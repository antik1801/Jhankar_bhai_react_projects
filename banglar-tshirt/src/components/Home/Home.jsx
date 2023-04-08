import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    if(navigation.state === 'loading'){
        
    }
    const tshirts = useLoaderData();
    
    return (
        <div>
            <h2>This is home. {tshirts.length}</h2>
            {/* Header */}
        </div>
    );
};

export default Home;