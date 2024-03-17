import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function SlateGridGenerator({ slateMembers }) {
  return (
    <Grid container spacing={2} alignItems="top" justifyContent="left">
      {slateMembers.map((member: SlateMember) => (
        <Grid xs={4} alignItems="center" justifyContent="center">
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt={member.name}
            src={member.avatar}
          />
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="subtitle1">{member.role}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export interface SlateMember {
  name: string;
  role: string;
  avatar: string;
}