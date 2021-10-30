import React, { } from 'react';

import { Box, Text, Accordion, AccordionPanel, List } from 'grommet';

function Experience() {
    return (
        <>
            <Box>
                <Accordion>
                    <AccordionPanel label='Job 1'>
                        <Box pad='medium' background='brand'>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin dui eget mi malesuada, fermentum ultricies metus posuere.</Text>
                            <List primaryKey='number' secondaryKey='item' data={[
                                { number: '1', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                                { number: '2', item: 'Curabitur et ante euismod, suscipit sem sed, malesuada metus.' }
                            ]} />
                        </Box>
                    </AccordionPanel>
                </Accordion>
            </Box>

        </>
    )
}
export default Experience;