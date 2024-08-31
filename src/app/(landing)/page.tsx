'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  CodeOutlined,
  SolutionOutlined,
  RocketOutlined,
  LineChartOutlined,
  HeartOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Custom Software Development',
      description:
        'Tailored solutions to streamline your business operations and boost efficiency.',
      icon: <CodeOutlined />,
    },
    {
      heading: 'Strategic Consulting',
      description:
        'Expert advice to navigate complex technological environments and optimize processes.',
      icon: <SolutionOutlined />,
    },
    {
      heading: 'Innovative Marketing',
      description:
        'Compelling campaigns to enhance brand visibility and drive engagement.',
      icon: <RocketOutlined />,
    },
    {
      heading: 'Data-Driven Insights',
      description:
        'Leverage analytics to make informed decisions and stay ahead of the competition.',
      icon: <LineChartOutlined />,
    },
    {
      heading: 'Customer-Centric Approach',
      description:
        'Solutions designed with your business needs and goals in mind.',
      icon: <HeartOutlined />,
    },
    {
      heading: 'Continuous Support',
      description: 'Ongoing assistance to ensure your success and growth.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'CEO, Tech Innovators',
      content:
        'Hima Technology transformed our operations with their custom software solutions. Our efficiency has never been higher!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Marketing Director, Creative Solutions',
      content:
        'Their marketing strategies have significantly boosted our brand visibility and engagement. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'CTO, Future Enterprises',
      content:
        'The strategic consulting provided by Hima Technology was invaluable in navigating our digital transformation.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily White',
      designation: 'Founder, Startup Hub',
      content:
        'Their data-driven insights have helped us make informed decisions and stay competitive in our industry.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'David Green',
      designation: 'Operations Manager, Efficient Systems',
      content:
        'The continuous support from Hima Technology ensures we are always on the right track. Fantastic service!',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Black',
      designation: 'Product Manager, Innovative Products',
      content:
        'Their customer-centric approach means our needs are always met. We couldn’t be happier with the results.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Services',
      link: '/services',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features to get you started.',
      monthly: 9,
      yearly: 69,
      features: ['Custom Software', 'Basic Support'],
    },
    {
      title: 'Pro',
      description: 'Advanced features for growing businesses.',
      monthly: 29,
      yearly: 249,
      features: [
        'All Basic Features',
        'Strategic Consulting',
        'Priority Support',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive solutions for large enterprises.',
      monthly: 99,
      yearly: 799,
      features: [
        'All Pro Features',
        'Dedicated Account Manager',
        '24/7 Support',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer custom software development, strategic consulting, and innovative marketing solutions.',
    },
    {
      question: 'How can your services benefit my business?',
      answer:
        'Our services are designed to streamline operations, optimize processes, and enhance brand visibility, driving growth and efficiency.',
    },
    {
      question: 'Do you offer support after project completion?',
      answer:
        'Yes, we provide continuous support to ensure your ongoing success and growth.',
    },
    {
      question: 'How do I get started?',
      answer:
        'You can get started by contacting us through our website or signing up for one of our packages.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Consultation',
      description:
        'We start with a detailed consultation to understand your needs and goals.',
    },
    {
      heading: 'Planning',
      description:
        'Our team creates a strategic plan tailored to your business.',
    },
    {
      heading: 'Implementation',
      description:
        'We develop and implement the solutions, ensuring seamless integration.',
    },
    {
      heading: 'Support',
      description:
        'Ongoing support to ensure your continued success and growth.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Struggling with inefficient processes?',
    },
    {
      emoji: '🤔',
      title: 'Unsure how to navigate digital transformation?',
    },
    {
      emoji: '📉',
      title: 'Finding it hard to stand out in a crowded market?',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Transform Your Business with Cutting-Edge Technology"
        subtitle="Unlock your potential with our comprehensive tech and business solutions."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/yXcX6g-himatechnology-ac8M"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy clients"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Overcoming Business Challenges"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="Our Process" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Business Goals with Our Services"
        subtitle="Our expertise and innovative solutions are designed to help you succeed."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from our satisfied clients who have achieved their dreams with our help."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for Your Business"
        subtitle="Our flexible packages are designed to meet your specific needs and budget."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Business?"
        subtitle="Join the ranks of our satisfied clients and take your business to the next level."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
