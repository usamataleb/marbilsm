'use client'

import { Typography, Row, Col, Card, List, Divider } from 'antd'
import { StarOutlined, LinkOutlined, TeamOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: services, isLoading: servicesLoading } =
    Api.service.findMany.useQuery({})
  const { data: projects, isLoading: projectsLoading } =
    Api.project.findMany.useQuery({})
  const { data: partners, isLoading: partnersLoading } =
    Api.partner.findMany.useQuery({})

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Welcome to Hima Technology</Title>
      <Paragraph>
        Explore our services, featured projects, and partners to understand what
        we offer and our expertise.
      </Paragraph>

      <Divider />

      <Title level={3} icon={<StarOutlined />}>
        Our Services
      </Title>
      <Row gutter={[16, 16]}>
        {services?.map(service => (
          <Col xs={24} sm={12} md={8} key={service.id}>
            <Card title={service.name}>
              <Text>{service.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Title level={3} icon={<StarOutlined />}>
        Featured Projects
      </Title>
      <Row gutter={[16, 16]}>
        {projects?.map(project => (
          <Col xs={24} sm={12} md={8} key={project.id}>
            <Card title={project.name}>
              <Text>{project.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Title level={3} icon={<LinkOutlined />}>
        Quick Links
      </Title>
      <List
        dataSource={[
          { title: 'About Us', link: '/about-us' },
          { title: 'Services', link: '/services' },
          { title: 'Projects', link: '/projects' },
          { title: 'Contact Us', link: '/contact-us' },
        ]}
        renderItem={item => (
          <List.Item>
            <a onClick={() => router.push(item.link)}>{item.title}</a>
          </List.Item>
        )}
      />

      <Divider />

      <Title level={3} icon={<TeamOutlined />}>
        Our Partners
      </Title>
      <Row gutter={[16, 16]}>
        {partners?.map(partner => (
          <Col xs={24} sm={12} md={8} key={partner.id}>
            <Card title={partner.name}>
              <Text>{partner.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
