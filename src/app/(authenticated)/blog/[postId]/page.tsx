'use client'

import { useState } from 'react'
import {
  Typography,
  Spin,
  Row,
  Col,
  Comment,
  Form,
  Input,
  Button,
  List,
} from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BlogPostDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [comment, setComment] = useState<string>('')
  const [comments, setComments] = useState<any[]>([])

  const { data: post, isLoading: postLoading } =
    Api.blogPost.findUnique.useQuery({
      where: { id: params.postId },
      include: { comments: true },
    })

  const { mutateAsync: createComment } = Api.comment.create.useMutation()

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      enqueueSnackbar('Comment cannot be empty', { variant: 'error' })
      return
    }

    try {
      const newComment = await createComment({
        data: {
          content: comment,
          postId: params.postId,
          userId: user.id,
        },
      })
      setComments([...comments, newComment])
      setComment('')
      enqueueSnackbar('Comment added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add comment', { variant: 'error' })
    }
  }

  if (postLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{post?.title}</Title>
      <Paragraph>{post?.content}</Paragraph>
      <Row>
        <Col span={24}>
          <Title level={4}>Comments</Title>
          <List
            dataSource={post?.comments}
            renderItem={(item: any) => (
              <Comment
                author={item.user.name}
                content={item.content}
                datetime={dayjs(item.dateCreated).format('YYYY-MM-DD HH:mm')}
              />
            )}
          />
          <Form.Item>
            <TextArea
              rows={4}
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Write a comment..."
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={false}
              onClick={handleCommentSubmit}
              type="primary"
              icon={<SendOutlined />}
            >
              Add Comment
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </PageLayout>
  )
}
