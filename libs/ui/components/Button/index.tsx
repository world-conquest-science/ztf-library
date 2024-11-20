import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'inline-flex w-fit gap-3 rounded-full px-6 py-4 font-bold tracking-tight',
  {
    variants: {
      intent: {
        primary: [],
        secondary: [],
        tertiary: [],
      },
      fullWidth: {
        true: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  fullWidth,
  ...props
}) => (
  <button
    className={buttonStyles({ className, intent, fullWidth })}
    {...props}
  />
)
