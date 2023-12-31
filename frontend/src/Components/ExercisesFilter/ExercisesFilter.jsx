import React from 'react';
import { useState } from 'react';

import './exercisesfilter.css';

const ExercisesFilter = ({ setSearchParams, loading }) => {
    const [keyword, setKeyword] = useState('');
    const [typologyId, setTypologyId] = useState('');
    const [muscleGroupId, setMuscleGroupId] = useState('');

    const handleClickRemoveFilters = (e) => {
        e.preventDefault();
        setTypologyId('');
        setMuscleGroupId('');
        setKeyword('');
    };

    return (
        <main className="filters-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    setSearchParams(
                        new URLSearchParams({
                            keyword,
                            typologyId,
                            muscleGroupId,
                        })
                    );
                }}
            >
                <div className="filters-1">
                    <input
                        className="search-bar"
                        placeholder="Search..."
                        type="search"
                        id="keyword"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                        value={keyword}
                    />

                    <fieldset className="options">
                        <select
                            className="typ-filter"
                            onChange={(e) => {
                                setTypologyId(e.target.value);
                            }}
                            value={typologyId}
                        >
                            <option value="0">Typology</option>
                            <option value="1">Bodybuilding</option>
                            <option value="2">Cardio</option>
                        </select>
                    </fieldset>

                    <fieldset className="options">
                        <select
                            className="musc-filter"
                            onChange={(e) => {
                                setMuscleGroupId(e.target.value);
                            }}
                            value={muscleGroupId}
                        >
                            <option value="0">Muscle Group</option>
                            <option value="1">Biceps</option>
                            <option value="2">Triceps</option>
                            <option value="3">Forearm</option>
                            <option value="4">Shoulders</option>
                            <option value="5">Back</option>
                            <option value="6">Chest</option>
                            <option value="7">Abdomen</option>
                            <option value="8">Legs</option>
                        </select>
                    </fieldset>
                </div>
                <div className="filters-2">
                    <button
                        className="remove-filters"
                        onClick={handleClickRemoveFilters}
                    >
                        REMOVE FILTERS
                    </button>
                    <button className="search-exercises" disabled={loading}>
                        APPLY FILTERS
                    </button>
                </div>
            </form>
        </main>
    );
};
export default ExercisesFilter;
