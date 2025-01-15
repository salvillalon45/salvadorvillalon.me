import { HeadingSize, NowSections } from "~/lib/types";
import Heading from "../_components/Heading";
import Wrapper from "../_components/Wrapper";
import { Separator } from "../_components/ui/separator";
import '../../styles/NowPage.css';
import AnchorLink from "../_components/AnchorLink";

function NowPage() {
    return (
        <section className="now-page-section my-12">
            <Wrapper>
                <div className="grid gap-8">
                    <div className='grid gap-4'>
                        <Heading
                            text="Now with Sal"
                            size={HeadingSize.H1}
                        />
                        <Separator />
                        <p>How is Sal doing?</p>
                        <p>Updated on January 14, 2025 in the great city of Calexico</p>
                    </div>

                    <div className='grid gap-4'>
                        <Heading
                            text={NowSections.EDUCATION}
                            size={HeadingSize.H2}
                        />
                        <Separator />
                        <ul>
                            <li>Working on Portfolio Version 5 by using the T3 Stack! I am very proud of this version. I finally learned how to implement mobile first design</li>
                            <li>
                                At work I noticed I need some upskilling in backend development (especially test-driven development). So I am going to focus on strengthings my skills. Going to take the following courses from freeCodeCamp
                                <ul>
                                    <li>Relational Database Certification</li>
                                    <li>Information Security Certification</li>
                                    <li>Quality Assurance Certification</li>
                                </ul>
                                Some extras one I found are
                                <ul>
                                    <li>Scientific Computing with Python</li>
                                    <li>Data Analysis with Python</li>
                                    <li>Machine Learning with Python</li>
                                </ul>
                            </li>
                            <li>I am looking for any fellowships or programs to better myself as an engineer and leader. Let me know if you know of any!</li>
                        </ul>
                    </div>

                    <div className='grid gap-4'>
                        <Heading
                            text={NowSections.CAREER}
                            size={HeadingSize.H2}
                        />
                        <Separator />
                        <ul>
                            <li>Starting my new job at Productable! I want to focus on the following:</li>
                            <ul>
                                <li>Becoming stronger backend developer especially in test-driven development</li>
                                <li>Gain this new mindset: Understand the Product & Business to create good engineering solutions</li>
                            </ul>
                        </ul>
                    </div>

                    <div className='grid gap-4'>
                        <Heading
                            text={NowSections.LIFE}
                            size={HeadingSize.H2}
                        />
                        <Separator />
                        <ul>
                            <li>Run 1 - 2 Half Marathons</li>
                            <li>Join a tennis team with USTA SoCal tennis</li>
                            <li>Go on more hikes!</li>
                            <li>Get better at snowboarding</li>
                            <li>Plan 3 days weekend given throughout the year to explore new area. Interested in National Parks and sightseeing</li>
                            <li>Currently doing a powerlifting program from The Strength Athlete</li>
                        </ul>
                    </div>

                    <div className='grid gap-4'>
                        <p>This is a <AnchorLink
                            href="https://nownownow.com/"
                            text="Now page"
                            target="_blank"
                            rel="noopener noreferrer"
                        />. You can make one too!</p>
                    </div>
                </div>
            </Wrapper>
        </section >
    )
}

export default NowPage;