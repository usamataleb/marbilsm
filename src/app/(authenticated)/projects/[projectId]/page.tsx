'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Spin, Image } from 'antd'
import { VideoCameraOutlined, PictureOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ProjectDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const projectId = params.projectId

  const {
    data: project,
    isLoading,
    refetch,
  } = Api.project.findUnique.useQuery({
    where: { id: projectId },
    include: { tasks: true, projectClients: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!project) {
    enqueueSnackbar('Project not found', { variant: 'error' })
    router.push('/projects')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{project.name}</Title>
      <Paragraph>{project.description}</Paragraph>
      <Text type="secondary">
        Start Date: {dayjs(project.startDate).format('MMMM D, YYYY')}
      </Text>
      <br />
      <Text type="secondary">
        End Date: {dayjs(project.endDate).format('MMMM D, YYYY')}
      </Text>

      <Title level={3}>Media</Title>
      <Row gutter={[16, 16]}>
        {project.tasks?.map(task => (
          <Col key={task.id} xs={24} sm={12} md={8} lg={6}>
            {task.description?.includes('video') ? (
              <VideoCameraOutlined style={{ fontSize: '24px' }} />
            ) : (
              <PictureOutlined style={{ fontSize: '24px' }} />
            )}
            <Paragraph>{task.description}</Paragraph>
          </Col>
        ))}
      </Row>

      <Title level={3}>Images</Title>
      <Row gutter={[16, 16]}>
        {project.tasks?.map(
          task =>
            task.description?.includes('image') && (
              <Col key={task.id} xs={24} sm={12} md={8} lg={6}>
                <Image
                  width={200}
                  src={task.description}
                  alt={`Image for ${task.name}`}
                />
              </Col>
            ),
        )}
      </Row>
    </PageLayout>
  )
}
