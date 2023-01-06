import { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import programState from '../state/programState'

interface Props {}

const program = (props: Props) => {
  useEffect(() => {
    programState.getProgram()
    
  }, [])
  return (
    <MainLayout></MainLayout>
  )
}

export default program