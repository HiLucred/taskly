import { Alert, FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { InputTaskBar } from "./components/input-task-bar"
import { TaskCard } from "./components/task-card"
import { useState } from "react"
import { CircleCheckIcon, Clock3Icon, PencilLineIcon } from "lucide-react-native"
import { colors } from "@/constants/colors"
import uuid from 'react-native-uuid'
import ConfettiCannon from 'react-native-confetti-cannon';

type Task = {
  id: string
  text: string
  isChecked: boolean
}

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<string | undefined>(undefined)
  const [showConfetti, setShowConfetti] = useState(false)

  const tasksSummary = tasks.reduce((acc, task) => {
    if (task.isChecked) {
      acc.finished += 1
      return acc
    }

    acc.pending += 1
    return acc
  }, {
    finished: 0,
    pending: 0,
  })

  // const showConfetti = tasksSummary.finished === tasks.length

  const handleAddTask = () => {
    if (!newTask) return

    setTasks((state) => [
      ...state,
      { id: uuid.v4(), text: newTask, isChecked: false }
    ])
    setNewTask(undefined)
  }

  const handleRemoveTask = (taskIndex: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskIndex)

    Alert.alert('Remover Tarefa?', 'Esta ação é permanente e não pode ser desfeita.', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => setTasks(updatedTasks) }
    ])
  }

  const handleCheckTask = (taskindex: string) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === taskindex) task.isChecked = !task.isChecked

      return task
    })

    setTasks(tasksUpdated)

    const pendingTasks = tasks.filter((task) => !task.isChecked).length
    if (pendingTasks === 0) setShowConfetti(true)
  }

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>Taskly<PencilLineIcon size={32} color={colors.primary} /></Text>
      </View>

      <View style={styles.container}>
        <InputTaskBar
          value={newTask}
          onAddTask={handleAddTask}
          onChangeText={setNewTask}
        />

        <View style={styles.tasksSummary}>
          <View style={styles.taskSummaryItem}>
            <CircleCheckIcon size={16} color={colors.accent} />
            <Text style={{ color: colors.accent }}> {tasksSummary.finished}/{tasks.length} concluído(s)</Text>
          </View>
          <View style={styles.taskSummaryItem}>
            <Clock3Icon size={16} color={'gray'} />
            <Text style={{ color: 'gray' }}> {tasksSummary.pending} pendente(s)</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.placeholderEmptyList}>Tudo em silêncio por aqui. 😴</Text>
          )}
          renderItem={({ item: task }) => (
            <TaskCard
              text={task.text}
              isChecked={task.isChecked}
              onRemoveTask={() => handleRemoveTask(task.id)}
              onCheckTask={() => handleCheckTask(task.id)}
            />
          )}
        />
      </View>

      {showConfetti && (
        <ConfettiCannon
          count={70}
          origin={{ x: 0, y: 0 }}
          explosionSpeed={200}
          fallSpeed={3000}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
    </View>
  )
}