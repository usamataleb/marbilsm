'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AboutUsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: leadershipTeam, isLoading: isLoadingTeam } =
    Api.user.findMany.useQuery({
      where: { status: 'active' },
      include: { projects: true },
    })

  return (
    <PageLayout layout="narrow">
      <Title level={1} style={{ textAlign: 'center' }}>
        About Hima Technology
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Learn more about our company's history and mission, and meet the
        leadership team behind our success.
      </Paragraph>

      <Title level={2}>Our History</Title>
      <Paragraph>
        Hima Technology was founded in 2010 with the mission to innovate and
        lead in the tech industry. Over the years, we have grown into a global
        company with a diverse team of experts dedicated to delivering
        cutting-edge solutions.
      </Paragraph>

      <Title level={2}>Our Mission</Title>
      <Paragraph>
        Our mission is to leverage technology to create impactful solutions that
        drive progress and improve lives. We are committed to excellence,
        innovation, and sustainability in all our endeavors.
      </Paragraph>

      <Title level={2} style={{ marginTop: '2em' }}>
        Leadership Team
      </Title>
      {isLoadingTeam ? (
        <Spin size="large" style={{ display: 'block', margin: '2em auto' }} />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {leadershipTeam?.map(member => (
            <Col key={member.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={member.name}
                    src={member.pictureUrl || '/default-avatar.png'}
                  />
                }
                actions={[<TeamOutlined key="team" />]}
              >
                <Card.Meta title={member.name} description={member.email} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
