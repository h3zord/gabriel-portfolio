'use client'

import * as Toast from '@radix-ui/react-toast'
import { useState } from 'react'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  Viewport,
} from './styles'

interface ToastComponent {}

export function ToastComponent() {
  const [open, setOpen] = useState(false)

  return (
    <Toast.Provider swipeDirection="up" duration={1000}>
      <button onClick={() => setOpen(true)}>Toast</button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Title</ToastTitle>
        <ToastDescription>Description</ToastDescription>
        <ToastAction altText="Goto schedule to undo" asChild>
          <button>button</button>
        </ToastAction>
        <Toast.Close />
      </ToastRoot>

      <Viewport />
    </Toast.Provider>
  )
}
