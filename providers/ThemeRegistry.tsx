'use client'

import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useLocale } from 'next-intl'
import { SnackbarKey, SnackbarProvider } from 'notistack'

import SnackbarCloseButton from '@/components/atoms/SnackbarCloseButton'
import useThemeContext from '@/hooks/useThemeContext'
import { darkTheme, lightTheme } from '@/libs/theme'

import 'dayjs/locale/ja'

export default function ThemeRegistry({ children }: PropsWithChildren) {
  const { theme } = useThemeContext()
  const locale = useLocale()

  const snackbarAction = (snackbarKey: SnackbarKey) => (
    <SnackbarCloseButton snackbarKey={snackbarKey} />
  )

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        autoHideDuration={3000}
        disableWindowBlurListener
        preventDuplicate
        action={snackbarAction}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
          {children}
        </LocalizationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
