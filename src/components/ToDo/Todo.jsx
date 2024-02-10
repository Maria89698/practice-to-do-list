export const Todo = ({ todoID, text, completed, onDelete, onToggleCompleted}) => {
    const handleDelete = () => {
        onDelete(todoID)
    }

    const handleChange = () => {
        onToggleCompleted(todoID)
    }

    return (
        <Item>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChange}/>
            <Text>{text}</Text>
            <Button onClick={handleDelete}>Delete</Button>
        </Item>
    )
}