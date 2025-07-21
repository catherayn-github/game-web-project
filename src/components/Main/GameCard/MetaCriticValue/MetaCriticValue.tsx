import { Badge } from '@chakra-ui/react'
interface Props {
    metaCriticValue : number
}
function MetaCriticValue({metaCriticValue}: Props) {
    let badgeColor = metaCriticValue > 75 ? "green" : metaCriticValue > 60 ? "yellow" : "red";
  return (
    <div>
        <Badge fontSize={"14px"}  paddingX={2} borderRadius={"4px"} colorScheme={badgeColor}>{metaCriticValue}</Badge>
    </div>
  )
}

export default MetaCriticValue