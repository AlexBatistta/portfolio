import React from 'react';
import { NavBarData as data } from '../mockData/NavBarData';

export const NavBar = () => {
    return (
        <>
            <nav>
                <div className="hidden sm:block">
                    <ul className="flex justify-center items-center gap-8">
                        {data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url} className="parraph nav-link">
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </nav>

        </>
    );
};
