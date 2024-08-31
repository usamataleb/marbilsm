'use client'

import { useState } from 'react'
import {
  Typography,
  List,
  Card,
  Button,
  Form,
  Input,
  Upload,
  Row,
  Col,
  Spin,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CareersPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const {
    data: jobOpenings,
    isLoading: isLoadingJobs,
    refetch: refetchJobs,
  } = Api.jobOpening.findMany.useQuery({})
  const { mutateAsync: applyForJob } = Api.jobApplication.create.useMutation()
  const { mutateAsync: uploadFile } = useUploadPublic()

  const [form] = Form.useForm()
  const [uploading, setUploading] = useState(false)

  const handleApply = async (values: any) => {
    try {
      setUploading(true)
      const resumeUrl = await uploadFile({
        file: values.resume.file.originFileObj,
      })
      const coverLetterUrl = await uploadFile({
        file: values.coverLetter.file.originFileObj,
      })
      await applyForJob({
        data: {
          userId: user.id,
          jobId: values.jobId,
          resumeUrl: resumeUrl.url,
          coverLetterUrl: coverLetterUrl.url,
        },
      })
      enqueueSnackbar('Application submitted successfully', {
        variant: 'success',
      })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to submit application', { variant: 'error' })
    } finally {
      setUploading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Careers at Hima Technology</Title>
      <Text>Explore our current job openings and apply to join our team.</Text>
      {isLoadingJobs ? (
        <Spin />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={jobOpenings}
          renderItem={job => (
            <List.Item>
              <Card title={job.title}>
                <p>{job.description}</p>
                <Form form={form} onFinish={handleApply}>
                  <Form.Item name="jobId" initialValue={job.id} hidden>
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="resume"
                    label="Resume"
                    rules={[
                      { required: true, message: 'Please upload your resume' },
                    ]}
                  >
                    <Upload beforeUpload={() => false}>
                      <Button icon={<UploadOutlined />}>Upload Resume</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    name="coverLetter"
                    label="Cover Letter"
                    rules={[
                      {
                        required: true,
                        message: 'Please upload your cover letter',
                      },
                    ]}
                  >
                    <Upload beforeUpload={() => false}>
                      <Button icon={<UploadOutlined />}>
                        Upload Cover Letter
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={uploading}
                    >
                      Apply
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
