import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { donationContent } from '../../data/home'
import { Badge } from './Badge'
import { Button } from './Button'
import { CloseIcon } from './Icons'
import './DonationDialog.css'

type DonationDialogProps = {
  open: boolean
  onClose: () => void
  returnFocusRef?: { current: HTMLElement | null }
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export function DonationDialog({
  open,
  onClose,
  returnFocusRef,
}: DonationDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    const focusFallback = returnFocusRef?.current ?? null
    const dialog = dialogRef.current

    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialog) return

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => element.getClientRects().length > 0)

      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || active === dialog)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      const target = focusFallback ?? previousFocus
      if (target?.isConnected) target.focus()
    }
  }, [onClose, open, returnFocusRef])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div className="donation-dialog">
      <div
        className="donation-dialog__backdrop"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        className="donation-dialog__card"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-dialog-title"
        aria-describedby="donation-dialog-description"
      >
        <div className="donation-dialog__header">
          <Badge className="donation-dialog__badge">
            {donationContent.eyebrow}
          </Badge>
          <h2 className="donation-dialog__title" id="donation-dialog-title">
            {donationContent.title}
          </h2>
          <p
            className="donation-dialog__description"
            id="donation-dialog-description"
          >
            {donationContent.description}
          </p>
          <button
            className="donation-dialog__close"
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar información de donación"
            onClick={onClose}
          >
            <CloseIcon className="donation-dialog__close-icon" />
          </button>
        </div>

        <div className="donation-dialog__body">
          <div className="donation-dialog__method">
            <p className="donation-dialog__method-eyebrow">
              {donationContent.methodEyebrow}
            </p>
            <h3 className="donation-dialog__method-title">
              {donationContent.methodTitle}
            </h3>
            <p className="donation-dialog__method-description">
              {donationContent.methodDescription}
            </p>
            <Button
              className="donation-dialog__action"
              href={donationContent.actionHref}
              variant="orange"
            >
              {donationContent.actionLabel}
            </Button>
          </div>

          <p className="donation-dialog__notice">{donationContent.notice}</p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
