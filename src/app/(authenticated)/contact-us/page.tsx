'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Form, Input, Button, Row, Col, Typography, Space } from 'antd'
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ContactUsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const { mutateAsync: createContact } = Api.contact.create.useMutation()

  const handleSubmit = async (values: Prisma.ContactCreateInput) => {
    try {
      await createContact({ data: values })
      enqueueSnackbar('Message sent successfully!', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to send message. Please try again later.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Contact Us</Title>
          <Paragraph>
            If you have any questions or need further information, feel free to
            contact us through the form below or reach out to us via email,
            phone, or visit our office.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large">
            <Space>
              <MailOutlined />
              <Text>Email: contact@himatechnology.com</Text>
            </Space>
            <Space>
              <PhoneOutlined />
              <Text>Phone: +123 456 7890</Text>
            </Space>
            <Space>
              <HomeOutlined />
              <Text>Address: 123 Hima Technology St, Tech City</Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
