import { colors } from "@/constants/colors"
import { CheckIcon, Trash2Icon } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

interface TaskCardProps {
  text: string
  isChecked: boolean
  onRemoveTask: () => void
  onCheckTask: () => void
}

export const TaskCard = ({ text, isChecked, onRemoveTask, onCheckTask }: TaskCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.radioButton} onPress={onCheckTask}>
        {isChecked && <CheckIcon width={12} color='white' />}
      </TouchableOpacity>
      <Text style={isChecked ? styles.taskTextChecked : styles.taskText}>{text}</Text>
      <TouchableOpacity onPress={onRemoveTask}>
        <Trash2Icon size={20} color={colors.gray} />
      </TouchableOpacity>
    </View>
  )
}