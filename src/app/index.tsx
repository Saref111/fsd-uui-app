import React from 'react';
import { MainPage } from 'pages/MainPage/MainPage';
import { Route } from 'react-router-dom';
import { AppHeader } from 'widgets/AppHeader';
import css from './index.module.scss';
import { UuiEnhancedProvider } from './providers';

export const App = () => {
    return (
        <UuiEnhancedProvider>
             <div className={ css.app }>
                <Route component={ AppHeader } />
                <main>
                    <Route path="/" exact component={ MainPage } />
                </main>
                <footer></footer>
            </div>
        </UuiEnhancedProvider>
    );
}
