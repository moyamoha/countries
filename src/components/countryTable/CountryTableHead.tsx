import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'

export default function CountryTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Flag</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Region</TableCell>
        <TableCell>Capital</TableCell>
        <TableCell>Population</TableCell>
        <TableCell>Favourites</TableCell>
      </TableRow>
    </TableHead>
  )
}
