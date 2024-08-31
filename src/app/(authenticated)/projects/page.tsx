'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Select, List, Card, Spin, Row, Col } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ProjectsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [category, setCategory] = useState<string | undefined>(undefined)

  const {
    data: projects,
    isLoading,
    refetch,
  } = Api.project.findMany.useQuery({
    where: {
      status: 'completed',
      ...(category && { category }),
    },
    include: {
      user: true,
    },
  })

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    refetch()
  }

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Completed Projects</Title>
          <Text>
            View a list of completed projects to see examples of Hima
            Technology's work.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={24}>
          <Select
            placeholder="Filter by category"
            onChange={handleCategoryChange}
            style={{ width: 200 }}
            allowClear
          >
            <Option value="software development">Software Development</Option>
            <Option value="consulting">Consulting</Option>
            <Option value="marketing">Marketing</Option>
          </Select>
        </Col>
      </Row>
      {isLoading ? (
        <Row justify="center">
          <Spin />
        </Row>
      ) : (
        <Row justify="center">
          <Col span={24}>
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={projects}
              renderItem={project => (
                <List.Item>
                  <Card
                    title={project.name}
                    extra={<CheckCircleOutlined style={{ color: 'green' }} />}
                  >
                    <Text>{project.description}</Text>
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
    </PageLayout>
  )
}
