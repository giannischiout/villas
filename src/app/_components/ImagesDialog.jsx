'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  
export function ImagesDialog({ image, ...props }) {
    return (
      <Dialog {...props}>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogHeader>
          <DialogTitle>Select an image</DialogTitle>
          <DialogDescription>Choose an image from the list below</DialogDescription>
        </DialogHeader>
        <DialogContent>
          <ul>
        <li>test</li>
          </ul>
        </DialogContent>
      </Dialog>
    )
}