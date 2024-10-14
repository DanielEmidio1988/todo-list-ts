export interface ITask {
    description: string;
    selected: boolean;
    finish: boolean;
    id: string;
}

export interface IStateInitial{
    tasks: ITask[];
    taskSelected: null;
}