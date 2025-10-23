import React, { type ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}
const Section = ({ title="My default Subheading", children }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Section