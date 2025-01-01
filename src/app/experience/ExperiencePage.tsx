"use client";

import Wrapper from "~/app/_components/Wrapper";
import SelectorExperience from "./ExperienceSelector";
import { useState } from "react";
import { HeadingSize, SectionType } from "~/lib/types";
import Heading from "~/app/_components/Heading";
import Experience from "./ExperienceList";
import { Separator } from "../_components/ui/separator";

function ExperiencePage() {
    const [currentSection, setCurrentSection] = useState(SectionType.CURRENT);

    return (
        <section className="experience-page-section my-12">
            <Wrapper>
                <div className="grid gap-8">
                    <div className='grid gap-4'>
                        <Heading
                            text="My Experience"
                            size={HeadingSize.H1}
                        />
                        <Separator />
                        <p>This is what I been doing throughout the years. Click the button below to view my experience!</p>
                        <SelectorExperience
                            currentSection={currentSection}
                            setCurrentSection={setCurrentSection}
                        />
                        <Separator />
                    </div>

                    <div className="grid gap-4">
                        <Experience currentSection={currentSection} />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ExperiencePage;