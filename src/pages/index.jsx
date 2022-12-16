import DefaultLayout from 'layouts/default-layout'
import { useState } from 'react'
import Image from 'next/image'
import ChatBubbleBot from 'components/common/chat-bubble-bot'
import ChatBubbleMe from 'components/common/chat-bubble-me'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleChatPanel = () => {
    const chatPanelOpen = document.getElementById('chat-panel-open')
    setIsOpen((state) => !state)
    chatPanelOpen.classList.toggle('slide-left', !isOpen)
    chatPanelOpen.classList.toggle('slide-right', isOpen)

    const chatPanel = document.getElementById('chat-panel')
    chatPanel.classList.toggle('slide-up', isOpen)
    chatPanel.classList.toggle('slide-down', !isOpen)
  }

  const toggleExpand = () => {
    const chatPanelOpen = document.getElementById('chat-panel-open')
    setIsExpanded((state) => !state)
    chatPanelOpen.classList.toggle('chat-fullscreen', !isExpanded)
    chatPanelOpen.classList.toggle('chat-expanded', isExpanded)
    if (!isExpanded) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  return (
    <div className='min-h-screen'>
      <div className='chat-expanded slide-right' id='chat-panel-open'>
        <header className='lg:flex hidden items-center chat-head justify-between py-4 px-6 w-full'>
          <div className='flex items-center gap-2'>
            <Image
              alt='logo'
              height={70}
              src='/images/lenna.svg'
              width={45}
            />
            <h6 className='text-xl'>Lenna</h6>
          </div>
          <div className='flex items-center gap-2'>
            <i
              className='bx bx-expand text-xl cursor-pointer hover:opacity-70 transition-all'
              title='Expand Chat'
              onClick={toggleExpand}
            />
            {!isExpanded && (
              <i
                className='bx bx-x text-4xl cursor-pointer hover:opacity-70 transition-all'
                title='close'
                onClick={toggleChatPanel}
              />
            )}
          </div>
        </header>
        <main className='lg:p-8 p-4 h-full w-full mx-auto chat-body'>
          <ChatBubbleBot />
          <ChatBubbleMe />
        </main>
      </div>
      <div className='chat-collapse shade rounded-full slide-up' id='chat-panel' onClick={toggleChatPanel}>
        {isOpen ? null : <i class='bx bxs-chat text-4xl text-white' />}
      </div>
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
