import { skinContext, ErrorHandler } from "@epam/promo";
import { Snackbar, Modals } from "@epam/uui-components";
import { HistoryAdaptedRouter, useUuiServices, UuiContext } from "@epam/uui-core";
import { createBrowserHistory } from "history";
import { PropsWithChildren } from "react";
import { Router } from "react-router-dom";

const history = createBrowserHistory();


export const UuiEnhancedProvider = ({children}: PropsWithChildren) => {
    const router = new HistoryAdaptedRouter(history);

    // !!!
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { services } = useUuiServices({
        apiDefinition: (processRequest) => Promise.resolve({}),
        router,
        skinContext,
        // apiServerUrl: 'url',
        // appContext: {}
    });

    return (
        <Router history={ history }>
            <UuiContext.Provider value={ services }>
                <ErrorHandler>
                    {children}
                    <Snackbar />
                    <Modals />
                </ErrorHandler>
            </UuiContext.Provider>
        </Router>
    );
}
