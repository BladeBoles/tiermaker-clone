import React, { useContext, useState } from 'react'

import { MdSettings } from 'react-icons/md'
import Modal from '../generic/Modal'
import { TiermakerContext } from './Tiermaker'
import { string } from 'prop-types'

function SettingsModal({ rowName }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <MdSettings
        size={25}
        onClick={() => setModalOpen(true)}
        className="item-settings__modal-button"
      />
      <Modal
        ariaLabel="Settings Modal"
        open={modalOpen}
        setOpen={setModalOpen}
        width={500}
      >
        <Content setModalOpen={setModalOpen} rowName={rowName} />
      </Modal>
    </>
  )
}

SettingsModal.propTypes = {
  rowName: string.isRequired
}

function Content({ rowName }) {
  const { dispatch, data } = useContext(TiermakerContext)
  console.log('data', data)
  // const inputRef = useRef(null)

  // useEffect(() => {
  //   if (inputRef.current) inputRef.current.focus()
  // })
  return <div>{rowName}</div>
}

Content.propTypes = {
  rowName: string.isRequired
}

export default SettingsModal