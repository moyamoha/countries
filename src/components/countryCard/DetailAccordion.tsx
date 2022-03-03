import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";

type DetailAccordionType = {
	field: string;
	value: string[];
};

export default function DetailAccordion({ field, value }: DetailAccordionType) {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography>{field}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ textAlign: "left" }}>
				<Typography>
					{value.map((v) => (
						<span key={v}>
							{v} <br></br>
						</span>
					))}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
}
