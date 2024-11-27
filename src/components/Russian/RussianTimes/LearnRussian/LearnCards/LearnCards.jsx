import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, { accordionDetailsClasses, } from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import './LearnCards.scss'

function LearnCards({ item }) {
    console.log(item);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='learnCards'>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                    expanded
                        ? {
                            [`& .${accordionClasses.region}`]: {
                                height: 'auto',
                            },
                            [`& .${accordionDetailsClasses.root}`]: {
                                display: 'block',
                            },
                        }
                        : {
                            [`& .${accordionClasses.region}`]: {
                                height: 0,
                            },
                            [`& .${accordionDetailsClasses.root}`]: {
                                display: 'none',
                            },
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography >
                        <h1 className='learnCards__title'>
                            <span
                                className='learnCards__span1'
                            >
                                {item.id}
                            </span>
                            <span>
                                {item.title}
                            </span>
                        </h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p className="learnCards__text">
                            {item.text1}
                        </p>
                        <p className="learnCards__text">
                            {item.text2}
                        </p>
                        <p className="learnCards__text">
                            {item.text3}
                        </p>
                        <p className="learnCards__text">
                            {item.text4}
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
export default LearnCards
