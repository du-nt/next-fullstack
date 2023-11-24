'use client'

import { Box, Button, Typography } from '@mui/material'
import { signOut } from 'next-auth/react'

export default function ProfilePage() {
  return (
    <Box>
      <Typography>Profile page</Typography>
      <Button variant="contained" onClick={() => signOut()}>
        Logout
      </Button>
    </Box>
  )
}
