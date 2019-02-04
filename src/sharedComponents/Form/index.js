import React from 'react';
import './index.scss';

 const Form = () => {

    return (
        <div>
            <form className="w-full max-w-md">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Jane"/>
                            <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <input
                                className="appearance-none block w-full bg-red text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                id="grid-city" type="button" placeholder="Albuquerque"/>
                        </div>
                </div>
            </form>
        </div>
    )
}

 export default Form