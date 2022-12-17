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
      const bubbleChat = document.getElementsByClassName('bubble-chat')
      Array.from(bubbleChat).forEach((el) => {
        el.style.width = '50%'
      })
    } else {
      const bubbleChat = document.getElementsByClassName('bubble-chat')
      document.body.style.overflowY = 'auto'
      Array.from(bubbleChat).forEach((el) => {
        el.style.width = '200px'
      })
    }
  }

  return (
    <div className='min-h-screen'>
      <div className='chat-expanded slide-right' id='chat-panel-open'>
        <div className='max-w-screen-xl mx-auto'>
          <header className='lg:flex hidden items-center chat-head justify-between py-4 px-6 w-full h-[75px]'>
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
          <div className='p-1 h-full lg:h-[482px] chat-body'>
            <main className='lg:p-8 p-2 h-full w-full mx-auto overflow-y-auto fancy-scroll'>
              <ChatBubbleBot />
              <ChatBubbleMe />
              <ChatBubbleBot />
              <ChatBubbleMe />
              <ChatBubbleBot />
              <ChatBubbleMe />
              <ChatBubbleBot />
              <ChatBubbleMe />
              <ChatBubbleBot />
              <ChatBubbleMe />
              <div className='chat-head border-none fixed bottom-0 left-0 w-full'>
                <div className='h-[72px] w-full px-2 flex items-center gap-2'>
                  <i className='bx bx-happy text-2xl' />
                  <div className='bg-sky-50 dark:bg-gray-700 w-full rounded px-2 py-0.5 flex items-center justify-between'>
                    <input
                      className='w-[80%] bg-transparent'
                      placeholder='Ketik disini..'
                      type='text'
                    />
                    <i className='bx bx-paperclip text-2xl' />
                  </div>
                  <i className='bx bxs-send text-2xl' />
                </div>
                <div className='flex items-center justify-center gap-1 text-sm -translate-y-2'>
                  <span>Powered by</span>
                  <Image
                    alt='logo'
                    height={70}
                    src='/images/lenna.svg'
                    width={20}
                  />
                  <span>Lenna</span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className='chat-collapse shade rounded-full slide-up' id='chat-panel' onClick={toggleChatPanel}>
        {isOpen ? null : <i className='bx bxs-chat text-4xl text-white' />}
      </div>
    </div>
  )
}

Home.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
