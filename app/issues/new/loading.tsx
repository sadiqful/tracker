import { Heading, Card, Flex, Box } from '@radix-ui/themes'
import { Skeleton } from '@/app/components'

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-x-wl'>
      <Skeleton />
      <Skeleton height='20rem' />
    </Box>
  )
}

export default LoadingNewIssuePage