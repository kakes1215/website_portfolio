import React, { } from 'react';
import { Box, Text, Accordion, AccordionPanel } from 'grommet';

function ExperienceItem(props, experiences) {
    return (
        <>
            <Accordion>
                <AccordionPanel
                    background='brand'
                    pad='small'
                    label={
                        <div>
                            <Text
                                weight='bolder'
                                color='accent-1'
                                size='large'
                                margin='small'>
                                {props.experiences.company}
                            </Text>
                            <Text
                                color='white'
                                size='medium'>
                                {props.experiences.title}
                            </Text>
                        </div>
                    }
                    border={{ color: 'accent-3', side: 'bottom' }}>
                    <Box pad='medium' background={{ color: 'accent-2', opacity: '40%' }}>
                        {props.experiences.description}
                    </Box>
                </AccordionPanel>
            </Accordion>
        </>
    )
}
export default ExperienceItem