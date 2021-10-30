import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';

function Divider() {
    return (
        <Grommet theme={grommet}>
            <Box width='100%' height='medium' background='accent-1' />
        </Grommet>
    )
}
export default Divider;