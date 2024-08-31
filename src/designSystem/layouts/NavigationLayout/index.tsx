import { useUserContext } from '@/core/context'
import { DollarOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Topbar } from './components/Topbar'

import { Logo } from './components/Logo'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const itemsLeftbar = []

  const itemsTopbar = [
    {
      key: '/home',
      label: 'Home Page',
      onClick: () => goTo('/home'),
    },

    {
      key: '/about-us',
      label: 'About Us Page',
      onClick: () => goTo('/about-us'),
    },

    {
      key: '/services',
      label: 'Services Page',
      onClick: () => goTo('/services'),
    },

    {
      key: '/projects',
      label: 'Projects Page',
      onClick: () => goTo('/projects'),
    },

    {
      key: '/contact-us',
      label: 'Contact Us Page',
      onClick: () => goTo('/contact-us'),
    },

    {
      key: '/careers',
      label: 'Careers Page',
      onClick: () => goTo('/careers'),
    },

    {
      key: '/blog',
      label: 'Blog Page',
      onClick: () => goTo('/blog'),
    },

    {
      key: '/testimonials',
      label: 'Client Testimonials Page',
      onClick: () => goTo('/testimonials'),
    },

    {
      key: '/faq',
      label: 'FAQ Page',
      onClick: () => goTo('/faq'),
    },

    {
      key: '/file-upload',
      label: 'File Upload Page',
      onClick: () => goTo('/file-upload'),
    },

    {
      key: '/pricing',
      icon: <DollarOutlined />,
      label: 'Pricing',
      onClick: () => goTo('/pricing'),
    },
  ]

  const itemsLeftbarBottom = []

  const itemsMobile = [
    {
      key: '/profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
    ...itemsLeftbarBottom,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                header={<Logo height={40} />}
                items={itemsLeftbar}
                itemsBottom={itemsLeftbarBottom}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              header={!isLeftbar && <Logo height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
