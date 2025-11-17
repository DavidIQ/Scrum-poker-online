import React from 'react'
import clsx from 'clsx'

import styles from '@styles/components/common/Button.module.css'

interface ButtonProps {
  size?: 'lg' | 'md' | 'sm'
  compact?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'transparent'
  type?: 'button' | 'submit'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  applyMargin?: boolean
  startIcon?: React.JSX.Element
  href?: string
  component?: string
  disabled?: boolean
  title?: string
}

const Button = ({
  children,
  size = 'md',
  compact = false,
  color = 'primary',
  type = 'button',
  className,
  applyMargin = true,
  startIcon,
  component = 'button',
  disabled = false,
  ...rest
}: ButtonProps) =>
  React.createElement(
    component,
    {
      type: component === 'button' ? type : undefined,
      className: clsx(
        styles.button,
        styles[`button--size-${size}`],
        styles[`button--color-${color}`],
        { [styles['button--compact-true']]: compact },
        { [styles['button--margin-false']]: !applyMargin },
        { [styles['button--hide-text-sm']]: !!startIcon },
        { [styles['button--disabled']]: disabled },
        className
      ),
      disabled,
      ...rest
    },
    <div className={styles.button__content}>
      {startIcon && (
        <div className={styles.button__content__icon}>{startIcon}</div>
      )}
      <div className={styles.button__content__text}>{children}</div>
    </div>
  )

export default Button
