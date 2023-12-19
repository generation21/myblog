// app/providers.jsx

"use client";
interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}
import { ThemeProvider } from "next-themes";

export default function Providers(props: ThemePropsInterface) {
    const { children } = props;

    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
