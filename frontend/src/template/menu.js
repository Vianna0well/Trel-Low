import React from 'react';

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='/#'>
                    <i className='fa fa-calendar-check-o'></i> Trel Low
                </a>
            </div>

            <div className='navbar-collapse collapse' id='navbar'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/trel'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)