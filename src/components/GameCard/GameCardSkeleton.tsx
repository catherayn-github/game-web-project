import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


function GameCardSkeleton() {
  return (
    <Card width='270px' borderRadius={10} overflow={"hidden"}>
        <Skeleton height="200px" />
        <CardBody></CardBody>
        <SkeletonText marginBottom={4}></SkeletonText>
    </Card>
  )
}

export default GameCardSkeleton