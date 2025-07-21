import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"



function GameCardSkeleton() {
  return (
    <>
      <Card>
        <Skeleton height="200px" />
        <CardBody></CardBody>
        <SkeletonText marginBottom={4}></SkeletonText>
     </Card>
    </>
  
  )
}

export default GameCardSkeleton