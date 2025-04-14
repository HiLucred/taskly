import { TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { PlusIcon } from 'lucide-react-native'
import { colors } from "@/constants/colors"

interface InputTaskBarProps {
  value: string | undefined
  onAddTask: () => void
  onChangeText: (task: string) => void
}

export const InputTaskBar = ({ value, onAddTask, onChangeText }: InputTaskBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        placeholder="Digite sua tarefa..."
        placeholderTextColor="gray"
        onChangeText={(task) => onChangeText(task)}
      />
      <TouchableOpacity style={styles.addButton} onPress={onAddTask}>
        <PlusIcon color={colors.dark} size={28} />
      </TouchableOpacity>
    </View>
  )
}