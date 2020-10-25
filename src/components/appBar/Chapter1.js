import React from 'react'
import EvenlySpacedLayout from './EvenlySpacedLayout'
import ColumnDirection from './ColumnDirection'
import AppBar from './AppBar'
import HideOnScroll from './HideOnScrollAppBar'
import WithNavigation from './WithNavigation'

const Chapter1 = () => {
  return (
    <div>
      <WithNavigation />
      {/* <HideOnScroll /> */}
      {/* <AppBar /> */}
      {/* <EvenlySpacedLayout /> */}
      <ColumnDirection />
    </div>
  )
}

export default Chapter1
