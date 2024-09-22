import {Box, Container} from '@mui/material';

export const Page = ({children}: { children: React.ReactNode }) => {
  return (
      <Box component="main" className='flex-grow mt-2'>
        <Container>
          {children}
        </Container>
      </Box>
  )
}