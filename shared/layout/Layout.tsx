import { FC, PropsWithChildren } from 'react'
import { Header } from '@/shared/layout/Header'
import { Main } from '@/shared/layout/Main'
import { Sidebar } from '@/shared/layout/Sidebar'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </>
  )
}
