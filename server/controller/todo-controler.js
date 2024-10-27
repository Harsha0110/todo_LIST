import Todo from '../model/todo.js';



export const addtodo =async (request,response) => {
try{
    const newTodo =await Todo.create({
        data:request.body.data,
        createdAt:DataTransfer.now()
    })
    await newTodo.save();

    return response.status(200).json(newTodo);

}
catch (error) {
    return response.status(500).json(error);
}

}