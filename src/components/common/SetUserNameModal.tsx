import React from 'react'
import Modal from './Modal'
import Row from './Row'
import Input from './Input'
import Button from './Button'
import Form from './Form'
import useUser from '../../shared/user/useUser'

interface TypeNameModalProps {
  open: boolean
  onClose?: () => void
  onSubmit?: (data: unknown) => void
}

const SetUserNameModal = ({ open, onClose, onSubmit }: TypeNameModalProps) => {
  const { name, setName } = useUser()
  const userInputRef = React.useRef<HTMLInputElement>(null);
  const issueTrackerUrlRef = React.useRef<HTMLInputElement>(null);
  const storedIssueTrackerUrl = typeof localStorage !== 'undefined' ? localStorage.getItem('issueTrackerUrl') : ''

  React.useEffect(() => {
    if (open) {
      userInputRef.current.select()
    }
  }, [open])

  const handleSubmit = (data: { user: string; issueTrackerUrl?: string }) => {
    setName(data.user)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('issueTrackerUrl', data.issueTrackerUrl || '')
    }
    if (onSubmit) onSubmit(data)
  }

  return (
    <Modal title="Creating room" open={open} onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input
            ref={userInputRef}
            name="user"
            placeholder="Your name"
            defaultValue={name || ''}
            required
          />
        </Row>
        <Row>
          <Input
            ref={issueTrackerUrlRef}
            name="issueTrackerUrl"
            placeholder="Issue tracker URL (optional)"
            defaultValue={ storedIssueTrackerUrl || '' }
          />
        </Row>
        <Row justifyContent="flex-end">
          <Button type="submit">Continue</Button>
        </Row>
      </Form>
    </Modal>
  )
}

export default SetUserNameModal
