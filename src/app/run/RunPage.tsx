import { HeadingSize } from "~/lib/types";
import Wrapper from "../_components/Wrapper";
import Heading from "../_components/Heading";
import { columns } from "./columns";
import { fetchRunData } from "~/lib/run";
import { DataTable } from "./data-table";
import { Separator } from "../_components/ui/separator";

function RunPage() {
    const data = fetchRunData();

    return (
        <section className="run-page-section my-12">
            <Wrapper>
                <div className="grid gap-8">
                    <div className='grid gap-4'>
                        <Heading
                            text="Running with Sal"
                            size={HeadingSize.H1}
                        />
                        <Separator />
                        <p>Come run with me</p>
                    </div>

                    <DataTable columns={columns} data={data} />
                </div>
            </Wrapper>
        </section>
    )
}

export default RunPage;