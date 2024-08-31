'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import {
  SolutionOutlined,
  BulbOutlined,
  RocketOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ServicesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: services, isLoading } = Api.services.findMany.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Our Services
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Explore the range of services offered by Hima Technology to help your
        business grow and succeed.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Software Development"
            bordered={false}
            hoverable
            cover={
              <SolutionOutlined
                style={{
                  fontSize: '48px',
                  color: '#1890ff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              />
            }
          >
            <Paragraph>
              Detailed descriptions of the software development services
              offered, so that you can understand what solutions are available.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Consulting Services"
            bordered={false}
            hoverable
            cover={
              <BulbOutlined
                style={{
                  fontSize: '48px',
                  color: '#1890ff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              />
            }
          >
            <Paragraph>
              Read about consulting services, so that you can see how Hima
              Technology can help your business.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Marketing Services"
            bordered={false}
            hoverable
            cover={
              <RocketOutlined
                style={{
                  fontSize: '48px',
                  color: '#1890ff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              />
            }
          >
            <Paragraph>
              Learn about marketing services, so that you can understand how
              Hima Technology can help promote your business.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
