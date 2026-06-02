import React from "react";
import {cx} from "class-variance-authority";

interface MainCOntentProps extends React.ComponentProps<"main"> {}

export default function MainContent({
    children, 
    className, 
    ...props
}: MainCOntentProps) {
    return (
        <main className={cx("mt-4 md:mt-8", className)} {...props}>
            {children}
        </main>
    );
}