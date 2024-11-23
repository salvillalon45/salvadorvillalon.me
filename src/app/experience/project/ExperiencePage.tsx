"use client";

import DividerLine from "~/app/_components/DividerLine";
import Wrapper from "~/app/_components/Wrapper";
import ExperienceSelect from "./components/ExperienceSelect";
import { useState } from "react";
import Experience from "./components/Experience";
import { SectionType } from "~/lib/types/types";

function ExperiencePage() {
    const [currentSection, setCurrentSection] = useState(SectionType.CURRENT);

    return (
        <section className="experience-page-section my-12">
            <Wrapper>
                <div className="grid gap-8">
                    {/* // TODO: Turn this into a reusable heading component */}
                    <div className='grid gap-4'>
                        <h1 className="text-3xl font-bold">My Experience</h1>
                        <DividerLine />
                        <p>This is what I been doing throughout the years. Click the button below to view my experience!</p>
                        <ExperienceSelect
                            currentSection={currentSection}
                            setCurrentSection={setCurrentSection}
                        />
                        {/* TODO: All instances of DividerLine lets try the separator component from shadcn */}
                        <DividerLine />
                    </div>

                    {currentSection}

                    <div className="grid gap-4">
                        <Experience currentSection={currentSection} />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ExperiencePage;