import React from 'react'

export default function Sidebar() {
  return (
    <aside className='min-w-[250px] h-[400px] dark:bg-neutral-700 sticky top-[100px] right-0 p-2'>
      <ul className='side-navigation'>
        <li>Main Page</li>
        <li>Character</li>
        <li>Awakening</li>
        <li>
          <ul>
            <li>Phase 1</li>
            <li>Phase 2</li>
          </ul>
        </li>
        <li>Transcendent</li>
        <li>Special Skill</li>
      </ul>
    </aside>
  )
}
