import {PropsWithChildren} from "react";
import H2 from "../../primitives/headings/H2.tsx";

const Section = ({ children, title }: PropsWithChildren<{title: string}>) => {
    return (
        <div className="col-span-8 md:col-span-9 flex flex-col p-6 gap-6 h-screen">
            <H2>{title}</H2>
            {children}
        </div>
    );
}

export default Section;