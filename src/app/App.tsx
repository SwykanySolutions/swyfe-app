"use client"

import { ThemeProvider } from "next-themes";
import { ReactNode} from "react";

export default function App({ children } : { children: ReactNode }) {

    return(
        <ThemeProvider enableColorScheme={true} attribute='data-theme' enableSystem={true} defaultTheme="system">
            {children}
        </ThemeProvider>
    )
}