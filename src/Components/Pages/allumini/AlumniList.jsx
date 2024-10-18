import React from 'react';
import AlumniCard from './AlumniCard';

const AlumniList = ({ alumni }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum) => (
                <AlumniCard key={alum.id} alum={alum} />
            ))}
        </div>
    );
};

export default AlumniList;
