import { Issue } from '@prisma/client'
import { Heading, Flex, Text, Card } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import { IssueStatusBadge } from '@/app/components'


const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
    <>
        <Heading>{issue.title}</Heading>
        <Flex className='space-x-3 my-2'>
        <IssueStatusBadge status={issue.status}/>
        <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className='prose' mt='5'>
            <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
    </>
  )
}

export default IssueDetail