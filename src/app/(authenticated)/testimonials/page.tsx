'use client'

import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  List,
  Card,
  Row,
  Col,
  Spin,
} from 'antd'
import { SendOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ClientTestimonialsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: testimonials,
    isLoading,
    refetch,
  } = Api.testimonial.findMany.useQuery({})
  const { mutateAsync: createTestimonial } =
    Api.testimonial.create.useMutation()

  const [form] = Form.useForm()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (values: { name: string; message: string }) => {
    setSubmitting(true)
    try {
      await createTestimonial({ data: values })
      enqueueSnackbar('Testimonial submitted successfully!', {
        variant: 'success',
      })
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to submit testimonial. Please try again.', {
        variant: 'error',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Client Testimonials</Title>
      <Paragraph>
        Read what our past clients have to say about their experiences with Hima
        Technology.
      </Paragraph>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={testimonials}
          renderItem={item => (
            <List.Item>
              <Card>
                <Title level={4}>{item.name}</Title>
                <Paragraph>{item.message}</Paragraph>
              </Card>
            </List.Item>
          )}
        />
      )}

      <Title level={3}>Submit Your Testimonial</Title>
      <Paragraph>Share your experience with Hima Technology.</Paragraph>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Your name" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={4} placeholder="Your message" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            icon={<SendOutlined />}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
